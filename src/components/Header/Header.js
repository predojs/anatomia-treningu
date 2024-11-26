import React from "react";

const Header = () => (
  <header className="flex justify-between px-10 py-5 items-center sticky top-0">
    <h1 className="text-4xl font-bold">Anatomia treningu</h1>
    <nav>
      <ul className="flex gap-x-8">
        <li className="text-sm font-medium">Home</li>
        <li className="text-sm font-medium">Treningi</li>
        <li className="text-sm font-medium">O nas</li>
        <li className="text-sm font-medium">Kontakt</li>
      </ul>
    </nav>
  </header>
);

export default Header;
