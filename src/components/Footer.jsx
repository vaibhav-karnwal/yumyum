import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <footer className="fixed bottom-0 w-full py-8 overflow-hidden bg-white justify-self-[anchor-center] w-[-webkit-fill-available]">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between -m-8 mx-2">
          <div className="py-8 flex lg:flex-row flex-row-reverse">
            <div className="w-auto">
              <a href="/yumyum/">
                <div className="inline-flex items-center">
                  <span className="ml-4 text-lg font-bold">
                    Yum <span className="text-yellow">Yum</span>
                  </span>
                </div>
              </a>
            </div>

            {/* Toggle Button for Mobile */}
            <div className="lg:hidden content-center">
              <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer" />
            </div>

            {/* Footer Links */}
            <nav
              className={`mt-4 lg:ml-8 items-center lg:mt-0 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 ${
                isMenuOpen ? "block" : "hidden lg:flex"
              }`}
            >
              <Link
                href="#"
                className="font-medium text-gray-600 hover:text-gray-700"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-medium text-gray-600 hover:text-gray-700"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="font-medium text-gray-600 hover:text-gray-700"
              >
                Return Policy
              </Link>
              <Link
                href="#"
                className="font-medium text-gray-600 hover:text-gray-700"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          {/* Social Media Icons */}
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <a href="#" className="hover:text-gray-400">
                  <FaFacebookF />
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#" className="hover:text-gray-400">
                  <FaTwitter />
                </a>
              </div>{" "}
              <div className="w-auto p-1.5">
                <a href="#" className="hover:text-gray-400">
                  <FaInstagram />
                </a>
              </div>{" "}
              <div className="w-auto p-1.5">
                <a href="#" className="hover:text-gray-400">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
