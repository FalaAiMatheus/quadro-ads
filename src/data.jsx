function data() {
  const database = [
    {
      id: 1,
      cadeira: "Redes de computadores",
      professor: "Nauber",
      professorFullName: 'Francisco Nauber Bernardo Gois',
      sala: 205,
      horario: ["19:20 - 21:10"],
    },
    {
      id: 2,
      cadeira: "Back end Frameworks",
      professor: "Chico",
      professorFullName: 'Francisco Wallison Sousa do Nascimento',
      sala: 205,
      horario: ["18:30 - 20:10"],
    },
    {
      id: 3,
      cadeira: "Desenvolvimento Mobile",
      professor: "Chico",
      professorFullName: 'Francisco Wallison Sousa do Nascimento',
      sala: 205,
      horario: ["20:20 - 22:00"],
    },
    {
      id: 4,
      cadeira: "Organização de Computadores",
      professor: "Janete",
      professorFullName: 'Janete Pereira do Amaral',
      sala: 205,
      horario: ["18:30 - 21:10"],
    },
    {
      id: 5,
      cadeira: "Projeto de banco de dados",
      professor: "Gerhard",
      professorFullName: 'Gerhard Philippe de Saboia Oliveira',
      sala: 205,
      horario: ["20:20 - 22:00", "Sábado: 07:20 - 08:20"],
    },
  ];
  const teamData = [
    {
      id: 1,
      name: "Matheus França",
      desc: "Desenvolvedor Front End Júnior @opovoonline, atualmente cursando o terceiro semestre de ADS (Análise e Desenvolvimento de Sistemas) na UNINASSAU.",
    },
    {
      id: 2,
      name: "João Pedro",
      desc: "Analista de dados, atualmente cursando o terceiro semestre de ADS (Análise e Desenvolvimento de Sistemas) na UNINASSAU.",
    },
    {
      id: 3,
      name: "Mateus Micael",
      desc: "Sou Mateus Micael, tenho 20 anos e sou entusiasta de qualquer forma de arte, atualmente procuro uma forma de alinhar essa minha paixão a tecnologia para levar isso como uma forma de ser bem sucedido no mercado digital.",
    },
  ];
  return {
    database,
    teamData,
  };
}

export default data;
