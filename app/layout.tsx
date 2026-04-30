import AppProvider from "@src/context/global/AppProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const robotoSans = Roboto({
	variable: "--font-roboto-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Vikas Circle",
	description: "Vikas Circle",
	icons: {
		icon: [
			{
				url: "/icon.png",
				href: "/icon.png",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9872794516401798"
					crossOrigin="anonymous"></script>
			</head>

			<body className={`${robotoSans.variable} antialiased`}>
				<AppProvider>
					<Providers>{children}</Providers>
				</AppProvider>
			</body>
		</html>
	);
}