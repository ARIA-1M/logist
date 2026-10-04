//Компанент выбора с возможностью перетаскивания
import type { FC } from "react";
import { useDrag } from "react-dnd";
import type { Option } from "../../types/game";

export const DRAG_TYPE = "GAME_OPTION";

interface Props {
  option: Option;
}

export const DraggableOption: FC<Props> = ({ option }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: DRAG_TYPE,
    item: {
      id: option.id,
      category: option.category,
      icon: option.icon,
    },
    options: {
      dropEffect: "move",
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return dragRef(
    <div
      style={{
        width: 140,
        height: 140,
        cursor: "grab",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        touchAction: "none",
        padding: 8,
        borderRadius: 8,
        border: "1px solid #6a4fff",
      }}
    >
      <img
        src={option.icon}
        alt={option.label}
        style={{
          height:80,
          width: "auto",
          objectFit: "contain",
          pointerEvents: "none",
          filter: "drop-shadow(0 0 6px rgba(140, 100, 255, 0.5))",
        }}
        draggable={false}
      />
      <span style={{ textAlign: "center", pointerEvents: "none",  color: "#e0d9ff", }}>
        {option.label}
      </span>
    </div>
  );
};
