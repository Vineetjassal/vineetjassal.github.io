"use client"

import { FaSpotify } from "react-icons/fa";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const isListening = false; // Replace with Spotify API call if needed

  return (
    <footer className="mb-16">
      <hr className="mt-8"/>
      <div className="flex justify-between items-center font-sm mt-4 text-neutral-600 dark:text-neutral-300">
        <ul className="flex flex-row space-x-4">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/vineetjassal"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">twitter</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/vineetjassal"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">linkedin</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Vineetjassal"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">github</p>
            </a>
          </li>
        </ul>
        
        <button
          className="md:flex hidden flex-row items-center px-4 py-2 text-md text-neutral-600 transition-all rounded-md hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 cursor-pointer"
          onClick={() => window.open("https://open.spotify.com/user/u8wxtco43fslula3arq6p71za", "_blank")}
        >
          <FaSpotify size={18}/>
          <p className="ml-2 h-7">{isListening ? "spotify - listening" : "spotify - not listening"}</p>
        </button>
      </div>
      
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed. All rights reserved.
      </p>
    </footer>
  );
}
