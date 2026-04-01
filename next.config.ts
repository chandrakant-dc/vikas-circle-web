import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		dangerouslyAllowLocalIP: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.s3.us-east-1.amazonaws.com",
				port: "",
				pathname: "/**",
			},
			{ protocol: "http", hostname: "localhost", port: "4000" },
			{ protocol: "http", hostname: "127.0.0.1", port: "4000" },
			{
				protocol: "http",
				hostname: "dfd1-157-20-190-10.ngrok-free.app",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
