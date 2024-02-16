import LessonCard from "../components/Card/LessonCard";

function Home() {
  return (
    <section className="p-6 w-full space-y-5 animation">
      <div className="flex flex-col font-medium gap-1">
        <span className="text-3xl">Hoje é: Segunda Feira</span>
        <span className="text-base text-slate-400">Dia: 15/02/2024</span>
      </div>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <div>
        <LessonCard />
      </div>
    </section>
  );
}

export default Home;
