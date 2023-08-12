/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";
import Switcher from '../components/Switch UI/Switcher';
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  const { t, i18n } = useTranslation();

  // eslint-disable-next-line no-unused-vars
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
    
  return (
    <div>
      <header className="dark">
        <Switcher />
        <h1>Hello I'm Header</h1>
        <ul className='flex items-center gap-[0_20px]'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer className="footer">Hello I'm footer</footer>
    </div>
  );
}

export default Layout