/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: 
      [
      {
        protocol: "https",
        hostname: "www.quantumcybersolutions.com",
        port: "",
        pathname: "/**",
      }
      ]
  }
};

export default nextConfig;