//Создание кнопки отправки назад

import type { FC } from "react";

interface BackButtonProps {
  onClick: () => void;
}

export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: 20,
        left: 20,
        padding: "10px 20px",
        borderRadius: 4,
        border: "1px solid #6a4fff",
        background: "linear-gradient(135deg, #191031 0%, #0d0530 50%, #1a0a4d 100%)",
        color: "#c9b8ff",
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        cursor: "pointer",
        boxShadow:
          "0 0 14px rgba(74, 44, 245, 0.55), inset 0 0 6px rgba(106, 79, 255, 0.25)",
        transition: "all 0.2s ease",
      }}
    >
      ← Назад
    </button>
  );
};