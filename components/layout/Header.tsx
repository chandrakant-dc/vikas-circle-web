import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./header.css";
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const pathname = usePathname();

	console.log("pathname", pathname);


	const menuItems = [
		"Home",
		"Explore",
		"Pricing",
		"Contact"
	];
	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			classNames={{ base: "bg-white", wrapper: "main-header" }}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Image
						src={"/logo.png"}
						alt="blog-card-img"
						height={200}
						width={200}
						className="w-35 h-10"
					/>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex gap-0 zksajhkdjh"
				justify="center"
			>
				<NavbarItem>
					<Link color="foreground" href="/" className={`h-10 font-medium rounded-[10px] px-4 flex items-center justify-center ${pathname === "/" ? "bg-[#EEF9FF] text-[#0053DC]" : ""}`}>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/explore" className={`h-10 font-medium rounded-[10px] px-4 flex items-center justify-center ${pathname.includes("/explore") ? "bg-[#EEF9FF] text-[#0053DC]" : ""}`}>
						Explore
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/pricing" className={`h-10 font-medium rounded-[10px] px-4 flex items-center justify-center ${pathname === "/pricing" ? "bg-[#EEF9FF] text-[#0053DC]" : ""}`}>
						Pricing
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/contact-us" className={`h-10 font-medium rounded-[10px] px-4 flex items-center justify-center ${pathname === "/contact-us" ? "bg-[#EEF9FF] text-[#0053DC]" : ""}`}>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#" className="text-black">
						Login
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						color="primary"
						href="#"
						variant="flat"
						className="nav-cta-primary"
					>
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index + 1}`}>
						<Link
							className="w-full"
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
										? "danger"
										: "foreground"
							}
							href="#"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
