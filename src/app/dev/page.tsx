import DadosProprietarios from "@/components/proprietarios/dados";

export default function Dev() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <DadosProprietarios />
    </div>
  );
}
