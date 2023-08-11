 /** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    MONGODB_URI: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_NAME}/?retryWrites=true&w=majority`,
    URL: "http://localhost:3000",
  },
};

export default nextConfig;
