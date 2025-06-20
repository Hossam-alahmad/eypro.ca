"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { routes } from "../lib/routes";
import { ChevronDown, Menu, X } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "./ui/menubar";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = () => setMobileOpen(!mobileOpen);
    const checkWindowScreen = () => {
        if (window.innerWidth > 776) {
            setMobileOpen(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", checkWindowScreen);
        return () => window.removeEventListener("resize", checkWindowScreen);
    }, []);
    const renderSubRoutes = (subRoutes: any[]) =>
        subRoutes.map(sub =>
            sub.subRoutes.length === 0 ? (
                <MenubarItem className="hover:bg-transparent hover:text-primary">
                    <Link href={sub.path}>{sub.name}</Link>
                </MenubarItem>
            ) : (
                <MenubarSub>
                    <MenubarSubTrigger className="whitespace-nowrap hover:text-primary">
                        <Link href={sub.path}>{sub.name}</Link>
                    </MenubarSubTrigger>
                    <MenubarSubContent className="bg-white">
                        {renderSubRoutes(sub.subRoutes)}
                    </MenubarSubContent>
                </MenubarSub>
            )
        );
    const renderSubRoutesMobile = (subRoutes: any[]) =>
        subRoutes.map(sub =>
            sub.subRoutes.length === 0 ? (
                <Link href={sub.path} className="pl-4">
                    {sub.name}
                </Link>
            ) : (
                <AccordionItem
                    value={`${sub.id}-${sub.name.replace(" ", "+")}`}
                >
                    <AccordionTrigger>
                        <Link href={sub.path}>{sub.name}</Link>
                    </AccordionTrigger>
                    <AccordionContent>
                        {renderSubRoutesMobile(sub.subRoutes)}
                    </AccordionContent>
                </AccordionItem>
            )
        );
    const renderRoutes = () => (
        <Menubar className="flex flex-col items-start lg:flex-row space-x-0">
            {routes.map(route => (
                <MenubarMenu>
                    <MenubarTrigger
                        className="hover:text-primary  cursor-pointer"
                        asChild={route.subRoutes?.length === 0}
                    >
                        {route.subRoutes?.length === 0 ? (
                            <Link href={route.path}>{route.name}</Link>
                        ) : (
                            <>
                                {route.name} <ChevronDown size={18} />
                            </>
                        )}
                    </MenubarTrigger>
                    {route.subRoutes?.length > 0 && (
                        <MenubarContent className=" bg-white z-[100] ">
                            {renderSubRoutes(route.subRoutes)}
                        </MenubarContent>
                    )}
                </MenubarMenu>
            ))}
        </Menubar>
    );
    const renderMobileRoutes = (routes: any[]) => (
        <div className="flex flex-col gap-2 p-4 ">
            {routes.map(route => {
                return route.subRoutes?.length === 0 ? (
                    <Link
                        href={route.path}
                        className="text-sm font-medium break-words hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                    >
                        {route.name}
                    </Link>
                ) : (
                    <Accordion type="single" collapsible>
                        <AccordionItem
                            value={`${route.id}-${route.name.replace(
                                " ",
                                "+"
                            )}`}
                            className="border-none"
                        >
                            <AccordionTrigger className="hover:no-underline py-0">
                                <Link
                                    href={route.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm font-medium break-words hover:text-primary"
                                >
                                    {route.name}
                                </Link>
                            </AccordionTrigger>
                            <AccordionContent className="py-0">
                                {renderMobileRoutes(route.subRoutes)}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                );
            })}
        </div>
    );
    return (
        <>
            <nav className="w-full sticky top-0 z-[100]  bg-background border-b shadow-sm py-2 ">
                <div className="container mx-auto">
                    {" "}
                    <Link href="/" className="text-xl font-bold md:hidden">
                        <Image
                            src="/assets/logos/eypro-logo.png"
                            alt="logo"
                            className="mx-auto"
                            width={70}
                            height={70}
                        />
                    </Link>
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        <Link
                            href="/"
                            className="text-xl font-bold hidden md:block shrink-0"
                        >
                            <Image
                                src="/assets/logos/eypro-logo.png"
                                alt="logo"
                                className="mx-auto"
                                width={70}
                                height={70}
                            />
                        </Link>
                        <div className="flex gap-4 md:hidden">
                            <Link
                                href="https://api.whatsapp.com/send?phone=5197017116"
                                target="_blank"
                            >
                                <Button
                                    variant={"outline"}
                                    className="border-primary text-primary w-full  lg:w-auto hover:bg-primary hover:text-white"
                                >
                                    (519)701-7116
                                </Button>
                            </Link>
                            <Link href="/get-qoute">
                                <Button className="w-full lg:w-auto">
                                    GET QOUTE
                                </Button>
                            </Link>
                        </div>
                        <div className="flex">
                            <div className="hidden lg:flex ">
                                {renderRoutes()}
                            </div>
                            <div className="hidden md:flex gap-4 ">
                                <Link
                                    href="https://api.whatsapp.com/send?phone=5197017116"
                                    target="_blank"
                                >
                                    <Button
                                        variant={"outline"}
                                        className="border-primary text-primary w-full  lg:w-auto hover:bg-primary hover:text-white"
                                    >
                                        (519)701-7116
                                    </Button>
                                </Link>
                                <Link href="/get-qoute">
                                    <Button className="w-full lg:w-auto">
                                        GET QOUTE
                                    </Button>
                                </Link>
                            </div>
                            <div className="lg:hidden">
                                <Button
                                    variant="transparent"
                                    size="icon"
                                    onClick={toggleMobile}
                                >
                                    {mobileOpen ? <X /> : <Menu />}
                                </Button>
                            </div>
                        </div>
                    </div>
                    {mobileOpen && (
                        <div
                            className={`lg:hidden remove-scrollbar z-40 transition-all   absolute  right-0 translate-y-2 h-[calc(100vh_-_120px)] bg-white w-[280px]  ${
                                mobileOpen
                                    ? "translate-x-0"
                                    : "translate-x-full"
                            }`}
                        >
                            {renderMobileRoutes(routes)}
                        </div>
                    )}
                </div>
            </nav>{" "}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="fixed z-20 top-0 left-0 cursor-pointer bg-black/20 size-full"
                ></div>
            )}
        </>
    );
};

export default Header;
