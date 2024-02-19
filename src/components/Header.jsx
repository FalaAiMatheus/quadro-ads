import { Link } from "react-router-dom";
import Logo from "../assets/logo-quadro-ads.png";
import useMedia from "../hooks/useMedia";
import { useState } from "react";
import styles from "./mobileMenu.module.css";

function Header() {
  const mobile = useMedia("(max-width: 868px)");
  const [mobileMenu, setMobileMenu] = useState(false);
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
        <img className="max-w-96 w-full" src={Logo} alt="Logo Quadro ADS" />
        <nav
          className={`${mobile ? styles.mobileNav : ""} ${
            mobileMenu && styles.mobileNavActive
          }`}
        >
          <ul
            className={`${
              mobile ? "flex flex-col" : "flex items-center gap-9"
            }`}
          >
            <Link
              className="font-medium text-xl text-white p-3 rounded-[1.0313rem] border-transparent hover:bg-sky-900 transition"
              to="/"
            >
              Horários
            </Link>
            <Link
              className="font-medium text-xl text-white p-3 rounded-[1.0313rem] border-transparent hover:bg-sky-900 transition"
              to="curso"
            >
              Curso
            </Link>
            <Link
              className="font-medium text-xl text-white p-3 rounded-[1.0313rem] border-transparent hover:bg-sky-900 transition"
              to="sobre"
            >
              Sobre
            </Link>
            <Link
              className="font-medium text-xl text-white p-3 rounded-[1.0313rem] border-transparent hover:bg-sky-900 transition"
              to="salvos"
            >
              Salvos
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
