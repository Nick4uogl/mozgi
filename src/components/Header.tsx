import { useRef, useState } from "react";
import TitleIcon from "./icons/TitleIcon";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const svgRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: "Home", to: "/" },
    { name: "Where", to: "/about" },
    { name: "What", to: "/about" },
    { name: "Who", to: "/about" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const burgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  const lineVariants = {
    closed: { rotate: 0 },
    open: (i: number) => ({ rotate: i === 0 ? 45 : -45, y: i === 0 ? 4 : -4 }),
  };

  const menuVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2, type: "just" },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="relative flex h-24 items-center justify-between px-6">
      <LanguageSelector />
      <Link
        to="/"
        className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
      >
        <TitleIcon
          ref={svgRef}
          className="fill-animation h-[25px] w-[45px] md:h-[38px] md:w-[68px] lg:h-[46px] lg:w-[83px]"
        />
      </Link>

      <motion.div
        className="relative z-[51] md:hidden"
        variants={burgerVariants}
        animate={isMenuOpen ? "open" : "closed"}
        transition={{ type: "just" }}
      >
        <button
          className="flex flex-col items-center justify-center space-y-2"
          onClick={toggleMenu}
        >
          <motion.span
            className="h-[1px] w-[22px] origin-center bg-black"
            variants={lineVariants}
            custom={0}
          />
          <motion.span
            className="h-[1px] w-[22px] origin-center bg-black"
            variants={lineVariants}
            custom={1}
          />
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "just" }}
          >
            {links.map((link) => (
              <motion.div
                key={link.name}
                variants={menuItemVariants}
                transition={{ type: "just" }}
              >
                <Link
                  to={link.to}
                  className="mb-4 text-lg font-semibold text-black"
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
