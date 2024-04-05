import React from "react";
import "./Header.css";

const Header: React.FC = () => (

  <div className="header-container fixed left-0 right-0 top-0 z-10 p-16 text-center flex flex-col items-center">
    <img src="/code-13.gif" alt="header-image"/>
    <h1 className="font-bold text-9xl">TODAY I LEARNED</h1>
    <p className="max-w-[30%] min-w-[30%]">
      <span className="break-words">
        Hi, I'm Ali Arda. I don't know what to call this page. Is it blog or
        twitter fake? Dunno. But hope you enjoy content in it
      </span>
    </p>
  </div>
);

export default Header;
