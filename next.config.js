/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.itfirms.co",
      "assets.goodfirms.co",
      "images.dmca.com",
      "eluminoustechnologies.com",
      "vrpprojects.infinityfreeapp.com",
    ],
  },
};

module.exports = nextConfig;
