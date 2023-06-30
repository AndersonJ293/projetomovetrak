import React from "react";
import Image from "next/image";
import iconAct from "../../../public/icons/noteverde.svg";
import iconIna from "../../../public/icons/notevermelho.svg";

interface Status {
  active: boolean;
}

const Status = (props: Status) => {
  const statusStyle = {
    backgroundColor: props.active ? "#E9F8E7" : "#FFE6E6",
    color: props.active ? "#1EB106" : "#FF0101",
    display: "flex",
    alignItems: "center",
    padding: "2px 8px",
    borderRadius: "16px",
  };

  return (
    <div style={statusStyle}>
      <div style={{ marginRight: "4px" }}>
        {props.active ? (
          <Image src={iconAct} alt={"icone de ativo"} width={18} height={18} />
        ) : (
          <Image
            src={iconIna}
            alt={"icone de inativo"}
            width={18}
            height={18}
          />
        )}
      </div>
      {props.active ? "Ativo" : "Inativo"}
    </div>
  );
};

export default Status;
