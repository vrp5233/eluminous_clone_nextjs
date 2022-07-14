/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "www.itfirms.co",
      "assets.goodfirms.co",
      "images.dmca.com",
      "eluminoustechnologies.com",
      "vrpprojects.infinityfreeapp.com",
    ],
  },
  // plugins: [
  //   [
  //     "styled-components",
  //     {
  //       ssr: true,
  //       displayName: true,
  //       preprocess: false,
  //     },
  //   ],
  // ],
};

module.exports = nextConfig;
