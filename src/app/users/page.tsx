import NavBar from "@/components/navbar";
import styles from "./users.module.css";
import HeaderLine from "@/components/headerLine";
import TableComponent from "@/components/tableComponent";

export default function Usuarios() {
    return (
        <>
        <NavBar />

        <div className={styles.container}>
            <HeaderLine />
            <div className={styles.screen}>
                <TableComponent headerTitle="Usuários" tableColumns={[{title: "Nome"}, {title: "Login"}, 
                {title: "Tipo"}, {title: "Situação"}]}/>
            </div>
        </div>
        </>
    )
}
