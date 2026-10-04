//Текущий груз (груз в центре для упоковки) 
import type{ FC } from "react";
import type{ Cargo } from "../../types/game";

interface CargoViewProps {
  cargo: Cargo;
}

export const CargoView: FC<CargoViewProps> = ({ cargo }) => {
  return (
     <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 24,
      }}
    >
        <img
          src={cargo.icon}
          alt={cargo.name}
          style={{
            height: 200,
            filter: "drop-shadow(0 0 12px rgba(140, 100, 255, 0.6))",
          }}
        />
      <h2
        style={{
          fontSize: 32,
          marginTop: 24,
          color: "#e0d9ff",
          fontFamily: "inherit",
          letterSpacing: 1.5,
          textTransform: "uppercase",
          textShadow: "0 0 12px rgba(106, 79, 255, 0.6)",
        }}
      >
        {cargo.name}
      </h2>
    </div>
  );
};
