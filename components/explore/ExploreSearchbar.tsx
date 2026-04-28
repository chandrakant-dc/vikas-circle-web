import { ExploreContext } from "@src/context/explore/ExploreContext";
import SearchbarIcon from "@src/svg/SearchbarIcon";
import { useContext } from "react";

export default function ExploreSearchbar() {
	const { setSearchStr, handleSubmitSearch } = useContext(ExploreContext);
	return (
		<div className="explore-search-bar">
			<div className="search-bar">
				<SearchbarIcon />
				<input
					type="text"
					placeholder="Search courses…"
					onChange={(e) => setSearchStr(e.target.value)}
				/>
			</div>
			<button
				type="button"
				className="cta-primary"
				onClick={handleSubmitSearch}
			>
				Search
			</button>
		</div>
	);
}
