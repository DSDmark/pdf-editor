import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /pdf\.worker\.min\.(js|mjs)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
