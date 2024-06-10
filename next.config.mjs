process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'reqres.in',
            port: '',
            pathname: '/img/faces/**',
          },
        ],
      },
};

export default nextConfig;
