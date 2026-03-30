import ExploreProvider from "@src/context/explore/ExploreProvider";
import ExploreIndex from "./ExploreIndex";

export default function ExploreMain() {
	return (
		<ExploreProvider>
			<ExploreIndex />
		</ExploreProvider>
	);
}
