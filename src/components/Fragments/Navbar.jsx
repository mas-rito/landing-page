import { useState } from "react";
import { logoPan } from "../../assets";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full text-white flex justify-between items-center backdrop-blur-sm px-8 py-4">
      <h1 className="text-3xl font-bold">HERNY JUNIARTI, S.E</h1>
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 border rounded text-white border-white hover:text-blue-500 hover:border-blue-500 absolute right-8 cursor-pointer md:hidden"
      >
        <svg
          className=" fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <ul
        className={`absolute right-0 md:static md:flex gap-6 transition-all duration-300 ease-in bg-slate-300 md:bg-transparent rounded-lg text-black md:py-0 py-5 md:text-white ${
          open ? "top-16" : "top-[-200px]"
        }`}
      >
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 md:p-0">
          Home
        </li>
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 md:p-0">
          Biodata Saya
        </li>
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 md:p-0">
          Pengalaman
        </li>
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 md:p-0">
          Organisasi
        </li>
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 md:p-0">
          Dokumentasi
        </li>
      </ul>
      <img
        src={logoPan}
        alt="PAN bantu rakyat"
        className="h-10 me-4 hidden md:block"
      />
    </nav>
  );
};

export default Navbar;
