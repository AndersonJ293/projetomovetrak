'use client';
import DateDisplay from "../date";
import SearchBar from "../searchBar";
import UserHeader from "../userHeader";
import styles from "./headerLine.module.css";
import { useContext } from 'react';
import { UserContext } from "@/contexts/userContext";

export default function HeaderLine() {
    const { user } = useContext(UserContext)

    return (
        <div className={styles.container}>
            <DateDisplay />
            <SearchBar />
            <UserHeader nome={user.nome} login={user.login} />
        </div>
    )
}