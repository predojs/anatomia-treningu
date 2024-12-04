import React from "react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row sticky top-0 bg-white w-full justify-between items-center px-6 py-5">
      <section className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-bold">Anatomia treningu</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 md:hidden hover:cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </section>

      <nav className={isMenuOpen ? "flex" : "hidden md:flex"}>
        <ul className="flex flex-col md:flex-row text-xl items-center py-5 md:pb-0 gap-5 right-1/2 md:relative w-full md:w-auto bg-white">
          <li className="font-medium hover:cursor-pointer">Home</li>
          <li className="font-medium hover:cursor-pointer">Treningi</li>
          <li className="font-medium hover:cursor-pointer">O nas</li>
          <li className="font-medium hover:cursor-pointer">Kontakt</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
