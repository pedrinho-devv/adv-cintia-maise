import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // permite carregar imagens desse domínio
  },
};

export default nextConfig;
