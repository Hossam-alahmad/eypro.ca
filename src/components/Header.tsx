"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { Button } from "./ui/button";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth < 1023
  );
  const checkWindowScreen = () => {
    if (window.innerWidth > 1023) {
      setShowMenu(false);
      setIsMobileScreen(false);
    } else {
      setIsMobileScreen(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkWindowScreen);
    return () => window.removeEventListener("resize", checkWindowScreen);
  }, []);
  return (
    <>
      <nav className="py-4 px-2 bg-white fixed w-full border-b z-40 shadow-sm">
        <div className="container mx-auto">
          <Link href="/" className="mb-4 block lg:hidden">
            <Image
              src={"/assets/logos/eypro-logo.png"}
              width={150}
              height={200}
              alt="eypro-logo"
              className="max-w-[150px] md:max-w-[200px] h-[40px] mx-auto"
            />
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 lg:hidden">
              <Link href="https://wa.me/015197017116" target="_blank">
                <Button
                  variant={"outline"}
                  className="border-primary text-primary w-full  lg:w-auto hover:bg-primary hover:text-white"
                >
                  +1 (519) 701-7116
                </Button>
              </Link>
              <Link href="/get-qoute">
                <Button className="w-full lg:w-auto">GET QOUTE</Button>
              </Link>
            </div>
            <Link href="/" className="hidden lg:block">
              <Image
                src={"/assets/logos/eypro-logo.png"}
                width={150}
                height={200}
                alt="eypro-logo"
                className="max-w-[150px] md:max-w-[200px] h-[40px]"
              />
            </Link>

            <NavigationBar
              isMobileScreen={isMobileScreen}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
            />
          </div>
        </div>
      </nav>
      <div
        className={`fixed transition-all cursor-pointer bg-secondary/40 z-20 w-full h-full left-0 top-0 ${
          showMenu ? "visible" : "invisible"
        }`}
        onClick={() => {
          setShowMenu(false);
        }}
      ></div>
    </>
  );
};

export default Header;