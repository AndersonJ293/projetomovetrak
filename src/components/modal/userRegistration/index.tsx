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
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </label>
          <label>
            Login:
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div>
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
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistrationModal;
