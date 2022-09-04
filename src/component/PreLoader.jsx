import React from "react";
import styled from "styled-components";
import { SunspotLoader } from "react-awesome-loaders";

const PreLoader = () => {
  return (
    <>
      {/* <CustomPreloader id="preLoader">
        <SunspotLoader
          gradientColors={["#6366F1", "#E0E7FF"]}
          shadowColor={"#3730A3"}
          className={"PreLoader"}
          desktopSize={"100px"}
          mobileSize={"50px"}
        />
      </CustomPreloader> */}
    </>
  );
};
export default PreLoader;

export const CustomPreloader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 999999999999;
  display: flex;
  justify-content: center;
  align-items: center;
  .PreLoader {
    max-width: 350px;
  }
`;
