'use client';
import NavBar from "@/components/navbar";
import styles from "./dashboard.module.css";
import RotasDashboard from "@/components/dashboard/rotas";
import RegistrosDashboard from "@/components/dashboard/registros";
import Grafico from "@/components/dashboard/grafico";
import Lembretes from "@/components/dashboard/lembretes";
import Total from "@/components/dashboard/total";
import HeaderLine from "@/components/headerLine";

export default function DashBoard() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <HeaderLine />
        <div className={styles.screen}>
          <div className={styles.content}>
            <div className={styles.cardsDiv}>
              <div className={styles.cardsRow}>
                <Grafico />
                <Lembretes />
                <div className={styles.totalColumn}>
                  <Total />
                  <Total />
                  <Total />
                </div>
              </div>
              <RegistrosDashboard />
            </div>
            <div className={styles.rotasDiv}>
              <RotasDashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
