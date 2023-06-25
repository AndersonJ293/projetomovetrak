import styles from "./dados.module.css";
import Image from "next/image";

import truckIcon from "@/assets/icons/truck.png";
import userIcon from "@/assets/icons/addUser.png";
import DataContainer from "./dataContainer";

export default function DadosProprietarios() {
  return (
    <div className={styles.container}>
      <DataContainer />
      <DataContainer />
      <DataContainer />
      <DataContainer />
      <DataContainer />
      <DataContainer />
    </div>
  );
}
