import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from '../assets/logo.png'
import { motion } from "framer-motion";
import { fromUp } from "../utils/motion";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-4 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Kartik  Kumar&nbsp; | &nbsp;
            <span className='sm:block hidden hover:text-[#00e187] transition-colors duration-300'>Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                ${active === nav.title ? "text-white" : "text-white"} 
                border-b-2 border-[rgba(0,0,0,0)]
                hover:text-[#00e187] text-[18px] font-medium cursor-pointer transition ease-in-out duration-300 rounded px-1
                hover:border-b-[#00e187]
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />



          <motion.div
            variants={fromUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className={`${!toggle
              ? 'right-[-600px] transition-all ease-in-out duration-300'
              : 'flex transition-all ease-in-out duration-300'
              } p-6 animated-gradient border-[#444444] border-[1px] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl w-[90%]`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
