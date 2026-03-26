// import AppProvider from "@src/context/global/AppProvider";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";

export default function LayoutWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <AppProvider>
		<>
			<Header />
			<div className="min-h-[calc(100vh-254px)]">{children}</div>
			<Footer />
		</>
		// </AppProvider>
	);
}
