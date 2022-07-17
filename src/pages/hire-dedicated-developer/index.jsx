import React from "react";
import { hireDedicated } from "../../data/hireDedicated/hireDedicated";
import HeadMeta from "../../component/Navigation/HeadMeta";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";

const Dedicated = () => {
  return (
    <>
      <HeadMeta allMeta={hireDedicated} />
      <TopBanner allData={hireDedicated} />
    </>
  );
};

export default Dedicated;
