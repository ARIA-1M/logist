//Главный компонент накладной
import React from "react";
import { WaybillDropSlot } from "./DropSlot";
import type { Option, Cargo } from "../../types/game";
import { WaybillSubmitButton } from "./WaybillSubmitButton";

type WrongMap = {
  type: boolean;
  package: boolean;
  filler: boolean;
};

interface Props {
  cargo: Cargo;
  typeValue: Option | null;
  packageValue: Option | null;
  fillerValue: Option | null;
  onTypeDrop: (id: string) => void;
  onPackageDrop: (id: string) => void;
  onFillerDrop: (id: string) => void;
  onSubmit: () => void;
  successCount: number;
  total: number;
  wrong: WrongMap;
}

export const Waybill = ({
  cargo,
  typeValue,
  packageValue,
  fillerValue,
  onTypeDrop,
  onPackageDrop,
  onFillerDrop,
  onSubmit,
  successCount,
  total,
  wrong,
}: Props) => {
  const isReady = !!typeValue && !!packageValue && !!fillerValue;

  return (
    <div
      style={{
        width: 700,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Внешний корпус планшета — чёрная рамка */}
      <div
        style={{
          width: 510,
          height: 800,
          position: "relative",
          borderRadius: 20,
          background:
            "linear-gradient(135deg, #05010f 0%, #0d0530 50%, #05010f 100%)",
          boxShadow:
            "0 0 40px rgba(106, 79, 255, 0.6), 0 0 80px rgba(106, 79, 255, 0.3)",
          padding: 16,
          boxSizing: "border-box",
        }}
      >
        {/* Внутренний «лист» планшета */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            borderRadius: 12,
            background:
              "radial-gradient(circle at 30% 20%, #1a0a4d 0%, #0d0530 45%, #05010f 100%)",
            boxShadow: "inset 0 0 30px rgba(106, 79, 255, 0.3)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            padding: "20px 40px 0px 40px",
          }}
          className="invoice"
        >
          {/* Камера */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #2a1a5e 0%, #05010f 100%)",
              boxShadow:
                "0 0 6px rgba(106, 79, 255, 0.8), inset 0 0 3px rgba(0,0,0,0.9)",
              zIndex: 2,
            }}
          />

          {/* Датчик рядом с камерой */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(20px)",
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#0a0420",
              boxShadow: "inset 0 0 2px rgba(0,0,0,0.9)",
              zIndex: 2,
            }}
          />

          {/* Декоративная сетка */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(rgba(106, 79, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(106, 79, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Заклёпки по углам */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#a07fff",
              boxShadow: "0 0 8px rgba(160, 127, 255, 0.9)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#a07fff",
              boxShadow: "0 0 8px rgba(160, 127, 255, 0.9)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 8,
              left: 8,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#a07fff",
              boxShadow: "0 0 8px rgba(160, 127, 255, 0.9)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 8,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#a07fff",
              boxShadow: "0 0 8px rgba(160, 127, 255, 0.9)",
            }}
          />

          {/* Заголовок */}
          <div
            style={{
              position: "relative",
              textAlign: "center",
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 24,
              marginTop: 32,
              color: "#a07fff",
              fontFamily: "inherit",
              letterSpacing: 3,
              textTransform: "uppercase",
              textShadow: "0 0 14px rgba(140, 100, 255, 0.9)",
            }}
          >
            Накладная
          </div>

          {/* Строки */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 24,
              marginLeft: 35,
              marginTop: 10,
            }}
          >
            <WaybillRow label="Груз">
              <IconSquare>
                <img
                  src={cargo.icon}
                  alt={cargo.name}
                  style={{
                    width: 56,
                    height: 56,
                    filter: "drop-shadow(0 0 8px rgba(140, 100, 255, 0.6))",
                  }}
                  draggable={false}
                />
              </IconSquare>
            </WaybillRow>

            <WaybillRow label="Тип груза">
              <IconSquare error={wrong.type}>
                <WaybillDropSlot
                  acceptedCategory="cargoType"
                  value={typeValue}
                  onDrop={onTypeDrop}
                />
              </IconSquare>
            </WaybillRow>

            <WaybillRow label="Упаковка">
              <IconSquare error={wrong.package}>
                <WaybillDropSlot
                  acceptedCategory="package"
                  value={packageValue}
                  onDrop={onPackageDrop}
                />
              </IconSquare>
            </WaybillRow>

            <WaybillRow label="Наполнитель">
              <IconSquare error={wrong.filler}>
                <WaybillDropSlot
                  acceptedCategory="filler"
                  value={fillerValue}
                  onDrop={onFillerDrop}
                />
              </IconSquare>
            </WaybillRow>
          </div>

          {/* Кнопка */}
          <div
            style={{
              position: "relative",
              marginTop: 40,
              marginBottom: 30,
              display: "flex",
              justifyContent: "flex-end",
              transform: "translateX(-20px)",
            }}
          >
            <div style={{ width: 340 }}>
              <WaybillSubmitButton onSubmit={onSubmit} enabled={isReady} />
            </div>
          </div>
        </div>
      </div>

      {/* Счётчик */}
      <div
        style={{
          marginTop: 14,
          width: 420,
          marginLeft: "auto",
          marginRight: "auto",
          background: "linear-gradient(135deg, #0d0530 0%, #05010f 100%)",
          border: "1px solid #6a4fff",
          borderRadius: 4,
          padding: "10px 12px",
          textAlign: "center",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color: "#a07fff",
          fontFamily: "inherit",
          boxShadow:
            "0 0 14px rgba(106, 79, 255, 0.5), inset 0 0 6px rgba(106, 79, 255, 0.2)",
        }}
      >
        Успешно отправлено: {successCount} / {total}
      </div>
    </div>
  );
};

/* ---------- Внутренние компоненты ---------- */

const WaybillRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
    }}
  >
    <Label label={label} />
    {children}
  </div>
);

const Label = ({ label }: { label: string }) => (
  <div
    style={{
      flex: 1,
      fontSize: 16,
      fontWeight: 700,
      color: "#a07fff",
      fontFamily: "inherit",
      letterSpacing: 1.5,
      textTransform: "uppercase",
      textShadow: "0 0 8px rgba(140, 100, 255, 0.6)",
    }}
  >
    {label}
  </div>
);

const IconSquare = ({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: boolean;
}) => (
  <div
    style={{
      width: 96,
      height: 96,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      border: error ? "1px solid #ff5c7a" : "1px solid #6a4fff",
      background: error
        ? "linear-gradient(135deg, #2a0a1a 0%, #1a0510 100%)"
        : "linear-gradient(135deg, #0d0530 0%, #05010f 100%)",
      boxShadow: error
        ? "0 0 20px rgba(255, 92, 122, 0.7), inset 0 0 10px rgba(255, 92, 122, 0.2)"
        : "0 0 12px rgba(106, 79, 255, 0.5), inset 0 0 6px rgba(106, 79, 255, 0.2)",
      transition: "all 0.2s ease",
      boxSizing: "border-box",
    }}
  >
    {children}
  </div>
);