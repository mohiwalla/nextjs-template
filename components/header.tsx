"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { logo, name, navLinks } from "@/config"
import { Button } from "./ui/button"

export default function Header() {
	const route = usePathname()

	return (
		<header className="sticky top-0 z-50 w-full border-b backdrop-blur">
			<nav>
				<div className="container flex flex-wrap items-center justify-between py-4">
					<Link
						href="/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<span className="text-2xl">▲</span>
						<span className="self-center text-2xl font-semibold whitespace-nowrap capitalize xs:inline hidden">
							{name}
						</span>
					</Link>
					<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<Button>Sign in</Button>
					</div>
					<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
						<ul className="flex flex-row">
							{navLinks.map((link) => (
								<li key={link.name}>
									<Button asChild variant="ghost">
										<Link
											href={link.path}
											className={`${
												route === link.path &&
												"text-blue hover:bg-transparent pointer-events-none"
											}`}
										>
											{link.name}
										</Link>
									</Button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
