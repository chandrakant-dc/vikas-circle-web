import { sessionTracking } from "@src/services/auth.service";
import { useEffect, useRef } from "react";
import { getGuestId } from "../utils/guest";

const IDLE_LIMIT = 30 * 1000; // 30 sec (you can change)

export const useTracking = (isLoggedIn?: boolean) => {
	const startTime = useRef(Date.now());
	const lastActivity = useRef(Date.now());
	const isTabActive = useRef(true);
	const isUserActive = useRef(true);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		// Detect user activity
		const activityEvents = ["mousemove", "keydown", "scroll", "click"];

		const updateActivity = () => {
			lastActivity.current = Date.now();
			isUserActive.current = true;
		};

		activityEvents.forEach((event) => {
			window.addEventListener(event, updateActivity);
		});

		// Detect idle
		const idleChecker = setInterval(() => {
			const now = Date.now();

			if (now - lastActivity.current > IDLE_LIMIT) {
				isUserActive.current = false;
			}
		}, 5000);

		// Detect tab visibility
		const handleVisibility = () => {
			isTabActive.current = !document.hidden;
		};

		document.addEventListener("visibilitychange", handleVisibility);

		// Send tracking
		const sendTime = async () => {
			if (!isTabActive.current || !isUserActive.current) {
				startTime.current = Date.now(); // reset
				return;
			}

			const now = Date.now();
			const timeSpent = Math.floor((now - startTime.current) / 1000);

			if (timeSpent <= 0) return;

			// fetch("/api/session/track", {
			//     method: "POST",
			//     credentials: "include",
			//     headers: {
			//         "Content-Type": "application/json",
			//     },
			//     body: JSON.stringify({
			//         timeSpent,
			//         guestId: isLoggedIn ? undefined : getGuestId(),
			//     }),
			// });

			const payload = {
				timeSpent,
				guestId: isLoggedIn ? undefined : getGuestId(),
			};

			await sessionTracking(payload);

			startTime.current = now;
		};

		intervalRef.current = setInterval(sendTime, 15000);

		// Handle tab close
		const handleUnload = () => {
			if (!isTabActive.current || !isUserActive.current) return;

			const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);

			navigator.sendBeacon(
				"/api/session/track",
				JSON.stringify({
					timeSpent,
					guestId: isLoggedIn ? undefined : getGuestId(),
				}),
			);
		};

		window.addEventListener("beforeunload", handleUnload);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			// clearInterval(intervalRef.current);
			clearInterval(idleChecker);

			activityEvents.forEach((event) => {
				window.removeEventListener(event, updateActivity);
			});

			document.removeEventListener("visibilitychange", handleVisibility);
			window.removeEventListener("beforeunload", handleUnload);
		};
	}, [isLoggedIn]);
};