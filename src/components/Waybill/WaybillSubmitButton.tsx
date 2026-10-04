//Кнопка отправления
import type { FC } from "react";

interface Props {
  onSubmit: () => void;

  enabled: boolean;
}

export const WaybillSubmitButton: FC<Props> = ({ onSubmit, enabled }) => {
  const baseBg = enabled ? "#4fc3f7" : "#2a3a4a";
  const hoverBg = enabled ? "#29b6f6" : "#2a3a4a";

  return (
    <button
      onClick={onSubmit}
      style={{
        width: "100%",
        height: 56,
        borderRadius: 4,
        border: "1px solid #6a4fff",
        background: "linear-gradient(135deg, #05010f 0%, #0d0530 50%, #1a0a4d 100%)",
        color: enabled ? "#c9b8ff" : "#4a3a7a",
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        cursor: enabled ? "pointer" : "not-allowed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s ease",
        boxShadow: enabled
          ? "0 0 14px rgba(106, 79, 255, 0.55), inset 0 0 6px rgba(106, 79, 255, 0.25)"
          : "inset 0 0 6px rgba(106, 79, 255, 0.1)",
        opacity: enabled ? 1 : 0.5,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = hoverBg;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = baseBg;
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.98)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      Отправить груз
    </button>
  );
};
