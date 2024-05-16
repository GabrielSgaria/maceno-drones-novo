/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
    images: {
        domains: ['media.graphassets.com'], // Permite carregar imagens de 'media.graphassets.com'
      },
};

export default nextConfig;
