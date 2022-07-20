// import MenuItems from "./MenuItems";
// import { Link } from "react-router-dom";
import Link from "next/link";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
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
                <div className="menu__wrapper" key={submenu.title+index}>
                  <h5>{submenu.title}</h5>
                  <ul className="dropdownMenu">
                    {submenu.items.map((item) => (
                      <li className="menu-items" key={item.title+index}>
                        <Link href={item.path}>
                          <a>{item.title}</a>
                        </Link>
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
              key={submenu.title+index}
            >
              {submenu.items.map((item) => (
                <li className="menu-items" key={item.title+index}>
                  <Link href={item.path}>
                    <a>{item.title}</a>
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
