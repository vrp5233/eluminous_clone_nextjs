// import MenuItems from "./MenuItems";
// import { Link } from "react-router-dom";
import LinkCustom from "../Button/LinkCustom";
import Link from "next/link";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  // const fullStack = dropdown.title === "FULL STACK";
  // console.log(fullStack);
  return (
    <>
      {submenus.length > 1 ? (
        <>
          <div
            className={`mega__menu dropdownMenu ${dropdownClass} ${
              dropdown ? "show" : ""
            }`}
          >
            <div className="container">
              {submenus.map((submenu, index) => (
                <div className="menu__wrapper" key={submenu.title + index}>
                  {submenu.path === "" ? (
                    <h5>{submenu.title}</h5>
                  ) : (
                    <h5>
                      <Link href={submenu.path}>
                        <a>{submenu.title}</a>
                      </Link>
                    </h5>
                  )}

                  <ul className="dropdownMenu">
                    {submenu.items.map((item) => (
                      <li
                        className="menu-items sub__sub__menu__items"
                        key={item.title + index}
                      >
                        {submenu.title === "FULL STACK" ? (
                          <LinkCustom
                            BtnTransparent={false}
                            linkUrl={item.path}
                            titleText={item.title}
                          />
                        ) : (
                          <Link href={item.path}>
                            <a
                              className={item.path == item.path ? "active" : ""}
                            >
                              {item.title}
                            </a>
                          </Link>
                        )}
                      </li>
                    ))}
                    {/* <MenuItems items={submenu} key={index} depthLevel={depthLevel} /> */}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {submenus.map((submenu, index) => (
            <ul
              className={`dropdownMenu ${dropdownClass} ${
                dropdown ? "show" : ""
              }`}
              key={submenu.title + index}
            >
              {submenu.items.map((item) => (
                <li
                  className="menu-items sub__menu__items"
                  key={item.title + index}
                >
                  <Link href={item.path}>
                    <a className="active">{item.title}</a>
                  </Link>
                </li>
              ))}
              {/* <MenuItems items={submenu} key={index} depthLevel={depthLevel} /> */}
            </ul>
          ))}
        </>
      )}
    </>
    // <ul className={`dropdownMenu ${dropdownClass} ${dropdown ? "show" : ""}`}>
    //   {submenus.map((submenu, index) => (
    //     <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
    //   ))}
    // </ul>
  );
};

export default Dropdown;

// import MenuItems from "./MenuItems";
// const Dropdown = ({ submenus, dropdown, depthLevel }) => {
//   depthLevel = depthLevel + 1;
//   const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
//   return (
//     <ul className={`dropdownMenu ${dropdownClass} ${dropdown ? "show" : ""}`}>
//       {submenus.map((submenu, index) => (
//         <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
//       ))}
//     </ul>
//   );
// };

// export default Dropdown;
