"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import { useContext, useState } from "react";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const { login, handleLogin } = useContext(UserContext);
  const [loginInput, setLoginInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLoginClick = async () => {
    await handleLogin(loginInput, passwordInput);
  };

  return (
    <>
      {login ? (
        router.push("/dashboard")
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <Image
              width={0}
              height={0}
              src={Logo}
              alt=""
              className={styles.logo}
            />
            <label className={styles.label}>Login</label>
            <input
              type="text"
              value={loginInput}
              className={styles.input}
              onChange={(e) => setLoginInput(e.target.value)}
            />
            <label className={styles.label}>Senha</label>
            <input
              type="password"
              value={passwordInput}
              className={styles.input}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button className={styles.submit} onClick={handleLoginClick}>
              Entrar
            </button>
          </div>
          <Link href="#">
            <span className={styles.texto}>Entre em Contato</span>
          </Link>
        </div>
      )}
    </>
  );
}
