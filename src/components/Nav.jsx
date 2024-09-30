import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="padding-x py-8  z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red hover:duration-300 hover:text-xl"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 bg-white transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-y-0' : 'translate-y-full'
        } lg:hidden flex flex-col items-center justify-center z-40`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={toggleMenu}
        >
          ✕
        </button>

        {/* Dropdown Navigation */}
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-2xl text-slate-gray hover:text-coral-red transition-colors duration-300"
                onClick={toggleMenu} // Close menu on item click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
