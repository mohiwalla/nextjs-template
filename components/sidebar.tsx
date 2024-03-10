import Link from "next/link"

export default function Sidebar() {
	const sidebarLinks = new Array<string>(30).fill("")

	return (
		<aside className="fixed top-[73px] z-30 hidden h-[calc(100vh-74px)] w-full shrink-0 md:sticky md:block">
			<div className="relative overflow-hidden h-full pr-2 lg:pb-9 lg:pt-4">
				<div className="h-full w-full overflow-y-auto overscroll-none">
					{sidebarLinks.map((link, index) => (
						<Link
							key={index}
							href="/"
							className="hover:underline duration-150 rounded py-2 block"
						>
							Link{index}
						</Link>
					))}
				</div>
			</div>
		</aside>
	)
}
