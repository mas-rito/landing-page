import { useEffect, useState } from "react";
import { logoPan } from "../../assets";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScroll(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isScroll);

  return (
    <nav
      className={`fixed top-0 left-0 w-full duration-500 ${
        scrollY ? "text-blue-800" : "text-white"
      } flex justify-between items-center backdrop-blur-sm ${
        isScroll ? "bg-blue-50 shadow-md" : "bg-transparent shadow-none"
      }  px-8 py-4 z-50`}
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
        HERNY JUNIARTI, S.E
      </h1>
      <button
        onClick={() => setOpen(!open)}
        className={`px-3 py-2 border rounded ${
          scrollY ? "text-blue-800 border-blue-800" : "text-white border-white"
        }  hover:text-blue-500 hover:border-blue-500 absolute right-8 cursor-pointer lg:hidden`}
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
        className={`absolute right-0 lg:static lg:flex gap-6 transition-all duration-300 ease-in bg-blue-50 lg:bg-transparent rounded-lg lg:py-0 py-5 ${
          scrollY ? "text-blue-800" : "text-black lg:text-white"
        }  ${open ? "top-16" : "top-[-200px]"}`}
      >
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 lg:p-0">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 lg:p-0">
          <a href="#about">Biodata Saya</a>
        </li>
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 lg:p-0">
          <a href="#experience">Pengalaman</a>
        </li>
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 lg:p-0">
          <a href="#organization">Organisasi</a>
        </li>
        <li className="hover:text-blue-500 hover:border-blue-500 px-20 py-1 lg:p-0">
          <a href="#docimentation">Dokumentasi</a>
        </li>
      </ul>
      <img
        src={logoPan}
        alt="PAN bantu rakyat"
        className="h-10 me-4 hidden lg:block"
      />
    </nav>
  );
};

export default Navbar;
