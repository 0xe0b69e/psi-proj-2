/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "cloudflare-ipfs.com", "via.placeholder.com"],
  },
  experimental: {
    swcMinify: true,
  }
};

export default nextConfig;
