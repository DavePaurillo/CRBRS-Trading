import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const khand = Montserrat({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Cerberus Trading",
	description: "The best crypto community in the Philippines",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={khand.className}>{children}</body>
		</html>
	);
}
