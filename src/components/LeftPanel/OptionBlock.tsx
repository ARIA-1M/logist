//Блок с типом груза
import type{ FC } from "react";
import type{ Option } from "../../types/game";
import { DraggableOption } from "../LeftPanel/DraggableOption";

interface Props {
  title: string;
  options: Option[];
}

export const OptionBlock: FC<Props> = ({ title, options }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignSelf: "flex-start",
        background: "linear-gradient(135deg, #0d0530 0%, #05010f 100%)",
        border: "1px solid #6a4fff",
        borderRadius: 4,
        padding: "16px 28px",
        boxShadow:
          "0 0 20px rgba(106, 79, 255, 0.5), inset 0 0 10px rgba(106, 79, 255, 0.15)",
        gap: 20,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          textAlign: "center",
          color: "#e0d9ff",
          fontFamily: "inherit",
          letterSpacing: 1.5,
          textTransform: "uppercase",
          textShadow: "0 0 10px rgba(106, 79, 255, 0.6)",
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {options.map((opt) => (
          <DraggableOption key={opt.id} option={opt} />
        ))}
      </div>
    </div>
  );
};
