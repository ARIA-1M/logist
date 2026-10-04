//Утаскиваемая тень за типом
import { useDragLayer } from "react-dnd";

type DragItem = {
  id: string;
  category: string;
  icon?: string;
  label?: string;
};

export const CustomDragLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem() as DragItem | null,
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !item || !currentOffset) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
       <div
        style={{
          position: "absolute",
          transform: `translate3d(${currentOffset.x}px, ${currentOffset.y}px, 0)`,
          willChange: "transform",
        }}
      >
        <img
          src={item.icon}
          alt=""
          style={{
            width: 90,
            height: 90,
            objectFit: "contain",
            filter:
              "drop-shadow(0 0 16px rgba(140, 100, 255, 0.9)) drop-shadow(0 0 30px rgba(106, 79, 255, 0.6))",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
};
