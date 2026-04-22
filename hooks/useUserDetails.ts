import { getLoggedInUser } from "@src/services/auth.service";
import { useEffect, useState } from "react";

export default function useUserDetails() {
	const [userDetails, setUserDetails] = useState<UserDetailsI | null>(null);

	useEffect(() => {
		async function handleGetUserDetails() {
			const resp = await getLoggedInUser();
			const details = resp?.data?.data;
			setUserDetails(details ? { ...details, isLoggedIn: true } : null);
		}
		handleGetUserDetails();
	}, []);

	return {
		userDetails,
	};
}

export interface UserDetailsI {
	fullName: string;
	email: string;
	isLoggedIn: boolean;
}
