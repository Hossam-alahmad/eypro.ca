import Link from "next/link";
import { routes } from "../lib/routes";
import { ChevronDown, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Dispatch, SetStateAction } from "react";

type TNavigationBar = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  isMobileScreen: boolean;
};
const x = "";
const NavigationBar = ({
  isMobileScreen,
  showMenu,
  setShowMenu,
}: TNavigationBar) => {
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
        <ul className="flex flex-col lg:flex-row items-start  gap-2 ">
          {routes.map((route) => (
            <li
              key={route.id}
              className={`${
                route.subRoutes.length > 0 ? "group" : ""
              } relative  lg:static overflow-hidden lg:overflow-visible  w-full lg:w-auto`}
            >
              <Link
                href={route.path}
                className={`flex justify-between w-full hover:text-primary items-center p-2 uppercase `}
              >
                {route.name}{" "}
                {route.subRoutes.length > 0 && (
                  <ChevronDown
                    size={15}
                    className="group-hover:rotate-180 transition-all"
                  />
                )}{" "}
              </Link>
              {route.subRoutes.length > 0 && (
                <div
                  className={`${
                    isMobileScreen
                      ? "max-h-0 pl-5 group-hover:max-h-[400px] duration-500 ease-in-out"
                      : "absolute bg-white shadow rounded-md border top-[200%] invisible opacity-0  group-hover:visible group-hover:opacity-100 group-hover:top-full transition-all"
                  } transition-all`}
                >
                  <ul className="flex flex-col gap-2 whitespace-nowrap">
                    {route.subRoutes.map((subRoute) => (
                      <li key={subRoute.id}>
                        <Link
                          className="hover:text-primary p-2  text-sm block"
                          href={subRoute.path}
                        >
                          {subRoute.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
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
