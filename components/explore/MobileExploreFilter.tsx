import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    useDisclosure
} from "@heroui/react";
import ExploreFilter from "./ExploreFilter";

export default function MobileExploreFilter() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <button type="button" onClick={onOpen}>Filter</button>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} size="xs">
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Explore Filter</DrawerHeader>
                            <DrawerBody>
                                <ExploreFilter />
                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    )
}
