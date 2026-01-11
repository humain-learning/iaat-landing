'use client';
import { useEffect, useRef } from "react";
import { navItems } from "./navItems";

export const NavBar = () => {
    const navRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const updateOffset = () => {
            const navEl = navRef.current;
            if (!navEl) return;
            const rect = navEl.getBoundingClientRect();
            const offset = Math.ceil(rect.top + rect.height);
            document.documentElement.style.setProperty('--sticky-offset', `${offset}px`);
        };

        updateOffset();
        window.addEventListener('resize', updateOffset);
        return () => window.removeEventListener('resize', updateOffset);
    }, []);

    return (
        <nav ref={navRef} className="sticky top-[10vh] z-40 w-full bg-[#124477] text-white">
            <div className="w-full overflow-x-auto scrollbar-hide">
                <ul className="flex items-center justify-start md:justify-center gap-1 px-4 py-3 min-w-max">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="px-3 py-2 text-sm font-medium whitespace-nowrap hover:underline underline-offset-4 transition-all duration-300"
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