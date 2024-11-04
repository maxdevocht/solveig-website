import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu
    navigate(); // Navigate to the path
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="py-3 px-6 md:px-12 fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white shadow-md">
      <div className="size-full md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img
              src="./src/assets/logo.webp"
              alt="Solveig logo"
              width={150}
              height={150}
            />
          </NavLink>

          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={topLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={middleLineVariants}
            />
            <motion.span
              className="my-[3px] h-0.5 w-6 bg-black"
              animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
              variants={bottomLineVariants}
            />
          </button>
        </div>

        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          initial="close"
          exit="close"
          animate={isMobileMenuOpen ? "open" : "close"}
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] md:flex gap-6 md:items-center md:px-0 md:[--height-closed:auto] md:[--height-open:auto]"
        >
          <div className="first:pt-4 md:first:pt-0">
            <NavLink
              to="/"
              className="block py-3 md:py-2 text-sm tracking-widest hover:text-black/50"
              onClick={() => handleNavLinkClick("/")}
            >
              HOME
            </NavLink>
          </div>
          <div className="first:pt-4 md:first:pt-0">
            <NavLink
              to="/work"
              className="block py-3 md:py-2 text-sm tracking-widest hover:text-black/50"
              onClick={() => handleNavLinkClick("/work")}
            >
              WORK
            </NavLink>
          </div>
          <div className="first:pt-4 md:first:pt-0">
            <NavLink
              to="/contact"
              className="block py-3 md:py-2 text-sm tracking-widest hover:text-black/50"
              onClick={() => handleNavLinkClick("/contact")}
            >
              CONTACT
            </NavLink>
          </div>

          <div className="first:pt-4 md:first:pt-0 py-3 md:py-2">
            <Button>
              <hr className="w-5 border-1 border-black" />
              GET IN TOUCH
            </Button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
