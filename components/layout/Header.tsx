"use client"
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import SingUpModal from "../onboarding/SingUpModal";
import LoginModal from "../onboarding/LoginModal";
import SignUpModal from "../onboarding/SignUpModal";
import "./header.css";
export default function Header() {
	const { isOpen, onOpenChange, onOpen } = useDisclosure();
	const { isOpen: isOpenL, onOpenChange: onOpenChangeL, onOpen: onOpenL } = useDisclosure();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const pathname = usePathname();

	return (
		<>
			<Navbar
				onMenuOpenChange={setIsMenuOpen}
				classNames={{ base: "bg-white", wrapper: "main-header" }}
				disableAnimation
				isMenuOpen={isMenuOpen}
			>
				<NavbarContent className="navbar-content-base">
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
				<NavbarContent justify="end" className="hidden sm:flex">
					<NavbarItem>
						<Link href="#" className="text-black" onClick={onOpenL}>
							Login
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Button
							// as={Link}
							color="primary"
							href="#"
							variant="flat"
							className="nav-cta-primary"
							onPress={onOpen}
						>
							Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>
				<NavbarMenu className="bg-white">
					<NavbarMenuItem>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)} color="foreground" href="/" className={`h-10 text-[14px] sm:text-[16px] tracking-wider font-medium rounded-[10px] w-fit px-4 flex items-center justify-start ${pathname === "/" ? "bg-[#EEF9FF] text-[#0053DC]" : ""}`}>
							Home
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)} color="foreground" href="/explore" className={`h-10 text-[14px] sm:text-[16px] tracking-wider font-medium rounded-[10px] w-fit px-4 flex items-center justify-start ${pathname.includes("/explore") ? "bg-[#EEF9FF] text-[#0053DC]" : ""}`}>
							Explore
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)} color="foreground" href="/pricing" className={`h-10 text-[14px] sm:text-[16px] tracking-wider font-medium rounded-[10px] w-fit px-4 flex items-center justify-start ${pathname === "/pricing" ? "bg-[#EEF9FF] text-[#0053DC]" : ""}`}>
							Pricing
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link onClick={() => setIsMenuOpen(!isMenuOpen)} color="foreground" href="/contact-us" className={`h-10 text-[14px] sm:text-[16px] tracking-wider font-medium rounded-[10px] w-fit px-4 flex items-center justify-start ${pathname === "/contact-us" ? "bg-[#EEF9FF] text-[#0053DC]" : ""}`}>
							Contact
						</Link>
					</NavbarMenuItem>
					<div className="flex items-center w-full mt-auto pb-4">
						<Link href="#" className="text-black text-center w-full" onClick={onOpenL}>
							Login
						</Link>
						<Button
							// as={Link}
							color="primary"
							href="#"
							variant="flat"
							className="nav-cta-primary w-full"
							onPress={onOpen}
						>
							Sign Up
						</Button>
					</div>
				</NavbarMenu>
			</Navbar>
			<SignUpModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			/>
			<LoginModal
				isOpen={isOpenL}
				onOpenChange={onOpenChangeL}
			/>
		</>
	);
}
