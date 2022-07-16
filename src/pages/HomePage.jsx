import React from "react";
import Head from "next/head";
import { HomePageData } from "../data/homePage";
import HeadMeta from "../component/Navigation/HeadMeta";
import TopBanner from "../component/HireDedicated/TopBanner/TopBanner";
const HireDedicatedReact = () => {
  return (
    <>
      <HeadMeta allMeta={HomePageData} />
      <TopBanner allData={HomePageData} />
    </>
  );
};

export default HireDedicatedReact;
