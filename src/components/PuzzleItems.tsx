import React from "react";

interface PuzzleItemProps {
  
  order: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const PuzzleItems: React.FC<PuzzleItemProps> = ({ order, onClick }) => {
  if (order === 0) {
    return (
      <div className="puzzle-item" style={{ backgroundColor: "transparent" }}>
        <div className="puzzle-item-content"></div>
      </div>
    );
  }

  return (
    <div className="puzzle-item" data-order={order} onClick={onClick}>
      <div className="puzzle-item-content unselectable">{order}</div>
    </div>
  );
};
export default PuzzleItems;
