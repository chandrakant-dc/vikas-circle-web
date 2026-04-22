import { userLogout } from "@src/services/auth.service";

export default function useLogout() {
	async function handleLogout() {
		await userLogout();
		window.location.reload();
	}

	return {
		handleLogout,
	};
}
