import { useState } from "react";

function LessonCard() {
  const [cadeira, setCadeira] = useState("");
  const [professor, setProfessor] = useState("");
  const [sala, setSala] = useState("");
  const [horario, setHorario] = useState("");
  const [save, setSave] = useState(false);

  function handleSave() {
    setSave(!save);
  }

  return (
    <div className="card flex justify-between items-center w-full max-w-[631px] bg-slate-200 h-36 border border-slate-400 rounded-2xl p-2">
      <div className="block">
        <span className="font-medium text-3xl">Redes de Computadores</span>
        <ul className="text-xl">
          <li className="font-medium">
            Professor: <span className="font-normal">Nauber</span>
          </li>
          <li className="font-medium">
            Sala: <span className="font-normal">205</span>
          </li>
          <li className="font-medium">
            Horário: <span className="font-normal">19:20 - 21:10</span>
          </li>
        </ul>
      </div>
      <button onClick={handleSave}>
        <i
          className={`${
            save ? "bi bi-bookmark-fill" : "bi bi-bookmark"
          } text-4xl mr-5 text-blue-950`}
        ></i>
      </button>
    </div>
  );
}

export default LessonCard;
