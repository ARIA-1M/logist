//Всплывающие уведомления
import type{ FC } from "react";
import { useEffect } from "react"

interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export const Notification: FC<NotificationProps> = ({
  message,
  type,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const isError = type === "error";

  return (
    <div
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10000,
        width: "min(560px, 90vw)",
        padding: "20px 28px",
        borderRadius: 4,
        border: isError ? "1px solid #ff5c7a" : "1px solid #4fff6f",
        background: isError
          ? "linear-gradient(135deg, #2a0a1a 0%, #1a0510 100%)"
          : "linear-gradient(135deg, #053012 0%, #010f04 100%)",
        color: isError ? "#ffb8c8" : "#c3ffb8",
        fontFamily: "inherit",
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 1.2,
        textTransform: "uppercase",
        lineHeight: 1.3,
        textAlign: "center",
        boxShadow: isError
          ? "0 0 24px rgba(255, 92, 122, 0.7), inset 0 0 10px rgba(255, 92, 122, 0.2)"
          : "0 0 24px rgba(79, 255, 111, 0.7), inset 0 0 10px rgba(79, 255, 117, 0.25)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {message}
    </div>
  );
};
