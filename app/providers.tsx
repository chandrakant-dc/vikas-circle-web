"use client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import LayoutWrapper from "@src/components/layout/LayoutWrapper";

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<HeroUIProvider>
			<ToastProvider placement="top-right" />
			<LayoutWrapper>{children}</LayoutWrapper>
		</HeroUIProvider>
	);
}
