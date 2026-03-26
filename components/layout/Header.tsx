import {
	Button,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@heroui/react";
import Image from "next/image";
import React from "react";
import "./header.css";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = [
		"Profile",
		"Dashboard",
		"Activity",
		"Analytics",
		"System",
		"Deployments",
		"My Settings",
		"Team Settings",
		"Help & Feedback",
		"Log Out",
	];
	return <Navbar onMenuOpenChange={setIsMenuOpen} classNames={{ base: "asdasd", wrapper: "main-header" }}>
		<NavbarContent>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="sm:hidden"
			/>
			<NavbarBrand>
				<Image src={"/logo.png"} alt="blog-card-img" height={200} width={200} className="w-35 h-10" />
			</NavbarBrand>
		</NavbarContent>

		<NavbarContent className="hidden sm:flex gap-4 zksajhkdjh" justify="center">
			<NavbarItem>
				<Link color="foreground" href="#">
					Home
				</Link>
			</NavbarItem>
			<NavbarItem>
				<Link color="foreground" href="#">
					Explore
				</Link>
			</NavbarItem>
			<NavbarItem>
				<Link color="foreground" href="#">
					Pricing
				</Link>
			</NavbarItem>
			<NavbarItem>
				<Link color="foreground" href="#">
					Contact
				</Link>
			</NavbarItem>
		</NavbarContent>
		<NavbarContent justify="end">
			<NavbarItem className="hidden lg:flex">
				<Link href="#" className="text-black">Login</Link>
			</NavbarItem>
			<NavbarItem>
				<Button as={Link} color="primary" href="#" variant="flat" className="nav-cta-primary">
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
							index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
						}
						href="#"
						size="lg"
					>
						{item}
					</Link>
				</NavbarMenuItem>
			))}
		</NavbarMenu>
	</Navbar>;
}
