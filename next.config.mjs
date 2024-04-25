/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'images.bitmoji.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'helpx.adobe.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'demo.myfatoorah.com',
          pathname: '**',
        },
      ]
      },
};

export default nextConfig;
