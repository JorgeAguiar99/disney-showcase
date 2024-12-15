import { useState } from "react";

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm); // Chamar a função passada por `props`
    }
  };

  return (
    <nav className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-white gap-x-8">
        <div className="flex gap-x-8 font-semibold">
          <input
            id="inputSearch"
            className="rounded-2xl h-8 w-64 placeholder:italic placeholder:text-slate-400 block bg-gray-800 border-gray-700 py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm text-white"
            placeholder="Buscar..."
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
