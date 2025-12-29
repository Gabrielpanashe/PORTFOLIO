import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Turbopack uses this folder as the project root when multiple lockfiles exist
  turbopack: {
    root: path.resolve(__dirname),
  } as any,
};

export default nextConfig;
