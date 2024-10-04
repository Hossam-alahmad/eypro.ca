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
      <nav className="py-2 px-2 bg-white fixed w-full border-b z-40 shadow-sm">
        <div className="container mx-auto">
          <Link href="/" className="mb-4 block lg:hidden">
            <Image
              src={"/assets/logos/eypro-logo.png"}
              width={100}
              height={40}
              alt="eypro-logo"
              className="max-w-[100px] w-auto h-auto mx-auto"
            />
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 lg:hidden">
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
              <Link href="/get-qoute">
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
            <Link href="/" className="hidden lg:block">
              <Image
                src={"/assets/logos/eypro-logo.png"}
                width={150}
                height={150}
                alt="eypro-logo"
                className="w-auto h-[70px]"
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
