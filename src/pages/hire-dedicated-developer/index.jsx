import React from "react";
import { banner } from "../../data/hireDedicated/banner";
import HeadMeta from "../../component/Navigation/HeadMeta";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";

const Dedicated = () => {
  return (
    <>
      <HeadMeta allMeta={banner} />
      <TopBanner allData={banner} />
    </>
  );
};

export default Dedicated;
