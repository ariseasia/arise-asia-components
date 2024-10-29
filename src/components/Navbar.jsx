import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import logoSrc from "../assets/logo.svg";

const Navbar = ({ className, sections, lngs }) => {
  const [isTranslationMenuOpen, setIsTranslationMenuOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const translationMenuRef = useRef(null);
  const hamburgerMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !translationMenuRef.current?.contains(event.target) &&
        !hamburgerMenuRef.current?.contains(event.target)
      ) {
        setIsTranslationMenuOpen(false);
        setIsHamburgerMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [translationMenuRef, hamburgerMenuRef]);

  return (
    <nav className={className}>
      <div className="flex gap-x-4 text-white font-heading">
        <div className="container flex flex-1 justify-between items-center px-6 rounded-full shadow-2xl bg-black/75">
          <div className="my-3 ml-12 sm:ml-16">
            <img
              alt="Arise logo"
              className="absolute -translate-x-16 sm:-translate-x-20 -translate-y-2/5 size-16 sm:size-20"
              src={logoSrc}
            />
            <p className="font-bold text-orange-500 uppercase sm:text-xl">
              Arise
            </p>
          </div>
          <div className="hidden gap-x-10 text-sm lg:flex">
            {sections.map(({ title, clickHandler }) => (
              <button key={title} onClick={clickHandler}>
                <div className="relative ml-auto w-fit group">
                  <p>{title}</p>
                  <span className="hidden absolute w-full h-0.5 bg-gradient-to-r from-yellow-500 to-red-500 group-hover:block" />
                </div>
              </button>
            ))}
          </div>
          <div className="flex relative lg:hidden" ref={hamburgerMenuRef}>
            <button
              onClick={() => {
                setIsTranslationMenuOpen(false);
                setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
              }}
            >
              <GiHamburgerMenu size={24} />
            </button>
            {isHamburgerMenuOpen && (
              <div className="absolute -right-6 top-14 p-2 rounded-xl shadow-2xl bg-black/75">
                <ul className="w-fit">
                  {sections.map(({ title, clickHandler }) => (
                    <li
                      className="flex gap-x-2 items-center py-1 px-2 text-sm rounded-lg min-w-32 hover:bg-gray-300/25"
                      key={title}
                      onClick={clickHandler}
                    >
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <a
            className="hidden py-1 px-4 text-xs text-black bg-white rounded-full lg:block hover:bg-gray-100"
            href="https://ariseasia.org"
            rel="noreferrer noopener"
            target="_blank"
          >
            Check Out Arise Asia
          </a>
        </div>
        {lngs && (
          <div className="flex relative" ref={translationMenuRef}>
            <button
              className="p-4 rounded-full shadow-2xl bg-black/75"
              onClick={() => {
                setIsTranslationMenuOpen(!isTranslationMenuOpen);
                setIsHamburgerMenuOpen(false);
              }}
            >
              <BsGlobeAsiaAustralia size={24} />
            </button>
            {isTranslationMenuOpen && (
              <div className="absolute right-0 top-16 p-2 rounded-xl shadow-2xl bg-black/75">
                <ul className="w-fit">
                  {lngs.map(({ FlagIcon, title, clickHandler }) => (
                    <li
                      className="flex gap-x-2 items-center py-1 px-2 text-sm rounded-lg hover:bg-gray-300/25"
                      key={title}
                      onClick={clickHandler}
                    >
                      <FlagIcon className="h-4" />
                      <p>{title}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      clickHandler: PropTypes.func.isRequired,
    }),
  ).isRequired,
  lngs: PropTypes.arrayOf(
    PropTypes.shape({
      FlagIcon: PropTypes.func.isRequired,
      title: PropTypes.string.isRequired,
      clickHandler: PropTypes.func.isRequired,
    }),
  ),
};

export default Navbar;
