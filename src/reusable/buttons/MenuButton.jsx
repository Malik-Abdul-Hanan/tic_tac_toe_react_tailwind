import React from "react";

function MenuButton({ text, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="
        min-h-20 min-w-40
        rounded-tl-[15%] rounded-tr-[20%] rounded-bl-[30%] rounded-br-[50%] bg-[#E56B1E] border-[#F4BF9A] border-[0.3em] text-white p-4
        "
      >
        {text}
      </button>
    </div>
  );
}

export default MenuButton;
