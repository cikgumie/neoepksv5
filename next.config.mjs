const isGithubPages =
  process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/neoepksv5" : "",
  env: { NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/neoepksv5" : "" },
  images: {
    unoptimized: true
  }
}

export default nextConfig
