import type { NextConfig } from "next"

const isGithubPages =
  process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/neoepksv5" : "",
  env: { NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/neoepksv5" : "" },
  images: {
    unoptimized: true
  }
}

export default nextConfig
