import { useState } from "react";
import { useDay } from "../hooks/useDay";
import { Day } from "../components/Day";

export function Home() {
  const actualDateDay = new Date().getDay();
  const actualDate = new Date().toLocaleDateString("pt-br");
  const [actualDay, setActualDay] = useState("");
  const day = useDay({ actualDateDay, setActualDay });

  return (
    <section className="p-6 w-full space-y-5 animation">
      <div className="flex flex-col font-medium gap-1">
        <span className="text-3xl">Hoje é: {actualDay}</span>
        <span className="text-base text-slate-800">Dia: {actualDate}</span>
      </div>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <div className="flex flex-col gap-4">
        <Day />
      </div>
    </section>
  );
}
