import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image width={0} height={0} src={Logo} alt="" className={styles.logo} />
        <label className={styles.label}>Email</label>
        <input type="email" className={styles.input} />
        <label className={styles.label}>Senha</label>
        <input type="password" className={styles.input} />
        <Link href="/dashboard">
          <button className={styles.submit}>Entrar</button>
        </Link>
      </div>
      <Link href="#">
        <span className={styles.texto}>Entre em Contato</span>
      </Link>
    </div>
  );
}
