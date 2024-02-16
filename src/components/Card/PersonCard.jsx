import Photo from "../../assets/Ellipse 1.png";

function PersonCard() {
  return (
    <div className="card flex gap-3">
      <img className="object-contain" src={Photo} alt="" />
      <div className="flex flex-col">
        <span className="font-medium text-3xl">Matheus França</span>
        <span className="font-medium">
          Idade: <span className="font-normal">18</span>
        </span>
        <p className="max-w-96 text-sm font-medium text-slate-700">
          Desenvolvedor Front End Júnior{" "}
          <a href="https://www.opovo.com.br/" target="_blank" rel="external" aria-label="Site do OPOVO" className="underline text-sky-600 hover:text-sky-900 transition">@opovoonline</a>,
          atualmente cursando o terceiro semestre de ADS (Análise e
          Desenvolvimento de Sistemas) na UNINASSAU.{" "}
        </p>
      </div>
    </div>
  );
}

export default PersonCard;
