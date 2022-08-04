import React from "react";
import Head from "next/head";

const HeadMeta = ({ allMeta }) => {
  return (
    <Head>
      <meta name="description" content={allMeta.metaDescription} />
      <meta name="keywords" content={allMeta.metaKeywords} />
      <title>{allMeta.metaTitle}</title>
    </Head>
  );
};

export default HeadMeta;
