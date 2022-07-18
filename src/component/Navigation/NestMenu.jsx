import React from "react";

const NestMenu = ({ submenu, nestMenu }) => {
  return (
    <>
      <h6>{submenu.title}</h6>
      <ul>
        {submenu.nestMenus.map((nestMenu, index) => {
          return <li key={index}>{nestMenu.title}</li>;
        })}
      </ul>
    </>
  );
};

export default NestMenu;
