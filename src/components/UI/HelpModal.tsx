//Модальное окно с подсказкой
import type { FC } from "react";

interface HelpModalProps {
  onClose: () => void;
}

export const HelpModal: FC<HelpModalProps> = ({ onClose }) => {
  return (
    <div
      onClick={onClose}
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
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 720,
          maxWidth: "92vw",
          padding: 40,
          borderRadius: 4,
          border: "1px solid #6a4fff",
          background: "linear-gradient(135deg, #0d0530 0%, #05010f 100%)",
          color: "#c9b8ff",
          fontFamily: "inherit",
          boxShadow:
            "0 0 30px rgba(106, 79, 255, 0.7), inset 0 0 12px rgba(106, 79, 255, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 32,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#e0d9ff",
            }}
          >
            Подсказка
          </h2>
        </div>

        <div style={{ fontSize: 18, lineHeight: 1.6, color: "#b8a8e8" }}>
          <p style={{ marginBottom: 0 }}>
            Перед упаковкой груза необходимо определить его тип и понять,
            требует ли он особых условий транспортировки.
            <ul style={{ marginTop: 14, paddingLeft: 20 }}>
              <li>Сухие грузы упаковываются в курьерский пакет без наполнителя.</li>
              <li>Хрупкие товары размещаются в коробке и защищаются пузырчатой плёнкой или пенопластом.</li>
              <li>Тяжёлые грузы упаковываются в деревянный ящик без наполнителя.</li>
              <li>Температурные грузы перевозятся в термоконтейнере с хладоэлементами.</li>
            </ul>
            В результате необходимо заполнить накладную, выбрав подходящие варианты.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
          <button
            onClick={onClose}
            style={{
              padding: "12px 28px",
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
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
};