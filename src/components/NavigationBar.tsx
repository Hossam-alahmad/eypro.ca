import Link from "next/link";
import { landingPagesRoutes, routes } from "../lib/routes";
import { ChevronDown, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "./ui/menubar";

type TNavigationBar = {
    showMenu: boolean;
    setShowMenu: Dispatch<SetStateAction<boolean>>;
    isMobileScreen: boolean;
};
const NavigationBar = ({
    isMobileScreen,
    showMenu,
    setShowMenu,
}: TNavigationBar) => {
    const activePath = useSelectedLayoutSegment();

    return (
        <div className="flex gap-2">
            <div
                className={`${
                    isMobileScreen
                        ? `mobile-nav gap-2 ${
                              showMenu ? "translate-x-0" : "translate-x-full"
                          }`
                        : ""
                } flex gap-4`}
            >
                <Menubar className="flex flex-col h-auto lg:flex-row ">
                    {routes.map(route => {
                        return (
                            <MenubarMenu key={route.id}>
                                <MenubarTrigger
                                    asChild={route.subRoutes.length === 0}
                                >
                                    {route.subRoutes.length === 0 ? (
                                        <Link href={route.path}>
                                            {route.name}{" "}
                                        </Link>
                                    ) : (
                                        <>
                                            {route.name}
                                            <ChevronDown size={18} />
                                        </>
                                    )}
                                </MenubarTrigger>
                                {route.subRoutes.length > 0 && (
                                    <MenubarContent className="bg-white ">
                                        {route.subRoutes.map(subRoute => {
                                            return subRoute.subRoutes.length ===
                                                0 ? (
                                                <MenubarItem
                                                    asChild
                                                    key={subRoute.id}
                                                >
                                                    <Link href={subRoute.path}>
                                                        {" "}
                                                        {subRoute.name}
                                                    </Link>
                                                </MenubarItem>
                                            ) : (
                                                <MenubarSub key={subRoute.id}>
                                                    <MenubarSubTrigger>
                                                        {subRoute.name}
                                                    </MenubarSubTrigger>

                                                    <MenubarSubContent className="bg-white">
                                                        {subRoute.subRoutes.map(
                                                            ssRoute => (
                                                                <MenubarItem
                                                                    key={
                                                                        ssRoute.id
                                                                    }
                                                                    asChild
                                                                >
                                                                    <Link
                                                                        href={
                                                                            ssRoute.path
                                                                        }
                                                                    >
                                                                        {" "}
                                                                        {
                                                                            ssRoute.name
                                                                        }
                                                                    </Link>
                                                                </MenubarItem>
                                                            )
                                                        )}
                                                    </MenubarSubContent>
                                                </MenubarSub>
                                            );
                                        })}
                                    </MenubarContent>
                                )}
                            </MenubarMenu>
                        );
                    })}
                </Menubar>
                <Link
                    href="https://api.whatsapp.com/send?phone=2264004008"
                    target="_blank"
                >
                    <Button
                        variant={"outline"}
                        className="border-primary text-primary w-full  lg:w-auto hover:bg-primary hover:text-white"
                    >
                        (226)400-4008
                    </Button>
                </Link>
                <Link href="/get-qoute" scroll={false}>
                    <Button
                        onClick={() => {
                            isMobileScreen ? setShowMenu(false) : null;
                        }}
                        className="w-full lg:w-auto"
                    >
                        GET QOUTE
                    </Button>
                </Link>
            </div>
            <Button
                onClick={() => setShowMenu(!showMenu)}
                size={"icon"}
                variant={"transparent"}
                className="lg:hidden "
            >
                <MenuIcon />
            </Button>
        </div>
    );
};

export default NavigationBar;
