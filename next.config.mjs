/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    // other headers omitted for brevity...
                    { key: "Access-Control-Allow-Origin", value: "*" }//same-origin
                ]
            }
        ]
    }
};

export default nextConfig;
