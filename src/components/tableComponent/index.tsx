"use client";
import styles from "./tableComponent.module.css";
import Image from "next/image";

import searchIcon from "../../../public/icons/search.svg";
import { Component, useState, useEffect } from "react";

interface TableComponentProps {
  headerTitle: string;
  tableColumns: any;
  actions?: Component;
}

export default function TableComponent(props: TableComponentProps) {
  // Estado para armazenar dados
  const [data, setData] = useState([
    {
      id: 1,
      nome: "Motor Ocioso PKY-2832",
      data: "2023-06-23 15:40:00",
      tipo: "Motor Ocioso",
      responsavel: "Anderson Junior",
      acao: "",
    },
    {
      id: 2,
      nome: "Relatório semana dia 18",
      data: "2023-06-23 12:40:00",
      tipo: "Relatório Semanal Prefeitura",
      responsavel: "Anderson Junior",
      acao: "",
    },
    {
      id: 3,
      nome: "Teste Seabra",
      data: "2023-06-21 11:40:00",
      tipo: "Teste",
      responsavel: "Victor Castro",
      acao: "",
    },
    {
      id: 4,
      nome: "Historico",
      data: "2023-06-19 15:40:00",
      tipo: "Historico Geral",
      responsavel: "Cliente",
      acao: "",
    },
    {
      id: 5,
      nome: "Rotas",
      data: "2023-02-23 15:40:00",
      tipo: "Relatorio de Rotas",
      responsavel: "Usuario",
      acao: "",
    },
    {
      id: 6,
      nome: "Velocidade Excedida PLK-0998",
      data: "2023-01-23 15:40:00",
      tipo: "Excesso de Velocidade",
      responsavel: "Teste",
      acao: "",
    },
    {
      id: 7,
      nome: "Velocidade Excedida PLK-0998",
      data: "2022-06-23 15:40:00",
      tipo: "Excesso de Velocidade",
      responsavel: "Teste",
      acao: "",
    },
    {
      id: 8,
      nome: "Velocidade Excedida PLK-0998",
      data: "2023-04-10 20:40:00",
      tipo: "Excesso de Velocidade",
      responsavel: "Teste",
      acao: "",
    },
    {
      id: 9,
      nome: "Velocidade Excedida PLK-0998",
      data: "2023-06-21 20:40:00",
      tipo: "Excesso de Velocidade",
      responsavel: "Teste",
      acao: "",
    },
  ]);

  // Estado para armazenar a busca
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para armazenar dados do paginador
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Estado para armazenar os dados filtrados
  const [filteredData, setFilteredData] = useState([]);

  // Estado para armazenar a configuração de ordenação
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Efeito para atualizar os dados filtrados quando ocorrem alterações em data e searchTerm
  useEffect(() => {
    let updatedData: any = data;

    if (searchTerm) {
      updatedData = data.filter((item: any) => {
        const { _, nome, tipo, responsavel } = item;

        // Verifica se o termo buscado corresponde aos dados
        return (
          nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          responsavel.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    setFilteredData(updatedData);
  }, [data, searchTerm]);

  // Função para ordenar os dados com base na coluna selecionada
  const sortData = (key: any) => {
    let direction = "asc";

    // Verifica se a coluna selecionada é a mesma e inverte a direção
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    // Ordena os dados filtrados com base na coluna selecionada
    const sortedData = [...filteredData].sort((a: any, b: any) => {
      if (key === "data") {
        // Converte as datas em objetos Date e compara usando getTime()
        const dateA = new Date(a[key]).getTime();
        const dateB = new Date(b[key]).getTime();

        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      } else {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      }
    });

    // Inverte as colunas se a direção for descendente
    if (direction === "desc") {
      sortedData.reverse();
    }

    // Atualiza os dados filtrados e a configuração de ordenação
    setFilteredData(sortedData);
    setSortConfig({ key, direction });
  };

  // Determinar os indices incial e final dos itens a serem renderizados
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  // Função para pegar total de paginas e total de itens
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const totalItemsCount = filteredData.length;

  // Função para formatar data
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  function renderTable(data: any) {
    return (
      <>
        {data.map((item: any) => (
          <th
            key={item.id}
            onClick={() =>
              sortData(
                item.title
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
              )
            }
          >
            {item.title}{" "}
            {sortConfig.key ===
              `${item.title
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")}` &&
              (sortConfig.direction === "asc" ? "▲" : "▼")}
          </th>
        ))}
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <span className={styles.headerTitle}>{props.headerTitle}</span>

        <div className={styles.headerButtons}>
          {/* Barra de pesquisa */}
          <div className={styles.searchBar}>
            <Image
              src={searchIcon}
              width={18}
              height={18}
              alt="Icone de busca"
            />
            {/* Manipulador de eventos para atualizar a pesquisa */}
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Buscar"
            />
          </div>

          <div className={styles.registerButton}>
            <span>Cadastrar</span>
          </div>
        </div>
      </div>

      <div className={styles.dataContainer}>
        <table className={styles.dataTable}>
          <thead className={styles.dataHeader}>
            {/* Cabeçalhos da tabela com funcionalidade de ordenação */}
            <tr>
              {renderTable(props.tableColumns)}

              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {currentItems.map((item: any) => (
              <tr className={styles.dataBody} key={item.id}>
                <td>{item.nome}</td>
                <td>{formatDate(item.data)}</td>
                <td>{item.tipo}</td>
                <td>{item.responsavel}</td>
                <td>{item.acao}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pageSelector}>
          <p>
            {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLastItem, totalItemsCount)} de {totalItemsCount}{" "}
          </p>
          <button
            className={styles.changePage}
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            {`<`}
          </button>
          <button
            className={styles.changePage}
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
          >
            {`>`}
          </button>
        </div>
      </div>
    </div>
  );
}
