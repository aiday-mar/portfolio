"use client";

import { useState } from "react";

const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-purple-200/50 bg-white/80 backdrop-blur-md dark:border-purple-900/50 dark:bg-zinc-950/80">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {"<Portfolio />"}
                </a>

                {/* Desktop links */}
                <ul className="hidden gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-zinc-600 transition-colors hover:text-purple-700 dark:text-zinc-400 dark:hover:text-purple-300"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6 text-zinc-700 dark:text-zinc-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <ul className="border-t border-purple-200/50 bg-white px-6 py-4 md:hidden dark:border-purple-900/50 dark:bg-zinc-950">
                    {navLinks.map((link) => (
                        <li key={link.href} className="py-2">
                            <a
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
