"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";

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
      <nav className="py-4 bg-white fixed w-full border-b z-40 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={"/assets/logos/eypro-logo.png"}
                width={150}
                height={200}
                alt="eypro-logo"
                className="max-w-[150px] md:max-w-[200px]"
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
