/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI:
      "mongodb+srv:/<USERNAME>:<PASSWORD>@cluster0.uxh26xm.mongodb.net/?retryWrites=true&w=majority",
    URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
