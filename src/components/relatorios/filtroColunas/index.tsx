import Checkbox from "./checkbox";
import styles from "./filtroColunas.module.css";

export default function FiltroColunasRelatorios() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Selecionar Colunas</h1>
      <div className={styles.optionsWrapper}>
        <Checkbox label="Agrupamento" checked={true} />
        <Checkbox label="Rota" checked={false} />
        <Checkbox label="Itinerário" checked={true} />
        <Checkbox label="Horário" checked={true} />
        <Checkbox label="Inicio" checked={false} />
        <Checkbox label="Fim" checked={true} />
        <Checkbox label="Quilometragem" checked={true} />
        <Checkbox label="Duração" checked={true} />
        <Checkbox label="Velocidade Máxima" checked={true} />
        <Checkbox label="Diferença de KM" checked={true} />
        <Checkbox label="Motorista" checked={true} />
        <Checkbox label="Escola" checked={true} />
        <Checkbox label="Resultado da Rota" checked={true} />
      </div>
      <div className={styles.saveButtonContainer}>
        <div className={styles.saveButton}>
          <p className={styles.saveButtonText}>Salvar</p>
        </div>
      </div>
    </div>
  );
}
