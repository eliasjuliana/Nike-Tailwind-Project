import { useState, useEffect} from "react";
import { hamburger, light} from "../assets/icons/index.js";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/index.js";
import Button from "./Button.jsx";


const Nav = () => {

  const [theme, setTheme] = useState("light");

  useEffect (()=>{
    if(theme === "dark") {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])
  

  const handleChangeTheme = () =>{
    setTheme(prevTheme => prevTheme === "light"? "dark" : "light")
  }

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburguer"
            width={25}
            height={25}
          />
        </div>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button id="toggleDark" onClick={handleChangeTheme} label="DarkMode" iconURL={light} backgroundColor="bg-transparent" borderColor="border-slate-gray" textColor="text-slate-gray"
            />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
