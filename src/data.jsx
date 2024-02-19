function data() {
  const database = [
    {
      id: 1,
      cadeira: "Redes de computadores",
      professor: "Nauber",
      sala: 205,
      horario: ["19:20 - 21:10"],
    },
    {
      id: 2,
      cadeira: "Back end Frameworks",
      professor: "Chico",
      sala: 205,
      horario: ["18:30 - 20:10"],
    },
    {
      id: 3,
      cadeira: "Desenvolvimento Mobile",
      professor: "Chico",
      sala: 205,
      horario: ["20:20 - 22:00"],
    },
    {
      id: 4,
      cadeira: "Organização de Computadores",
      professor: "Janete",
      sala: 205,
      horario: ["18:30 - 21:10"],
    },
    {
      id: 5,
      cadeira: "Projeto de banco de dados",
      professor: "Gerhard",
      sala: 205,
      horario: ["20:20 - 22:00", 'Sábado: 07:20 - 08:20'],
    },
  ];
  return database;
}

export default data;
