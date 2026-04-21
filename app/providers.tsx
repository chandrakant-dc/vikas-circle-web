"use client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import LayoutWrapper from "@src/components/layout/LayoutWrapper";
import { AppContext } from "@src/context/global/AppContext";
import { useTracking } from "@src/hooks/useTracking";
import { useContext } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	const { userDetails } = useContext(AppContext);
	useTracking(userDetails?.isLoggedIn);
	return (
		<HeroUIProvider>
			{/* <AppProvider> */}
			<ToastProvider placement="top-right" />
			<LayoutWrapper>{children}</LayoutWrapper>
			{/* </AppProvider> */}
		</HeroUIProvider>
	);
}
