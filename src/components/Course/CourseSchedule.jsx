import data from "../../data";
import MaterialCard from "../Card/MaterialCard";

function CourseSchedule() {
  const { database } = data();
  return (
    <div className="flex flex-col gap-3 dropdown">
      <h2 className="font-medium text-3xl">Grade do curso</h2>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      {database.map(({id, cadeira, descricao}) => (
        <MaterialCard key={id} nav={cadeira}>
          <span className="font-medium text-xl capitalize">{cadeira}</span>
          <p className="max-w-3xl text-sm text-slate-800">{descricao}</p>
        </MaterialCard>
      ))}
    </div>
  );
}

export default CourseSchedule;
