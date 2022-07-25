/** @type {import('next').NextConfig} */

// when importing Next js modules, have to configure the files here to enable it.
// We are using the images modules in next js module
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "thrangra.sirv.com"
    ]
  }
}

module.exports = nextConfig
