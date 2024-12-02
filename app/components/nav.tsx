"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Globe, Moon, Sun, Mail } from 'lucide-react';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
  '/blog': {
    name: 'blog',
  },
};

export function Navbar() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 flex justify-between items-center">
        {/* Left Side: Nav Items */}
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all flex align-middle relative py-1 px-2 m-1 ${
                    isActive
                      ? 'bg-white text-black rounded-[5px]'
                      : 'hover:text-neutral-800 dark:hover:text-neutral-200'
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Right Side: Buttons */}
        <div className="flex space-x-4">
          {/* Mail Button */}
          <a
            href="mailto:vineetjassal35@gmail.com"
            className="p-2 rounded transition-all cursor-pointer flex items-center"
            title="Send Mail"
          >
            <Mail className="mr-2 mt-1 w-4" />
            reach out
          </a>

          {/* Dark/Light Mode Switch */}
          <button
            onClick={toggleDarkMode}
            className="p-2 cursor-pointer rounded transition-all"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </aside>
  );
}
