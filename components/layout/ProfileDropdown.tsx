"use client";

import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@heroui/dropdown";
import { AppContext } from "@src/context/global/AppContext";
import useLogout from "@src/hooks/useLogout";
import LogoutWhiteIcon from "@src/svg/LogoutWhiteIcon";
import MenuMyLearningIcon from "@src/svg/MenuMyLearningIcon";
import ProfileDownArrowIcon from "@src/svg/ProfileDownArrowIcon";
import ProfileUserIcon from "@src/svg/ProfileUserIcon";
import ResetArrowIcon from "@src/svg/ResetArrowIcon";
import ResetPassIcon from "@src/svg/ResetPassIcon";
import Link from "next/link";
import { useContext, useState } from "react";
export default function ProfileDropdown() {
	const { userDetails } = useContext(AppContext);
	const { handleLogout } = useLogout();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
			<DropdownTrigger>
				<div className="profile-dropdown-trigger">
					<ProfileUserIcon />
					<ProfileDownArrowIcon />
				</div>
			</DropdownTrigger>
			<DropdownMenu aria-label="Static Actions">
				<DropdownItem
					key="user-details"
					showDivider
					isReadOnly
					className="
        bg-white 
        hover:bg-white 
        focus:bg-white 
        data-[hover=true]:bg-white 
        data-[focus=true]:bg-white 
        data-[selectable=true]:focus:bg-white
        cursor-default
      "
				>
					<div className="user-profile-info">
						<ProfileUserIcon />
						<div>
							<div className="profile-user-name">
								Hello, {userDetails?.fullName || "NA"}
							</div>
							<div className="profile-user-email">
								{userDetails?.email || "NA"}
							</div>
						</div>
					</div>
				</DropdownItem>
				<DropdownItem
					key="my-learning"
					isReadOnly
					className="
        bg-white 
        hover:bg-white 
        focus:bg-white 
        data-[hover=true]:bg-white 
        data-[focus=true]:bg-white 
        data-[selectable=true]:focus:bg-white
        cursor-default
      "
				>
					<Link
						href={"/my-learning"}
						onClick={() => setIsOpen(false)}
						className="profile-dropdown-item"
					>
						<div className="profile-dropdown-item-content">
							<MenuMyLearningIcon />
							<span>My Learning</span>
						</div>
						<ResetArrowIcon />
					</Link>
				</DropdownItem>
				<DropdownItem
					key="reset"
					isReadOnly
					className="
        bg-white 
        hover:bg-white 
        focus:bg-white 
        data-[hover=true]:bg-white 
        data-[focus=true]:bg-white 
        data-[selectable=true]:focus:bg-white
        cursor-default
      "
				>
					<button type="button" className="profile-dropdown-item">
						<div className="profile-dropdown-item-content">
							<ResetPassIcon />
							<span>Reset Password</span>
						</div>
						<ResetArrowIcon />
					</button>
				</DropdownItem>
				<DropdownItem
					key="logout"
					isReadOnly
					className="
        bg-white 
        hover:bg-white 
        focus:bg-white 
        data-[hover=true]:bg-white 
        data-[focus=true]:bg-white 
        data-[selectable=true]:focus:bg-white
        cursor-default
      "
				>
					<button
						type="button"
						onClick={handleLogout}
						className="profile-logout-cta"
					>
						Logout <LogoutWhiteIcon />
					</button>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
