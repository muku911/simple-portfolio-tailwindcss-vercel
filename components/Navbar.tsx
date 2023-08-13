"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useState } from "react";

// Import Component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// Set Interface for Array
interface NavItem {
  label: string;
  page: string;
}

// Arrat Nav Items
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  // Theming, call usetheme from next-themes
  const { systemTheme, theme, setTheme } = useTheme();
  // load cuurent theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  // Navbar show state
  const [navbar, setNavbar] = useState(false);
  console.log(systemTheme, theme, currentTheme);
  return (
    <header
      className="w-full mx-auto px-4 bg-white shadow fixed top-0 z-50
    dark:bg-stone-900 dark:text-white dark:border-b dark:border-stone-600"
    >
      <div className="md:flex md:items-center justify-between">
        <div>
          <div className="md:py-5 md:block">
            <h2 className="text-2xl font-bold">Husni Mubarok Al Ghifari</h2>
          </div>
        </div>
        <div className="md:flex md:space-x-6 items-center">
          {/* Nav Menu */}
          {NAV_ITEMS.map((item, index) => {
            return <a key={index}>{item.label}</a>;
          })}
          {/* Dark/Light Toogle */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-slate-100 p-2 rounded-xl"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
