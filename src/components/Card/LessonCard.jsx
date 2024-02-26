function LessonCard({ cadeira, professor, sala, horario }) {
  return (
    <div className="card flex justify-between items-center w-full max-w-[631px] bg-slate-200 transition border border-slate-400 rounded-2xl p-2 max-sm::flex max-sm:flex-col max-sm:gap-4">
      <div>
        <span className="font-medium text-2xl capitalize">{cadeira}</span>
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
    </div>
  );
}

export default LessonCard;
