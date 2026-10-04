//Зона для перетаскивания
import type { FC } from "react";
import { useDrop } from "react-dnd";
import type { Option } from "../../types/game";
import { DRAG_TYPE } from "../LeftPanel/DraggableOption";

interface DragItem {
  id: string;
  category: Option["category"];
}

interface Props {
  acceptedCategory: Option["category"];
  value: Option | null;
  onDrop: (optionId: string) => void;
}

export const WaybillDropSlot: FC<Props> = ({
  acceptedCategory,
  value,
  onDrop,
}) => {
  const [, dropRef] = useDrop(() => ({
    accept: DRAG_TYPE,

    canDrop: (item: DragItem) =>
      item.category === acceptedCategory,

    drop: (item: DragItem) => {
      if (item.category !== acceptedCategory) return;
      onDrop(item.id);
    },
  }));

  return dropRef(
    <div
      style={{
         width: 96,
        height: 96,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        border: "1px solid #6a4fff",
        background: "linear-gradient(135deg, #0d0530 0%, #05010f 100%)",
        boxShadow:
          "0 0 12px rgba(106, 79, 255, 0.5), inset 0 0 6px rgba(106, 79, 255, 0.2)",
        transition: "all 0.2s ease",
      }}
    >
      {value ? (
        <img
          src={value.icon}
          alt={value.label}
          style={{ width: 68, height: 68, objectFit: "contain",
            filter: "drop-shadow(0 0 8px rgba(140, 100, 255, 0.6))"}}
          draggable={false}
        />
      ) : null}
    </div>
  );
};
