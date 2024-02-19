import { useEffect, useState } from "react";
import LessonCard from "../components/Card/LessonCard";
import data from "../data";

function Home() {
  const actualDateDay = new Date().getDay();
  const actualDate = new Date().toLocaleDateString("pt-br");
  const [actualDay, setActualDay] = useState("");
  const datas = data();

  useEffect(() => {
    switch (actualDateDay) {
      case 0:
        setActualDay("Domingo");
        break;
      case 1:
        setActualDay("Segunda feira");
        break;
      case 2:
        setActualDay("Terça feira");
        break;
      case 3:
        setActualDay("Quarta Feira");
        break;
      case 4:
        setActualDay("Quinta feira");
        break;
      case 5:
        setActualDay("Sexta feira");
        break;
      case 6:
        setActualDay("Sábado");
        break;
      default:
        setActualDay(null);
    }
  }, [actualDateDay]);

  return (
    <section className="p-6 w-full space-y-5 animation">
      <div className="flex flex-col font-medium gap-1">
        <span className="text-3xl">Hoje é: {actualDay}</span>
        <span className="text-base text-slate-400">Dia: {actualDate}</span>
      </div>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <div className="flex flex-col gap-4">
        {datas.map(({ id, cadeira, professor, horario, sala }) => (
          <LessonCard
            key={id}
            cadeira={cadeira}
            professor={professor}
            horario={horario.join(", ")}
            sala={sala}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
