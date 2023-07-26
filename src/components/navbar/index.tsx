"use client";
import { useState, useContext } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import MinimalLogo from "../../../public/minimalLogo.svg";
import AddUser from "../../../public/icons/addUser.svg";
import MapPin from "../../../public/icons/pin.svg";
import File from "../../../public/icons/file.svg";
import BellPin from "../../../public/icons/bell-pin.svg";
import Group from "../../../public/icons/group.svg";
import Arrow from "../../../public/icons/arrow.svg";
import Exit from "../../../public/icons/exit.svg";
import styles from "./navbar.module.css";
import Link from "next/link";
import { UserContext } from "@/contexts/userContext";

export default function NavBar() {
  const [aberto, setAberto] = useState(false);
  const { handleLogOut } = useContext(UserContext);
  const [botaoAberto, setBotaoAberto] = useState("");

  function handleBotao(botao: string) {
    !aberto
      ? setAberto(true)
      : botaoAberto === botao
      ? setBotaoAberto("")
      : setBotaoAberto(botao);
  }
  function fecharMenu() {
    setAberto(!aberto);
    setBotaoAberto("");
  }

  return (
    <div
      className={`${styles.containerAberto} ${
        aberto ? "" : styles.containerClosed
      }`}
    >
      <div className={styles.header}>
        <Link title="DashBoard" href={"/dashboard"}>
          <div className={styles.logoDiv}>
            <Image
              className={styles.logo}
              width={0}
              height={35}
              src={aberto ? Logo : MinimalLogo}
              alt="Logo Movetrak"
            />
          </div>
        </Link>
      </div>

      <div className={styles.pagesContainer}>
        <div
          className={`${styles.pageDiv} ${aberto ? "" : styles.pageDivFechado}`}
        >
          <div
            className={`${styles.collapseButton} ${
              botaoAberto === "cadastro" ? styles.collapseButtonOpen : ""
            } ${aberto ? "" : styles.collapseButtonFechado}`}
            onClick={() => handleBotao("cadastro")}
            title="Cadastro"
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={AddUser}
              alt="Adicionar Usuário"
            />{" "}
            <span
              style={
                aberto
                  ? { display: "inline", whiteSpace: "nowrap" }
                  : { display: "none" }
              }
            >
              Cadastro
            </span>
            <Image
              className={aberto ? styles.arrow : styles.arrowHidden}
              height={15}
              width={15}
              src={Arrow}
              alt="Seta"
            />
          </div>
          <div
            className={`${styles.contentHidden} ${
              botaoAberto === "cadastro" ? styles.content : ""
            }`}
          >
            <div className={styles.indentedButtons}>
              <Link title="Cliente" href={"/proprietarios"}>
                <div className={styles.button}>● Clientes</div>
              </Link>
              <div className={styles.indentedButtons}>
                <Link title="Veículo" href={"/veiculos"}>
                  <div className={styles.secButton}>Veículos</div>
                </Link>
                <Link title="Motoristas" href={"/motoristas"}>
                  <div className={styles.secButton}>Motoristas</div>
                </Link>
              </div>
              <Link title="Rotas" href={"/rotas"}>
                <div className={styles.button}>● Rotas</div>
              </Link>
              <div className={styles.indentedButtons}>
                <Link title="Vincular Rota" href={"/rotas"}>
                  <div className={styles.secButton}>Vincular Rota</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.pageDiv} ${aberto ? "" : styles.pageDivFechado}`}
        >
          <div
            className={`${styles.collapseButton} ${
              botaoAberto === "monitoramento" ? styles.collapseButtonOpen : ""
            }${aberto ? "" : styles.collapseButtonFechado}`}
            onClick={() => handleBotao("monitoramento")}
            title="Monitoramento"
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={MapPin}
              alt="Monitoramento"
            />{" "}
            <span
              style={
                aberto
                  ? { display: "inline", whiteSpace: "nowrap" }
                  : { display: "none" }
              }
            >
              Monitoramento
            </span>
            <Image
              className={aberto ? styles.arrow : styles.arrowHidden}
              height={15}
              width={15}
              src={Arrow}
              alt="Seta"
            />
          </div>
          <div
            className={`${styles.contentHidden} ${
              botaoAberto === "monitoramento" ? styles.content : ""
            }`}
          >
            <div className={styles.indentedButtons}>
              <Link title="Localização" href={"/rastreamento"}>
                <div className={styles.button}>● Localização</div>
              </Link>
              <Link title="Rotas" href={"/rotas"}>
                <div className={styles.button}>● Rotas</div>
              </Link>
              <Link title="Trajetos" href={"/trajetos"}>
                <div className={styles.button}>● Trajetos</div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`${styles.pageDiv} ${aberto ? "" : styles.pageDivFechado}`}
        >
          <div
            className={`${styles.collapseButton} ${
              botaoAberto === "relatorios" ? styles.collapseButtonOpen : ""
            }${aberto ? "" : styles.collapseButtonFechado}`}
            onClick={() => handleBotao("relatorios")}
            title="Relatórios"
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={File}
              alt="Relatórios"
            />{" "}
            <span
              style={
                aberto
                  ? { display: "inline", whiteSpace: "nowrap" }
                  : { display: "none" }
              }
            >
              Relatórios
            </span>
            <Image
              className={aberto ? styles.arrow : styles.arrowHidden}
              height={15}
              width={15}
              src={Arrow}
              alt="Seta"
            />
          </div>
          <div
            className={`${styles.contentHidden} ${
              botaoAberto === "relatorios" ? styles.content : ""
            }`}
          >
            <div className={styles.indentedButtons}>
              <Link title="Novo Relatório" href={"/relatorios"}>
                <div className={styles.button}>● Novo Relatório</div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`${styles.pageDiv} ${aberto ? "" : styles.pageDivFechado}`}
        >
          <div
            className={`${styles.collapseButton} ${
              botaoAberto === "alertas" ? styles.collapseButtonOpen : ""
            }${aberto ? "" : styles.collapseButtonFechado}`}
            onClick={() => handleBotao("alertas")}
            title="Alertas"
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={BellPin}
              alt="Alertas"
            />{" "}
            <span
              style={
                aberto
                  ? { display: "inline", whiteSpace: "nowrap" }
                  : { display: "none" }
              }
            >
              Alertas
            </span>
            <Image
              className={aberto ? styles.arrow : styles.arrowHidden}
              height={15}
              width={15}
              src={Arrow}
              alt="Seta"
            />
          </div>
          <div
            className={`${styles.contentHidden} ${
              botaoAberto === "alertas" ? styles.content : ""
            }`}
          >
            <div className={styles.indentedButtons}>
              <Link title="Configurar Alertas" href={"/alertas"}>
                <div className={styles.button}>● Configurar Alertas</div>
              </Link>
              <Link title="Relatório de Alertas" href={"/relatorio-alertas"}>
                <div className={styles.button}>● Relatório de Alertas</div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`${styles.pageDiv} ${aberto ? "" : styles.pageDivFechado}`}
        >
          <div
            className={`${styles.collapseButton} ${
              botaoAberto === "admin" ? styles.collapseButtonOpen : ""
            }${aberto ? "" : styles.collapseButtonFechado}`}
            onClick={() => handleBotao("admin")}
            title="Painel Admin"
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={Group}
              alt="Admin"
            />{" "}
            <span
              style={
                aberto
                  ? { display: "inline", whiteSpace: "nowrap" }
                  : { display: "none" }
              }
            >
              Painel Admin
            </span>
            <Image
              className={aberto ? styles.arrow : styles.arrowHidden}
              height={15}
              width={15}
              src={Arrow}
              alt="Seta"
            />
          </div>
          <div
            className={`${styles.contentHidden} ${
              botaoAberto === "admin" ? styles.content : ""
            }`}
          >
            <div className={styles.indentedButtons}>
              <Link title="Usuários" href={"/users"}>
                <div className={styles.button}>● Usuários</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.pageDiv} ${aberto ? "" : styles.pageDivFechado}`}
      >
        <div
          className={`${styles.collapseButton} ${
            botaoAberto === "sair" ? styles.collapseButtonOpen : ""
          }${aberto ? "" : styles.collapseButtonFechado}`}
          onClick={() => handleLogOut()}
          title="Sair"
        >
          <Image
            className={styles.menuIcon}
            height={25}
            width={25}
            src={Exit}
            alt="Sair"
          />{" "}
          <span
            style={
              aberto
                ? {
                    display: "flex",
                    whiteSpace: "nowrap",
                    width: "100%",
                    justifyContent: "center",
                  }
                : { display: "none" }
            }
          >
            Sair
          </span>
        </div>
      </div>

      <div
        className={`${styles.verticalLine} ${
          aberto ? styles.verticalLineAberto : ""
        }`}
        onClick={() => fecharMenu()}
      >
        <div className={styles.floatingButton}>
          <Image
            className={`${styles.verticalLineArrow} ${
              !aberto ? "" : styles.verticalLineArrowAberto
            }`}
            width={15}
            height={15}
            src={Arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
