import React from "react";
import Link from "next/link";
import { menuItemsData } from "../../data/menuItemsData";

const Demomenu = ({ allMenu }) => {
  return (
    <nav>
      <ul className="menus">
        {allMenu.map((menu, index) => {
          return (
            <li key={index}>
              <Link href={menu.path}>
                <a>{menu.title}</a>
              </Link>
              {/* <ul className="subMenus">
                <li>
                  <Link href={menu.subMenus.path}>
                    <a>{menu.subMenus.title}</a>
                  </Link>
                </li>
              </ul> */}
             
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Demomenu;
