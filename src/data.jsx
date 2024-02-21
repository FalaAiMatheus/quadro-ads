function data() {
  const database = [
    {
      id: 1,
      cadeira: "Redes de computadores",
      professor: "Nauber",
      professorFullName: "Francisco Nauber Bernardo Gois",
      sala: 205,
      horario: ["19:20 - 21:10"],
      descricao:
        "Envolve a interconexão de dispositivos computacionais para compartilhamento de informações, serviços e recursos. As redes podem ser conectadas através de cabos de rede, Wi-Fi ou uma combinação de ambos",
    },
    {
      id: 2,
      cadeira: "Back end Frameworks",
      professor: "Chico",
      professorFullName: "Francisco Wallison Sousa do Nascimento",
      sala: 205,
      horario: ["18:30 - 20:10"],
      descricao:
        "São estruturas de programação que contêm funcionalidades genéricas, ferramentas, APIs e outros componentes usados para construir o lado do servidor de um produto de software. Isso acelera o desenvolvimento, pois os programadores não precisam criar o back-end do zero",
    },
    {
      id: 3,
      cadeira: "Desenvolvimento Mobile",
      professor: "Chico",
      professorFullName: "Francisco Wallison Sousa do Nascimento",
      sala: 205,
      horario: ["20:20 - 22:00"],
      descricao:
        "Trata-se da criação de softwares direcionados para dispositivos móveis, como aplicativos de monitoramento cardíaco a bancos. O desenvolvimento mobile é um diferencial importante para a carreira no mercado de trabalho",
    },
    {
      id: 4,
      cadeira: "Organização de Computadores",
      professor: "Janete",
      professorFullName: "Janete Pereira do Amaral",
      sala: 205,
      horario: ["18:30 - 21:10"],
      descricao:
        "Refere-se às unidades operacionais do computador e à implementação de seus recursos de hardware. Inclui a compreensão dos módulos que compõem um sistema de computador, como eles estão interconectados e como processam e armazenam dados",
    },
    {
      id: 5,
      cadeira: "Projeto de banco de dados",
      professor: "Gerhard",
      professorFullName: "Gerhard Philippe de Saboia Oliveira",
      sala: 205,
      horario: ["20:20 - 22:00", "Sábado: 07:20 - 08:20"],
      descricao:
        "É o processo de desenvolvimento da estrutura de um banco de dados a partir das necessidades dos usuários. A estrutura deve satisfazer as necessidades de informação dos usuários de uma organização, tendo em vista um determinado conjunto de aplicações",
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
