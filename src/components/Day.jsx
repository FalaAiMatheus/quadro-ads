import data from "../data";
import LessonCard from "./Card/LessonCard";

function filtrarCadeira(id) {
  const { database } = data();
  return database.filter((item) => item.id === id);
}

function Day() {
  const diaAtual = new Date().getDay();

  switch (diaAtual) {
    case 0:
      //Domingo
      return <p className="text-2xl font-bold text-red-700">Sem aula hoje!</p>;
    case 1:
      //Segunda Feira
      return (
        <>
          <LessonCard
            key={filtrarCadeira(1).map((data) => data.id)}
            cadeira={filtrarCadeira(1).map((data) => data.cadeira)}
            professor={filtrarCadeira(1).map((data) => data.professor)}
            sala={filtrarCadeira(1).map((data) => data.sala)}
            horario={filtrarCadeira(1).map((data) => data.horario)}
          />
        </>
      );
    case 2:
      //Terça Feira
      return (
        <>
          <LessonCard
            key={filtrarCadeira(2).map((data) => data.id)}
            cadeira={filtrarCadeira(2).map((data) => data.cadeira)}
            professor={filtrarCadeira(2).map((data) => data.professor)}
            sala={filtrarCadeira(2).map((data) => data.sala)}
            horario={filtrarCadeira(2).map((data) => data.horario)}
          />
          <LessonCard
            key={filtrarCadeira(3).map((data) => data.id)}
            cadeira={filtrarCadeira(3).map((data) => data.cadeira)}
            professor={filtrarCadeira(3).map((data) => data.professor)}
            sala={filtrarCadeira(3).map((data) => data.sala)}
            horario={filtrarCadeira(3).map((data) => data.horario)}
          />
        </>
      );
    case 3:
      //Quarta Feira
      return (
        <LessonCard
          key={filtrarCadeira(4).map((data) => data.id)}
          cadeira={filtrarCadeira(4).map((data) => data.cadeira)}
          professor={filtrarCadeira(4).map((data) => data.professor)}
          sala={filtrarCadeira(4).map((data) => data.sala)}
          horario={filtrarCadeira(4).map((data) => data.horario)}
        />
      );
    case 4:
      //Quinta Feira
      return <p className="text-2xl font-bold text-red-700">Sem aula hoje!</p>;
    case 5:
      //Sexta Feira
      return (
        <>
          <LessonCard
            key={filtrarCadeira(2).map((data) => data.id)}
            cadeira={filtrarCadeira(2).map((data) => data.cadeira)}
            professor={filtrarCadeira(2).map((data) => data.professor)}
            sala={filtrarCadeira(2).map((data) => data.sala)}
            horario={filtrarCadeira(2).map((data) => data.horario)}
          />
          <LessonCard
            key={filtrarCadeira(5).map((data) => data.id)}
            cadeira={filtrarCadeira(5).map((data) => data.cadeira)}
            professor={filtrarCadeira(5).map((data) => data.professor)}
            sala={filtrarCadeira(5).map((data) => data.sala)}
            horario={filtrarCadeira(5).map((data) => data.horario[1])}
          />
        </>
      );
    case 6:
      //Sábado
      return <p className="text-2xl font-bold text-red-700">Sem aula hoje!</p>;
    default:
      return <div>Erro ao obter o dia da semana.</div>;
  }
}

export default Day;
