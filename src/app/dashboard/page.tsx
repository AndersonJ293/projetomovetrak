import NavBar from "@/components/navbar";
import styles from "./dashboard.module.css";
import Date from "@/components/date";
import SearchBar from "@/components/searchBar";
import UserHeader from "@/components/userHeader";
import RotasDashboard from "@/components/dashboard/rotas";
import RegistrosDashboard from "@/components/dashboard/registros";
import Grafico from "@/components/dashboard/grafico";
import Lembretes from "@/components/dashboard/lembretes";
import Total from "@/components/dashboard/total";

export default function DashBoard() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.headerLine}>
          <Date />
          <SearchBar />
          <UserHeader />
        </div>
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
            <RotasDashboard />
          </div>
        </div>
      </div>
    </>
  );
}
