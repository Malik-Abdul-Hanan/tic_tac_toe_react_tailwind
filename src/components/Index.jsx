import React from "react";
import "../css/App.css";
import MenuButton from "../reusable/buttons/MenuButton";

function Index() {
  const menuButtons = [
    {
      text: "PLAY",
      onClick: () => {
        alert("CLICKED");
      },
    },
    {
      text: "PLAY",
    },
    {
      text: "PLAY",
    },
  ];
  return (
    <section className="cover-container flex justify-center items-center">
      <div className="space-y-20">
        {menuButtons.map((btn, i) => (
          <MenuButton key={i} text={btn.text} onClick={btn.onClick} />
        ))}
      </div>
    </section>
  );
}

export default Index;
