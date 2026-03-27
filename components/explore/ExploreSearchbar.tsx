import SearchbarIcon from "@src/svg/SearchbarIcon";

export default function ExploreSearchbar() {
	return (
		<div className="explore-search-bar">
			<div className="search-bar">
				<SearchbarIcon />
				<input type="text" placeholder="Search courses…" />
			</div>
			<button type="button" className="cta-primary">
				Search
			</button>
		</div>
	);
}
