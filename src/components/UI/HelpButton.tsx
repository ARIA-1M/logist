// Кнопка подсказка
import type{ FC } from "react";

interface HelpButtonProps {
  onClick: () => void;
}

export const HelpButton: FC<HelpButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
         position: "fixed",
        bottom: 20,
        right: 20,
        width: 48,
        height: 48,
        borderRadius: 4,
        border: "1px solid #a07fff",
        background: "linear-gradient(135deg, #3b2094 0%, #2a1769 50%, rgb(20, 9, 49) 100%)",
        color: "#e0d9ff",
        fontFamily: "inherit",
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: 1,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        appearance: "none",
        boxShadow:
          "0 0 18px rgba(140, 100, 255, 0.8), inset 0 0 10px rgba(160, 130, 255, 0.4)",
        transition: "all 0.25s ease",
      }}
      title="Помощь"
    >
      ?
    </button>
  );
};
