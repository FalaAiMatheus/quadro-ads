import { Link } from "react-router-dom";

export function ActivityCard({
  cadeira,
  descricao,
  atividade,
  dataInicial,
  dataVencimento,
  plataforma,
  ...props
}) {
  return (
    <div
      className="card flex flex-col items-start w-full max-w-[631px] bg-slate-200 transition border border-slate-400 rounded-2xl gap-2 p-2 max-sm::flex max-sm:flex-col max-sm:gap-4"
      {...props}
    >
      <strong className="text-2xl capitalize">Cadeira: {cadeira}</strong>
      <span className="text-base font-semibold">
        Atividade: <span className="font-normal">{atividade}</span>
      </span>
      <span className="text-base font-semibold">
        Descrição: <span className="font-normal">{descricao}</span>
      </span>
      <div className="flex flex-wrap gap-4">
        <span className="text-base font-semibold">
          Data inicial: <span className="font-normal">{dataInicial}</span>
        </span>
        <span className="text-base font-semibold">
          Data vencimento: <span className="font-normal">{dataVencimento}</span>
        </span>
      </div>
      <Link
        to="https://login.microsoftonline.com/common/oauth2/authorize?response_type=id_token&client_id=cc15fd57-2c6c-4117-a88c-83b1d56b4bbe&redirect_uri=https%3A%2F%2Fteams.microsoft.com%2Fgo&domain_hint=sempre&sso_reload=true"
        className="text-base font-semibold bg-indigo-700 p-2 rounded-lg border text-white hover:outline-none focus:outline-none hover:bg-indigo-800 focus:border-indigo-950 transition duration-200"
      >
        Plataforma: <span className="font-normal">{plataforma}</span>
      </Link>
    </div>
  );
}
