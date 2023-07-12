"use client";
import { useState } from "react";
import styles from "./modal.module.css";
import RadioButton from "@/components/radioButton";

const UserRegistrationModal = () => {
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // closeModal();
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <span className={styles.title}>Cadastrar Usuário</span>
        <span className={styles.subTitle}>Informações do Usuário</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.inputLabel}>
            <span className={styles.inputText}>Nome:</span>
            <input
              className={styles.input}
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
          <label className={styles.inputLabel}>
            <span className={styles.inputText}>Email:</span>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.inputLabel}>
            <span className={styles.inputText}>Login:</span>
            <input
              className={styles.input}
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </label>
          <label className={styles.inputLabel}>
            <span className={styles.inputText}>Senha:</span>
            <input
              className={styles.input}
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>
          <div className={styles.userTypeButton}>
            <RadioButton
              id="admin"
              value="admin"
              label="Admin"
              checked={selectedOption === "admin"}
              onChange={handleOptionChange}
            />
            <RadioButton
              id="operator"
              value="operator"
              label="Operador"
              checked={selectedOption === "operator"}
              onChange={handleOptionChange}
            />
            <RadioButton
              id="client"
              value="client"
              label="Cliente"
              checked={selectedOption === "client"}
              onChange={handleOptionChange}
            />
          </div>
          <div className={styles.submitButtonContainer}>
            <button className={styles.submitButton} type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationModal;
