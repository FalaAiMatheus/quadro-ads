import { ActivityCard } from "../../components/Card/ActivityCard";
import data from "../../data";

export function Activity() {
  const { activities } = data();
  return (
    <section className="p-6 w-full space-y-3 animation">
      <span className="text-3xl font-medium">Atividades</span>
      <div className="h-px bg-slate-200 rounded-sm max-w-[765px]" />
      <div className="space-y-3">
        {activities
          ? "Não tem atividades"
          : activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                cadeira={activity.cadeira}
                atividade={activity.atividade}
                descricao={activity.descricao}
                dataInicial={activity.dataInicial}
                dataVencimento={activity.dataVencimento}
                plataforma={activity.plataforma}
              />
            ))}
      </div>
    </section>
  );
}
