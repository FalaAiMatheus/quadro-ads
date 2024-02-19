import PersonCard from "../components/Card/PersonCard";
import data from "../data";

function Sobre() {
  const { teamData } = data();
  return (
    <section className="p-6 w-full space-y-5 animation">
      <h2 className="font-medium text-3xl">Sobre</h2>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <p
        className="max-w-[816px] text-justify text-slate-700 text-base font-medium"
        aria-label="Um pouco sobre o projeto"
      >
        Esse é um projeto que visa melhorar a acessibilidade ao quadro de
        horários do curso de ADS(Análise e Desenvolvimento de Sistemas) da
        UniNassau, campus Doroteias. Este site, construído com React e Tailwind
        CSS, oferece uma interface amigável e intuitiva para os alunos
        consultarem seus horários de aula de maneira eficiente. Com recursos
        como visualização de horários, filtros por dia e disciplina,
        responsividade e acessibilidade, este projeto exemplifica como a
        tecnologia pode ser usada para melhorar a experiência educacional e
        tornar as informações mais acessíveis para todos.
      </p>
      <h2 className="font-medium text-3xl">Equipe</h2>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <div className="flex flex-wrap gap-6">
        {teamData.map((data) => (
          <PersonCard
            key={data.id}
            name={data.name}
            photo={data.photo}
            desc={data.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default Sobre;
