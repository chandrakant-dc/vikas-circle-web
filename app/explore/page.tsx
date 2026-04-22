import ExploreMain from "@src/components/explore/ExploreMain";
import Loading from "@src/ui/Loading";
import { Suspense } from "react";

export default function ExplorePage() {
	return (
		<Suspense fallback={<Loading />}>
			<ExploreMain />
		</Suspense>
	);
}
