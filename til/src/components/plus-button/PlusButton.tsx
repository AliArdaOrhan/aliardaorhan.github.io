import React, { useState } from "react";

interface PlusButtonProps {
  onClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onClick }) => {
  return (
    <button
      className="fixed right-4 bottom-4 z-20 w-16 h-16 bg-blue-500 hover:bg-blue-900 text-white rounded-full flex justify-center items-center"
      onClick={onClick}
      data-testid="plus-button"
    >
      <span className="text-4xl">+</span>
    </button>
  );
};

export default PlusButton;
