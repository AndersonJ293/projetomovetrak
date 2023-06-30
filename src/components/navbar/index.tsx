"use client";
import { useState, useContext } from "react";
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
import MapPin from "@/assets/icons/mapPin.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserContext } from "@/contexts/userContext";

export default function NavBar() {
  const [aberto, setAberto] = useState(false);
  const { handleLogOut } = useContext(UserContext);
  const pathname = usePathname();

  return (
    <div
      className={`${styles.container} ${aberto ? "" : styles.containerClosed}`}
    >
      {/* logo  */}
      <Link title="DashBoard" href={"/dashboard"}>
        <div
          className={`${styles.buttonDiv} ${aberto ? "" : styles.buttonDivFechado
            } ${pathname === "/dashboard" ? styles.activeButton : ""} `}
        >
          <Image
            className={styles.logo}
            width={0}
            height={35}
            src={aberto ? Logo : MinimalLogo}
            alt="Logo Movetrak"
          />
        </div>
      </Link>

      <div className={styles.buttonList}>
        {/* rastreamento */}
        <Link title="Rastreamento" href={"/rastreamento"}>
          <div
            className={`${styles.buttonDiv} ${aberto ? "" : styles.buttonDivFechado
              } ${pathname === "/rastreamento" ? styles.activeButton : ""}`}
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={MapPin}
              alt="Adicionar Usuário"
            />
            <span
              className={`${styles.menuText} ${aberto ? "" : styles.menuTextFechado
                }`}
            >
              Rastreamento
            </span>
          </div>
        </Link>

        {/* proprietarios */}
        <Link title="Proprietários" href={"/proprietarios"}>
          <div
            className={`${styles.buttonDiv} ${aberto ? "" : styles.buttonDivFechado
              } ${pathname === "/proprietarios" ? styles.activeButton : ""}`}
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={AddUser}
              alt="Adicionar Usuário"
            />
            <span
              className={`${styles.menuText} ${aberto ? "" : styles.menuTextFechado
                }`}
            >
              Proprietários
            </span>
          </div>
        </Link>

        {/* relatorios */}
        <Link title="Relatórios" href={"/relatorios"}>
          <div
            className={`${styles.buttonDiv} ${aberto ? "" : styles.buttonDivFechado
              } ${pathname === "/relatorios" ? styles.activeButton : ""}`}
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={File}
              alt="Relatórios"
            />
            <span
              className={`${styles.menuText} ${aberto ? "" : styles.menuTextFechado
                }`}
            >
              Relatórios
            </span>
          </div>
        </Link>
        {/* rotas */}
        <Link title="Rotas" href={"/rotas"}>
          <div
            className={`${styles.buttonDiv} ${aberto ? "" : styles.buttonDivFechado
              } ${pathname === "/rotas" ? styles.activeButton : ""}`}
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={Route}
              alt="Rotas"
            />
            <span
              className={`${styles.menuText} ${aberto ? "" : styles.menuTextFechado
                }`}
            >
              Rotas
            </span>
          </div>
        </Link>
        {/* usuarios */}
        <Link title="Usuários" href={"/users"}>
          <div
            className={`${styles.buttonDiv} ${aberto ? "" : styles.buttonDivFechado
              } ${pathname === "/users" ? styles.activeButton : ""} `}
          >
            <Image
              className={styles.menuIcon}
              height={25}
              width={25}
              src={Group}
              alt="Usuários"
            />
            <span
              className={`${styles.menuText} ${aberto ? "" : styles.menuTextFechado
                }`}
            >
              Usuários
            </span>
          </div>
        </Link>
      </div>
      {/* sair */}
      <div
        onClick={() => handleLogOut()}
        className={`${styles.buttonDiv} ${styles.logOutButton} ${aberto ? "" : styles.buttonDivFechado
          }`}
      >
        <Image
          className={styles.menuIcon}
          height={25}
          width={25}
          src={Exit}
          alt="Sair"
        />
        <span
          className={`${styles.menuText} ${aberto ? "" : styles.menuTextFechado
            }`}
        >
          Sair
        </span>
      </div>
      {/* hover */}
      <div
        className={`${styles.verticalLine} ${aberto ? styles.verticalLineAberto : ""
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
