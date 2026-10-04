//Модальное окно для показа статуса в завершении игры
import type{ FC } from "react";

interface ModalProps {
  successCount: number;
  total: number;
  onRestart: () => void;
}

export const Modal: FC<ModalProps> = ({
  successCount,
  total,
  onRestart,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(5, 1, 15, 0.75)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: 420,
          maxWidth: "92vw",
          padding: 40,
          borderRadius: 4,
          border: "1px solid #6a4fff",
          background: "linear-gradient(135deg, #0d0530 0%, #05010f 100%)",
          color: "#c9b8ff",
          fontFamily: "inherit",
          textAlign: "center",
          boxShadow:
            "0 0 30px rgba(106, 79, 255, 0.7), inset 0 0 12px rgba(106, 79, 255, 0.2)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 28,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "#e0d9ff",
          }}
        >
          Игра завершена
        </h2>

        <p style={{ margin: "24px 0", fontSize: 18, color: "#b8a8e8" }}>
          Успешно отправлено:{" "}
          <b style={{ color: "#e0d9ff", fontSize: 22 }}>{successCount}</b> из{" "}
          <b style={{ color: "#e0d9ff", fontSize: 22 }}>{total}</b>
        </p>

        <button
          onClick={onRestart}
          style={{
            padding: "12px 28px",
            marginTop: 16,
            borderRadius: 4,
            border: "1px solid #6a4fff",
            background:
              "linear-gradient(135deg, #05010f 0%, #0d0530 50%, #1a0a4d 100%)",
            color: "#c9b8ff",
            fontFamily: "inherit",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow:
              "0 0 14px rgba(106, 79, 255, 0.55), inset 0 0 6px rgba(106, 79, 255, 0.25)",
            transition: "all 0.2s ease",
          }}
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
};
