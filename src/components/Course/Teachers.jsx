import { data } from "../../data";

export function Teachers() {
  const { database } = data();
  return (
    <div className="flex flex-col gap-2 dropdown">
      <h2 className="font-medium text-3xl">Professores</h2>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      {database.map(({ id, professor, professorFullName }) => (
        <>
          <p className="font-medium" key={id}>
            {professorFullName} ({professor})
          </p>
          <div className="h-px w-full bg-slate-200 max-w-96" />
        </>
      ))}
    </div>
  );
}
