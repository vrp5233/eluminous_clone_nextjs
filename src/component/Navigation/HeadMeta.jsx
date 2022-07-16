import React from "react";
import Head from "next/head";

const HeadMeta = ({ allMeta }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={allMeta.metaDescription} />
      <meta name="keywords" content={allMeta.metaKeywords} />
      <title>{allMeta.metaTitle}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMeta;
