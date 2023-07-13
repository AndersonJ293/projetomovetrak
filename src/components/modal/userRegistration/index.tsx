"use client";
import { SetStateAction, useEffect, useState } from "react";
import styles from "./modal.module.css";
import RadioButton from "@/components/radioButton";
import Image from "next/image";
import CloseIcon from "../../../../public/icons/close.svg";

interface UserModal {
  funcao: string;
  nome?: string;
  email?: string;
  login?: string;
  tipoUsuario?: string;
  aberto: boolean;
  fechar: (value: any) => void;
}

const UserRegistrationModal = (props: UserModal) => {
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");

  useEffect(() => {
    if (props.funcao === "Editar") {
      if (props.nome) setNome(props.nome);
      if (props.login) setLogin(props.login);
      if (props.email) setEmail(props.email);
      if (props.tipoUsuario) setTipoUsuario(props.tipoUsuario);
      setSenha("");
    } else {
      setNome("");
      setLogin("");
      setSenha("");
      setEmail("");
      setTipoUsuario("");
    }
  }, [props.aberto]);

  const handleOptionChange = (value: string) => {
    setTipoUsuario(value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <span className={styles.title}>{props.funcao} Usuário</span>
          <div
            className={styles.closeButton}
            onClick={() => props.fechar(false)}
          >
            <Image src={CloseIcon} width={25} height={25} alt="" />
          </div>
        </div>

        <div className={styles.contentContainer}>
          <span className={styles.subTitle}>Informações do Usuário</span>
          <div className={styles.inputsDiv}>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Nome</span>
              <input
                className={styles.input}
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Email</span>
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Login</span>
              <input
                className={styles.input}
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.inputText}>Senha</span>
              <input
                className={styles.input}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className={styles.radioWrapper}>
              <RadioButton
                id="admin"
                value="admin"
                label="Admin"
                checked={tipoUsuario === "admin"}
                onChange={handleOptionChange}
              />
              <RadioButton
                id="operator"
                value="operator"
                label="Operador"
                checked={tipoUsuario === "operator"}
                onChange={handleOptionChange}
              />
              <RadioButton
                id="client"
                value="client"
                label="Cliente"
                checked={tipoUsuario === "client"}
                onChange={handleOptionChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.button} onClick={handleSubmit}>
            <span>{props.funcao === "Editar" ? "Salvar" : "Cadastrar"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationModal;
