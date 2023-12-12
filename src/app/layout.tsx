import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import cn from "~/utils/tailwind-merge";

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
	title: "simpul challenge",
	description: "simpul challenge",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(lato.className, "min-h-screen w-screen bg-neutral-800")}
			>
				{children}
			</body>
		</html>
	);
}
