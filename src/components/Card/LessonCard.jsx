import { useState } from "react";

function LessonCard({ cadeira, professor, sala, horario }) {
  const [save, setSave] = useState(false);

  function handleSave() {
    setSave(!save);
    // if (!save) window.localStorage.setItem("item", 1);
    // else window.localStorage.removeItem("item");
  }

  return (
    <div className="card flex justify-between items-center w-full max-w-[631px] bg-slate-200 transition border border-slate-400 rounded-2xl p-2 max-sm::flex max-sm:flex-col max-sm:gap-4">
      <div>
        <span className="font-medium text-2xl">{cadeira}</span>
        <ul className="text-xl">
          <li className="font-medium">
            Professor: <span className="font-normal">{professor}</span>
          </li>
          <li className="font-medium">
            Sala: <span className="font-normal">{sala}</span>
          </li>
          <li className="font-medium">
            Horário: <span className="font-normal">{horario}</span>
          </li>
        </ul>
      </div>
      <button
        className="flex items-center justify-center font-medium gap-2"
        onClick={handleSave}
      >
        <i
          className={`${
            save ? "bi bi-bookmark-fill" : "bi bi-bookmark"
          } text-4xl w-full text-blue-950`}
        ></i>
        <span>Salvar</span>
      </button>
    </div>
  );
}

export default LessonCard;
