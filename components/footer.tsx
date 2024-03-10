import { ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { name, logo, description } from "@/config"

export default function Footer() {
	return (
		<footer>
			<div className="container py-6 lg:py-8">
				<div className="grid grid-cols-2 gap-10 md:grid-cols-4 text-muted-foreground">
					<div className="">
						<section className="flex flex-col gap-6">
							<div className="flex">
								<Link
									href="/"
									className="flex items-center text-primary gap-3"
								>
									<span className="text-2xl">▲</span>
									<span className="self-center text-2xl font-semibold">
										{name}
									</span>
								</Link>
							</div>
							{description}
						</section>
					</div>

					<div>
						<h3 className="mb-6 text-xl font-black uppercase text-primary">
							Education
						</h3>
						<ul className="font-medium">
							<li className="mb-4">
								<Link
									href="/"
									className="hover:underline hover:text-foreground"
								>
									Courses
								</Link>
							</li>

							<li className="mb-4">
								<Link
									href="/"
									className="hover:underline hover:text-foreground"
								>
									Careers
								</Link>
							</li>

							<li className="mb-4">
								<Link
									href="/"
									className="hover:underline hover:text-foreground"
								>
									Discuss
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-6 text-xl font-black uppercase text-primary">
							Projects
						</h3>

						<ul className="font-medium">
							<li className="mb-4">
								<Link
									href="/"
									className="hover:underline hover:text-foreground"
								>
									Past
								</Link>
							</li>

							<li className="mb-4">
								<Link
									href="/"
									className="hover:underline hover:text-foreground"
								>
									Present
								</Link>
							</li>

							<li className="mb-4">
								<Link
									href="/"
									className="hover:underline hover:text-foreground"
								>
									Future
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-6 text-xl font-black uppercase text-primary">
							join us
						</h3>

						<ul className="font-medium">
							<li className="mb-4">
								<Link
									href="/"
									className="hover:underline hover:text-foreground"
								>
									As a Student
								</Link>
							</li>

							<li className="mb-4">
								<Link
									href="/"
									className="hover:underline hover:text-foreground"
								>
									As a Teacher
								</Link>
							</li>

							<li className="mb-4">
								<Link
									target="_blank"
									href="/"
									className="hover:underline hover:text-foreground"
								>
									Reach Us
									<ExternalLink
										strokeWidth={2}
										size={22}
										className="inline-block ml-2 mb-2"
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="px-4 py-6 bg-secondary flex justify-center">
				<span className="text-sm text-primary">
					© 2023
					<Link href="/" className="font-semibold">
						{" "}
						{name}™
					</Link>{" "}
					All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}
