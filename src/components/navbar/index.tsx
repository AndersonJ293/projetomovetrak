"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import Logo from "../../assets/logo.png";
import MinimalLogo from "../../assets/minimalLogo.png";
import AddUser from "../../assets/icons/addUser.png";
import Exit from "../../assets/icons/exit.png";
import File from "../../assets/icons/file.png";
import Group from "../../assets/icons/group.png";
import Route from "../../assets/icons/route.png";
import Arrow from "../../assets/icons/arrow.png";
import Link from "next/link";

export default function NavBar() {
  const [aberto, setAberto] = useState(false);
  return (
    <div
      className={`${styles.container} ${aberto ? "" : styles.containerClosed}`}
    >
      {/* logo  */}
      <Link href={"/dashboard"}>
        <Image
          className={styles.logo}
          width={0}
          height={45}
          src={aberto ? Logo : MinimalLogo}
          alt="Logo Movetrak"
        />
      </Link>
      {/* proprietarios */}
      <div className={styles.buttonList}>
        <Link href={"/proprietarios"}>
          <div
            className={`${styles.buttonDiv} ${
              aberto ? "" : styles.buttonDivFechado
            }`}
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={AddUser}
              alt="Adicionar Usuário"
            />
            <span
              className={`${styles.menuText} ${
                aberto ? "" : styles.menuTextFechado
              }`}
            >
              Proprietários
            </span>
          </div>
        </Link>

        {/* relatorios */}
        <div
          className={`${styles.buttonDiv} ${
            aberto ? "" : styles.buttonDivFechado
          }`}
          // onClick={() => setAberto(!aberto)}
        >
          <Image
            className={styles.menuIcon}
            height={25}
            width={25}
            src={File}
            alt="Relatórios"
          />
          <span
            className={`${styles.menuText} ${
              aberto ? "" : styles.menuTextFechado
            }`}
          >
            Relatórios
          </span>
        </div>
        {/* rotas */}
        <div
          className={`${styles.buttonDiv} ${
            aberto ? "" : styles.buttonDivFechado
          }`}
          // onClick={() => setAberto(!aberto)}
        >
          <Image
            className={styles.menuIcon}
            height={25}
            width={25}
            src={Route}
            alt="Rotas"
          />
          <span
            className={`${styles.menuText} ${
              aberto ? "" : styles.menuTextFechado
            }`}
          >
            Rotas
          </span>
        </div>
        {/* usuarios */}
        <div
          className={`${styles.buttonDiv} ${
            aberto ? "" : styles.buttonDivFechado
          }`}
          // onClick={() => setAberto(!aberto)}
        >
          <Image
            className={styles.menuIcon}
            height={25}
            width={25}
            src={Group}
            alt="Usuários"
          />
          <span
            className={`${styles.menuText} ${
              aberto ? "" : styles.menuTextFechado
            }`}
          >
            Usuários
          </span>
        </div>
      </div>
      {/* sair */}
      <div
        className={`${styles.buttonDiv} ${styles.logOutButton} ${
          aberto ? "" : styles.buttonDivFechado
        }`}
        // onClick={() => setAberto(!aberto)}
      >
        <Image
          className={styles.menuIcon}
          height={25}
          width={25}
          src={Exit}
          alt="Sair"
        />
        <span
          className={`${styles.menuText} ${
            aberto ? "" : styles.menuTextFechado
          }`}
        >
          Sair
        </span>
      </div>
      {/* hover */}
      <div
        className={`${styles.verticalLine} ${
          aberto ? styles.verticalLineAberto : ""
        }`}
        onClick={() => setAberto(!aberto)}
      >
        <div className={styles.floatingButton}>
          <Image
            className={styles.arrow}
            width={10}
            height={10}
            src={Arrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
