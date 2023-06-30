import React from "react";

interface Status {
  active: boolean;
}

const Status = (props: Status) => {
  const statusStyle = {
    backgroundColor: props.active ? "#E9F8E7" : "#FFE6E6",
    color: props.active ? "#1EB106" : "#FF0101",
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 8px",
    borderRadius: "16px",
  };

  const iconName = props.active ? "check" : "close";

  return (
    <div style={statusStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="20"
        height="20"
        style={{ marginRight: "4px" }}
      >
        {props.active ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        )}
      </svg>
      {props.active ? "Ativo" : "Inativo"}
    </div>
  );
};

export default Status;
