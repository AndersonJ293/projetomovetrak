"use client";
import NavBar from "@/components/navbar";
import styles from "./rastreamento.module.css";
import HeaderLine from "@/components/headerLine";

export default function Rastreamento() {
  return (
    <>
      <NavBar />

      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}></div>
      </div>
    </>
  );
}
