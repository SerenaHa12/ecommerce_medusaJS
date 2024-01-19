const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverComponentsExternalPackages: [
      "@medusajs/product",
      "@medusajs/modules-sdk",
    ],
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      // //config ảnh HASH CODE
      {
        protocol: "https",
        hostname: "api-ecm.5labs.io",
        port: "",
        pathname: "/uploads/**", // Đặt đúng đường dẫn cần thiết
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/uploads/:path*", // Đường dẫn đến ảnh
  //       destination: "https://api-ecm.5labs.io/uploads/:path*", // Đường dẫn mới
  //     },
  //   ]
  // },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
