// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "placekitten.com", // for test images
      "picsum.photos",   // optional, another placeholder
    ],
  },
};

export default nextConfig;
