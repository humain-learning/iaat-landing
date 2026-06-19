'use client';
import { useRef } from "react";
import { navItems } from "./navItems";


export const NavBar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  return (
    <nav
      ref={navRef}
      className="sticky top-[10vh] z-40 w-full  text-white shadow-xl flex flex-col"
    >
      <div
        className="w-full h-[6vh] overflow-x-auto bg-[#124477] overflow-y-hidden scrollbar-hide items-center flex md:justify-center"
        style={{ touchAction: "pan-x" }}
      >
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
      <div className="announcement-marquee bg-[#1d638f] p-2">
        <div className="announcement-marquee-track">
          <p className="announcement-marquee-item text-center md:w-full">
            Attend the online information session for the Post Graduate Certificate in IB Education on 27<sup>th</sup> of June at 11AM IST by registering <a href="https://tinyurl.com/PGCIB-27th-June" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-bold">here</a>.
          </p>
          <p className="announcement-marquee-item text-center md:hidden" aria-hidden="true">
            Attend the online information session for the Post Graduate Certificate in IB Education on 27<sup>th</sup> of June at 11AM IST by registering <a href="https://tinyurl.com/PGCIB-27th-June" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 font-bold">here</a>.
          </p>
        </div>
      </div>
    </nav>
  );
};