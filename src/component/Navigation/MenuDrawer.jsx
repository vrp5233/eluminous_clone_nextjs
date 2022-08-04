import React from "react";
// import Drawer from "react-modern-drawer";
import { Scrollbars } from "react-custom-scrollbars";
import { VscChromeClose } from "react-icons/vsc";
import { FaBars } from "react-icons/fa";
import MenuList from "./MenuList";
// import "react-modern-drawer/dist/index.css";
import {
  MobileMenuWrapper,
  OpenMenuButton,
  CloseMenuButton,
} from "./MenuDrawer.style";
const MenuDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <MobileMenuWrapper>
      {/* <OpenMenuButton onClick={toggleDrawer}>
        <FaBars />
      </OpenMenuButton>
      <Drawer
        MenuDrawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="MenuDrawer"
        duration={500}
      >
        <CloseMenuButton onClick={toggleDrawer}>
          <VscChromeClose />
        </CloseMenuButton>
        <Scrollbars style={{ width: 350, height: 830 }} autoHeight>
          <MenuList />
        </Scrollbars>
      </Drawer> */}
    </MobileMenuWrapper>
  );
};

export default MenuDrawer;
