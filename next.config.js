/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images.unoptimized = true,
  // compiler: { styledComponents: true | {displayName: } },
  images: {
    domains: [
      "www.itfirms.co",
      "assets.goodfirms.co",
      "images.dmca.com",
      "eluminoustechnologies.com",
      "vrpprojects.infinityfreeapp.com",
    ],
  },
  plugins: [
    [
      "styled-components",
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
  ],
};

module.exports = nextConfig;

