import Checkbox from "./checkbox";
import styles from "./filtroColunas.module.css";

export default function FiltroColunasRelatorios() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Selecionar Colunas</h1>
      <div className={styles.optionsWrapper}>
        <Checkbox id="agrupamento" label="Agrupamento" checked={true} />
        <Checkbox id="rota" label="Rota" checked={false} />
        <Checkbox id="itinerario" label="Itinerário" checked={true} />
        <Checkbox id="horario" label="Horário" checked={true} />
        <Checkbox id="inicio" label="Inicio" checked={false} />
        <Checkbox id="fim" label="Fim" checked={true} />
        <Checkbox id="quilometragem" label="Quilometragem" checked={true} />
        <Checkbox id="duracao" label="Duração" checked={true} />
        <Checkbox id="velocidademax" label="Velocidade Máxima" checked={true} />
        <Checkbox id="diferencakm" label="Diferença de KM" checked={true} />
        <Checkbox id="motorista" label="Motorista" checked={true} />
        <Checkbox id="escola" label="Escola" checked={true} />
        <Checkbox id="resultadorota" label="Resultado da Rota" checked={true} />
      </div>
      <div className={styles.saveButtonContainer}>
        <div className={styles.saveButton}>
          <p className={styles.saveButtonText}>Salvar</p>
        </div>
      </div>
    </div>
  );
}
