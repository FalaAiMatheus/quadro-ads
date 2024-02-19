import data from "../../data";
import MaterialCard from "../Card/MaterialCard";

function CourseSchedule() {
  const { database } = data();
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-medium text-3xl">Grade do curso</h2>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      {database.map(({id, cadeira}) => (
        <MaterialCard key={id}>
          <span className="font-medium text-xl">{cadeira}</span>
        </MaterialCard>
      ))}
    </div>
  );
}

export default CourseSchedule;
