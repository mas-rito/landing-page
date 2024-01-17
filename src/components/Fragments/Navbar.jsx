import { useEffect, useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 z-40 w-full">
      <div className="relative">
        <div
          className={`flex justify-between items-center duration-500 lg:backdrop-blur-sm ${
            isScroll
              ? "bg-white shadow-md text-blue-800"
              : "bg-transparent shadow-none text-white"
          }  px-8 py-4`}
        >
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            HERNY JUNIARTI, S.E
          </h1>
          <button
            onClick={() => setOpen(!open)}
            className={`px-3 py-2 border rounded ${
              isScroll
                ? "text-blue-800 border-blue-800"
                : "text-white border-white"
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
          <ul className="hidden lg:flex gap-6">
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
              <a href="#docimentation">Dokumentasi</a>
            </li>
          </ul>
          <img
            src="/assets/image/logo-pan.png"
            alt="PAN bantu rakyat"
            className="h-10 me-4 hidden lg:block"
          />
        </div>
        <div
          className={`absolute ${
            open ? "" : "translate-y-[-150%]"
          } left-0 w-full lg:hidden bg-white shadow-md -z-10 transition-transform duration-300`}
        >
          <ul className="flex flex-col items-center gap-6 py-4 font-bold">
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
              <a href="#docimentation">Dokumentasi</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
