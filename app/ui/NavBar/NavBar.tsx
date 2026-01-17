'use client';
import { useRef } from "react";
import { navItems } from "./navItems";


export const NavBar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  return (
    <nav
      ref={navRef}
      className="sticky top-[10vh] z-40 w-full bg-[#124477] text-white shadow-xl"
    >
      <div className="w-full h-[6vh] overflow-x-auto scrollbar-hide items-center flex md:justify-center">
        <ul className="flex items-center justify-start md:justify-center gap-1 px-4 py-3 min-w-max">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-3 text-sm min-[1023px]:text-md font-medium whitespace-nowrap hover:underline underline-offset-4 transition-all duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};