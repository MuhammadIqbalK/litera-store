import storeLogo from ".././assets/LiteraStore.svg";
import searchIcon from ".././assets/BiSearch.svg";
import shopCart from ".././assets/cart-shop.svg";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  // State untuk kontrol menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsClicked(true); // Set isClicked true saat tombol diklik
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <>
      <nav className="bg-white text-black border-gray-500 p-5">
        <div className="flex item-center">
          {/* logo */}
          <div className="flex items-center">
            <img
              className="mr-16 w-[120px] sm:w-18"
              src={storeLogo}
              alt="logos.svg"
            />
          </div>

          <div className="hidden md:flex items-center ml-0 mr-0 gap-6">
            <a
              href="#"
              className="block py-2 px-3 font-roboto rounded text-gray-700 font-light underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              aria-current="page"
            >
              Books
            </a>
            <a
              href="#"
              className="block py-2 px-3 font-roboto rounded text-gray-700 underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              aria-current="page"
            >
              Categories
            </a>
            <a
              href="#"
              className="block py-2 px-3 font-roboto rounded text-gray-700 underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              aria-current="page"
            >
              About
            </a>
          </div>

          <div className="hidden md:flex items-center mr-0 gap-6 ml-auto">
            <div className="relative mt-1">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img className="size-5" src={searchIcon} />
              </div>
              <input
                type="text"
                className="mt-1 block w-full px-10 py-2 border-b-2 border-gray-500 focus:outline-none focus:border-black text-sm"
                placeholder="Search Books..."
              />
            </div>
            <a href="#" className="size-7 ml-6 underline-effect opacity-50  hover:opacity-100">
              <img src={shopCart} alt="" />
            </a>
            <div className="w-[2px] h-10 bg-gray-700 ml-4"></div>
            <a
              href="#"
              className="block py-2 px-3 font-roboto rounded text-gray-700 underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              aria-current="page"
            >
              Sign In
            </a>
          </div>

          {/* Menu burger button */}
          <div className="flex ml-auto gap-2 md:hidden">
            <button onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <div
                className={`underline-effect ${
                  isClicked ? "animate-bounce" : ""
                }`}
              >
                {isMenuOpen ? (
                  <RxCross1 className="text-black opacity-50  hover:opacity-100 text-5xl w-9" />
                ) : (
                  <RxHamburgerMenu className="text-black opacity-50  hover:opacity-100 text-5xl w-9" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Menu list (hidden on mobile) */}
        <div
          className={`md:hidden flex flex-col items-center shadow-md mt-4 p-3 gap-6 transition-all duration-1000 ease-linear ${
            isMenuOpen
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }`}
        >
          {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center mt-4 gap-6">
              <div className="relative mx-1">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <img className="size-5" src={searchIcon} />
                </div>
                <input
                  type="text"
                  className="mt-1 block w-full px-10 py-2 border-b-2 border-gray-500 focus:outline-none focus:border-black text-sm"
                  placeholder="Search Books..."
                />
              </div>
              <a
                href="#"
                className="block py-2 px-3 font-roboto rounded text-gray-700 font-light underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              >
                Books
              </a>
              <a
                href="#"
                className="block py-2 px-3 font-roboto rounded text-gray-700 underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              >
                Categories
              </a>
              <a
                href="#"
                className="block py-2 px-3 font-roboto rounded text-gray-700 underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              >
                About
              </a>
              <a
                href="#"
                className="block py-2 px-3 font-roboto rounded text-gray-700 underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              >
                Cart
              </a>
              <a
                href="#"
                className="block py-2 px-3 font-roboto rounded text-gray-700 underline-effect hover:text-black hover:font-roboto hover:font-extrabold md:hover:bg-transparent md:hover:font-bold md:p-0"
              >
                Sign In
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
