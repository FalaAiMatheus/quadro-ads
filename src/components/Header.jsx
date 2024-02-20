import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo-quadro-ads.png";
import useMedia from "../hooks/useMedia";
import { useEffect, useState } from "react";
import styles from "./mobileMenu.module.css";

function Header() {
  const mobile = useMedia("(max-width: 868px)");
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileMenu} ${
            mobileMenu && styles.mobileBtnActive
          } bg-slate-400 rounded w-10 h-10 flex items-center justify-center border border-transparent transition cursor-pointer`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <header className="bg-sky-800 flex items-center justify-between p-4">
        <Link to="/">
          <img
            className="max-w-96 w-full max-md:max-w-56"
            src={Logo}
            alt="Logo Quadro ADS"
          />
        </Link>
        <nav
          className={`${mobile ? styles.mobileNav : ""} ${
            mobileMenu && styles.mobileNavActive
          }`}
        >
          <ul
            className={`${
              mobile ? "flex flex-col" : "flex items-center gap-9"
            } font-medium text-xl text-white`}
          >
            <li className="hover:bg-sky-900 transition p-3 rounded-[1.0313rem] border-transparent">
              <Link to="/">Horários</Link>
            </li>
            <li className="hover:bg-sky-900 transition p-3 rounded-[1.0313rem] border-transparent">
              <Link to="curso">Curso</Link>
            </li>
            <li className="hover:bg-sky-900 transition p-3 rounded-[1.0313rem] border-transparent">
              <Link to="sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
