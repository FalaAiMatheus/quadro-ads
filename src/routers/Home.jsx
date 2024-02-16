import { useEffect, useState } from "react";
import LessonCard from "../components/Card/LessonCard";

function Home() {
  const actualDateDay = new Date().getDay();
  const actualDate = new Date().toLocaleDateString("pt-br");
  const [actualDay, setActualDay] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    function setDay() {
      if (actualDateDay === 5) {
        setActualDay("Sexta feira");
        setDate(actualDate);
      }
    }
    setDay();
  }, [actualDateDay, actualDate]);

  const database = [
    {
      id: 2,
      cadeira: "Back end Frameworks",
      professor: "Chico",
      sala: 205,
      horario: ["18:30 - 20:10"],
    },
    {
      id: 6,
      cadeira: "Projeto de banco de dados",
      professor: "Gerhard",
      sala: 205,
      horario: ["20:20 - 22:00"],
    },
  ];

  return (
    <section className="p-6 w-full space-y-5 animation">
      <div className="flex flex-col font-medium gap-1">
        <span className="text-3xl">Hoje é: {actualDay}</span>
        <span className="text-base text-slate-400">Dia: {date}</span>
      </div>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <div className="flex flex-col gap-4">
        {database.map(({id, cadeira, professor, horario, sala}) => (
          <LessonCard key={id} cadeira={cadeira} professor={professor} horario={horario} sala={sala} />
        ))}
      </div>
    </section>
  );
}

export default Home;
