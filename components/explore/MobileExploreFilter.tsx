import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	useDisclosure,
} from "@heroui/react";
import ExploreFilter from "./ExploreFilter";

export default function MobileExploreFilter() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<div className="mt-4 mobile-filter-section-explore">
			<button type="button" onClick={onOpen} className="cta-primary">
				Filter By Category
			</button>
			<Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="xs">
				<DrawerContent>
					{() => (
						<>
							<DrawerHeader className="flex flex-col gap-1">
								Explore Filter
							</DrawerHeader>
							<DrawerBody>
								<ExploreFilter />
							</DrawerBody>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</div>
	);
}
