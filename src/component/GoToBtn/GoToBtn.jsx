import React, { useEffect, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import { GoToBtnWrap } from "./GoToBtn.style.jsx";
const GoToBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <GoToBtnWrap className="GoToBtn" onClick={goToBtn}>
          <BiUpArrow />
        </GoToBtnWrap>
      )}
    </>
  );
};

export default GoToBtn;
