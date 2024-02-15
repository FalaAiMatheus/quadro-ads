import { Link } from "react-router-dom";
import Logo from "../assets/logo-quadro-ads.png";

function Header() {
  return (
    <header className="bg-sky-800 flex items-center justify-around p-4 font-poppins">
      <img className="max-w-96 w-full" src={Logo} alt="Logo Quadro ADS" />
      <nav>
        <ul className="flex items-center gap-9">
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
  );
}

export default Header;
