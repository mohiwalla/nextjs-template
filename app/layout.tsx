import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { description, name } from "@/config"
import Sidebar from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: name,
	description,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="relative flex min-h-screen flex-col bg-background">
					<Header />
					<div className="border-b">
						<div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
							<Sidebar />
							<main className="space-y-6 py-6">{children}</main>
						</div>
					</div>
					<Footer />
				</div>
			</body>
		</html>
	)
}
