import type { Personagem } from "../types/personagem"

import jill from "../assets/personagens/jill.png"
import leon from "../assets/personagens/leon.png"
import ada from "../assets/personagens/ada.png"
import nemesis from "../assets/personagens/nemies.png"
import wesker from "../assets/personagens/albert.png"
import chris from "../assets/personagens/chris.png"
import ethan from "../assets/personagens/ethan.png"
import claire from "../assets/personagens/claire.png"
import mrx from "../assets/personagens/mr-x.png"
import tyrant from "../assets/personagens/tyrant.png"
import spencer from "../assets/personagens/spence.png"
import ashley from "../assets/personagens/ashley.png"
import rebecca from "../assets/personagens/rebecca.png"
import sheva from "../assets/personagens/sheva.png"
import helena from "../assets/personagens/helena.png"
import carlos from "../assets/personagens/carlos.png"
import barry from "../assets/personagens/barry.png"
import rosemary from "../assets/personagens/rosemary.png"
import billy from "../assets/personagens/billy.png"

import verdugo from "../assets/personagens/verdugo.png"
import u3 from "../assets/personagens/u3.png"
import piers from "../assets/personagens/piers.png"
import sherry from "../assets/personagens/sherry.png"
import mia from "../assets/personagens/mia.png"
import jake from "../assets/personagens/jake.png"
import maeMiranda from "../assets/personagens/mae-miranda.png"
import birkin from "../assets/personagens/birkin.png"
import saddler from "../assets/personagens/saddler.png"
import salazar from "../assets/personagens/salazar.png"
import jackBaker from "../assets/personagens/jack-baker.png"
import dimitrescus from "../assets/personagens/dimitrescus.png"
import carla from "../assets/personagens/carla.png"
import alexia from "../assets/personagens/alexia.png"
import eveline from "../assets/personagens/eveline.png"
import clone from "../assets/personagens/clone.png"
import simmons from "../assets/personagens/derek.png"
import drVictor from "../assets/personagens/dr.png"
import mendez from "../assets/personagens/bitores.png"

export const personagens: Personagem[] = [

  {
    id: "RE-021-889-112",
    nome: "Leon S. Kennedy",
    tipo: "AGENTES",
    categoria: "PROTAGONISTA",
    status: "ATIVO",
    infeccao: 0,
    imagem: leon,
    forca: 75,
    agilidade: 88,
    resistencia: 78,
    inteligencia: 82,
    nivelAmeaca: "BAIXA",
    bowIdentificado: false,
    altura: "1.80m",
    peso: "70kg",
    anoNascimento: 1977,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil 2 (1998)",
    jogos: ["RE2", "RE4", "RE6", "RE9"],
    biografia:
      "Ex-policial de Raccoon City e atual agente federal dos Estados Unidos. Sobreviveu ao desastre biológico de Raccoon City durante seu primeiro dia de trabalho e tornou-se um dos principais especialistas em combate ao bioterrorismo.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 2",
        evento: "Sobrevive ao incidente de Raccoon City."
      },
      {
        ano: 2004,
        jogo: "Resident Evil 4",
        evento: "Resgata Ashley Graham na Espanha."
      },
      {
        ano: 2012,
        jogo: "Resident Evil 6",
        evento: "Enfrenta ataques globais do vírus-C."
      },
      {
        ano: 2026,
        jogo: "Resident Evil 9",
        evento: "Investiga uma nova ameaça biológica ligada a experimentos clandestinos."
      }
    ]
  },
  {
    id: "RE-333-444-777",
    nome: "Chris Redfield",
    tipo: "AGENTES",
    categoria: "PROTAGONISTA",
    status: "ATIVO",
    infeccao: 5,
    imagem: chris,
    forca: 98,
    agilidade: 70,
    resistencia: 95,
    inteligencia: 78,
    nivelAmeaca: "ALTA",
    bowIdentificado: false,
    altura: "1.85m",
    peso: "98kg",
    anoNascimento: 1973,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil (1996)",
    jogos: ["RE1", "RE5", "RE6", "4+"],
    biografia:
      "Ex-membro da S.T.A.R.S. e fundador da BSAA. Especialista em operações militares contra armas biológicas e um dos principais combatentes da Umbrella Corporation.",
    linhaDoTempo: [
       {
    ano: 1996,
    jogo: "Resident Evil",
    evento: "Sobrevive ao Incidente da Mansão Spencer."
  },
  {
    ano: 1998,
    jogo: "Code Veronica",
    evento: "Investiga o desaparecimento de Claire Redfield e enfrenta Alexia Ashford."
  },
  {
    ano: 2003,
    jogo: "Resident Evil Revelations",
    evento: "Participa de operações iniciais da BSAA contra ameaças biológicas."
  },
  {
    ano: 2009,
    jogo: "Resident Evil 5",
    evento: "Derrota Albert Wesker na África."
  },
  {
    ano: 2012,
    jogo: "Resident Evil 6",
    evento: "Combate surtos globais do vírus-C."
  },
  {
    ano: 2017,
    jogo: "Resident Evil 7",
    evento: "Aparece em operações da Blue Umbrella após o incidente Baker."
  },
  {
    ano: 2021,
    jogo: "Resident Evil Village",
    evento: "Participa da operação contra Mother Miranda."
  }
    ]
  },
  {
    id: "RE-020-000-001",
    nome: "Dr. Victor Gideon",
    tipo: "MUTANTES",
    categoria: "VILAO",
    status: "ATIVO",
    infeccao: 95,
    imagem: drVictor,
    forca: 90,
    agilidade: 80,
    resistencia: 95,
    inteligencia: 98,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "1.85m",
    peso: "82kg",
    anoNascimento: 1972,
    nacionalidade: "Desconhecida",
    primeiraAparicao: "Resident Evil 9",
    jogos: ["RE9"],
    biografia:
      "Cientista envolvido em experimentos biológicos avançados ligados a novas mutações derivadas do Megamiceto.",
    linhaDoTempo: [
      {
        ano: 2026,
        jogo: "Resident Evil 9",
        evento: "Lidera experimentos clandestinos envolvendo armas biológicas."
      }
    ]
  },
  {
    id: "RE-555-222-888",
    nome: "Ada Wong",
    tipo: "AGENTES",
    categoria: "PROTAGONISTA",
    status: "DESCONHECIDO",
    infeccao: 0,
    imagem: ada,
    forca: 70,
    agilidade: 92,
    resistencia: 65,
    inteligencia: 90,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.70m",
    peso: "54kg",
    anoNascimento: 1974,
    nacionalidade: "Desconhecida",
    primeiraAparicao: "Resident Evil 2 (1998)",
    jogos: ["RE2", "RE4", "RE6"],
    biografia:
      "Espiã misteriosa envolvida em operações secretas relacionadas a armas biológicas. Atua frequentemente de forma independente e possui forte ligação com Leon Kennedy.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 2",
        evento: "Infiltra-se em Raccoon City para recuperar amostras do vírus-G."
      },
      {
        ano: 2004,
        jogo: "Resident Evil 4",
        evento: "Participa da missão envolvendo Las Plagas."
      },
      {
        ano: 2012,
        jogo: "Resident Evil 6",
        evento: "Investiga os ataques bioterroristas globais."
      }
    ]
  },
  {
    id: "RE-444-888-222",
    nome: "Claire Redfield",
    tipo: "HUMANOS",
    categoria: "PROTAGONISTA",
    status: "ATIVO",
    infeccao: 0,
    imagem: claire,
    forca: 68,
    agilidade: 85,
    resistencia: 72,
    inteligencia: 80,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.69m",
    peso: "55kg",
    anoNascimento: 1979,
    nacionalidade: "Americana",
    primeiraAparicao: "Resident Evil 2 (1998)",
    jogos: ["RE2", "CODE VERONICA", "REVELATIONS 2"],
    biografia:
      "Irmã de Chris Redfield e integrante da organização TerraSave. Sobreviveu ao desastre de Raccoon City enquanto procurava seu irmão desaparecido.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 2",
        evento: "Escapa de Raccoon City ao lado de Sherry Birkin."
      },
      {
        ano: 2000,
        jogo: "Code Veronica",
        evento: "Enfrenta a família Ashford na Antártida."
      },
      {
        ano: 2015,
        jogo: "Resident Evil Revelations 2",
        evento: "Sobrevive à ilha controlada por Alex Wesker."
      }
    ]
  },
  {
    id: "RE-000-777-444",
    nome: "Oswell E. Spencer",
    tipo: "HUMANOS",
    categoria: "VILAO",
    status: "CRÍTICO",
    infeccao: 0,
    imagem: spencer,
    forca: 20,
    agilidade: 15,
    resistencia: 30,
    inteligencia: 100,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "1.78m",
    peso: "72kg",
    anoNascimento: 1914,
    nacionalidade: "Britânico",
    primeiraAparicao: "Resident Evil 5 (2009)",
    jogos: ["RE5", "RE9"],
    biografia:
      "Fundador da Umbrella Corporation e idealizador dos experimentos com vírus biológicos visando a evolução humana.",
    linhaDoTempo: [
      {
        ano: 1968,
        jogo: "Histórico Umbrella",
        evento: "Funda a Umbrella Corporation."
      },
      {
        ano: 2009,
        jogo: "Resident Evil 5",
        evento: "É localizado e executado por Albert Wesker."
      },
       {
    ano: 2026,
    jogo: "Resident Evil 9",
    evento: "Seus arquivos secretos e pesquisas voltam a ser utilizados em novos experimentos biológicos."
  }
    ]
  },
  {
    id: "RE-015-667-145",
    nome: "Mãe Miranda",
    tipo: "MUTANTES",
    categoria: "VILAO",
    status: "ATIVO",
    infeccao: 100,
    imagem: maeMiranda,
    forca: 88,
    agilidade: 95,
    resistencia: 90,
    inteligencia: 98,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "1.80m",
    peso: "65kg",
    anoNascimento: 1860,
    nacionalidade: "Romena",
    primeiraAparicao: "Resident Evil Village (2021)",
    jogos: ["RE VILLAGE"],
    biografia:
      "Líder do culto do vilarejo europeu e responsável pelos experimentos com o Megamiceto. Influenciou diretamente a criação da Umbrella Corporation.",
    linhaDoTempo: [
      {
        ano: 2021,
        jogo: "Resident Evil Village",
        evento: "Confronta Ethan Winters em busca do renascimento de sua filha Eva."
      }
    ]
  },
  {
    id: "RE-PROT-007",
    nome: "Ashley Graham",
    tipo: "HUMANOS",
    categoria: "ALIADO",
    status: "PROTEGIDO",
    infeccao: 0,
    imagem: ashley,
    forca: 30,
    agilidade: 40,
    resistencia: 45,
    inteligencia: 65,
    nivelAmeaca: "BAIXA",
    bowIdentificado: false,
    altura: "1.67m",
    peso: "52kg",
    anoNascimento: 1984,
    nacionalidade: "Americana",
    primeiraAparicao: "Resident Evil 4 (2005)",
    jogos: ["RE4"],
    biografia:
      "Filha do presidente dos Estados Unidos. Foi sequestrada pelo culto Los Illuminados durante os eventos envolvendo Las Plagas.",
    linhaDoTempo: [
      {
        ano: 2004,
        jogo: "Resident Evil 4",
        evento: "É resgatada por Leon Kennedy na Espanha."
      }
    ]
  },
  {
    id: "RE-016-882-300",
    nome: "Rosemary Winters",
    tipo: "MUTANTES",
    categoria: "PROTAGONISTA",
    status: "ATIVO",
    infeccao: 100,
    imagem: rosemary,
    forca: 75,
    agilidade: 85,
    resistencia: 95,
    inteligencia: 90,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "1.68m",
    peso: "52kg",
    anoNascimento: 2020,
    nacionalidade: "Americana",
    primeiraAparicao: "Resident Evil Village (2021)",
    jogos: ["RE VILLAGE"],
    biografia:
      "Filha de Ethan e Mia Winters. Possui habilidades especiais ligadas ao Megamiceto, sendo considerada uma das mutações mais poderosas já registradas.",
    linhaDoTempo: [
      {
        ano: 2021,
        jogo: "Resident Evil Village",
        evento: "É alvo dos experimentos de Mother Miranda."
      }
    ]
  },
  {
    id: "RE-777-321-909",
    nome: "Mia Winters",
    tipo: "HUMANOS",
    categoria: "PROTAGONISTA",
    status: "ATIVO",
    infeccao: 35,
    imagem: mia,
    forca: 55,
    agilidade: 60,
    resistencia: 78,
    inteligencia: 82,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.65m",
    peso: "54kg",
    anoNascimento: 1984,
    nacionalidade: "Americana",
    primeiraAparicao: "Resident Evil 7 (2017)",
    jogos: ["RE7", "RE VILLAGE"],
    biografia:
      "Ex-agente da organização criminosa The Connections. Tornou-se hospedeira do fungo mutamiceto após o incidente envolvendo Eveline.",
    linhaDoTempo: [
      {
        ano: 2017,
        jogo: "Resident Evil 7",
        evento: "Sobrevive ao incidente da família Baker."
      },
      {
        ano: 2021,
        jogo: "Resident Evil Village",
        evento: "É capturada durante os eventos envolvendo Mother Miranda."
      }
    ]
  },
  {
    id: "RE-888-555-333",
    nome: "Jake Muller",
    tipo: "HUMANOS",
    categoria: "ALIADO",
    status: "ATIVO",
    infeccao: 0,
    imagem: jake,
    forca: 88,
    agilidade: 86,
    resistencia: 90,
    inteligencia: 75,
    nivelAmeaca: "ALTA",
    bowIdentificado: false,
    altura: "1.90m",
    peso: "85kg",
    anoNascimento: 1992,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil 6 (2012)",
    jogos: ["RE6"],
    biografia:
      "Mercenário e filho de Albert Wesker. Possui anticorpos especiais em seu sangue capazes de combater armas biológicas avançadas.",
    linhaDoTempo: [
      {
        ano: 2012,
        jogo: "Resident Evil 6",
        evento: "Ajuda na criação da vacina contra o vírus-C ao lado de Sherry Birkin."
      }
    ]
  },
  {
    id: "RE-222-999-111",
    nome: "Sherry Birkin",
    tipo: "HUMANOS",
    categoria: "ALIADO",
    status: "ATIVO",
    infeccao: 20,
    imagem: sherry,
    forca: 62,
    agilidade: 80,
    resistencia: 85,
    inteligencia: 78,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.70m",
    peso: "56kg",
    anoNascimento: 1986,
    nacionalidade: "Americana",
    primeiraAparicao: "Resident Evil 2 (1998)",
    jogos: ["RE2", "RE6"],
    biografia:
      "Filha dos cientistas William e Annette Birkin. Sobreviveu ao desastre de Raccoon City após ser infectada pelo vírus-G.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 2",
        evento: "Sobrevive ao incidente de Raccoon City."
      },
      {
        ano: 2012,
        jogo: "Resident Evil 6",
        evento: "Trabalha para o governo dos EUA em operações anti-bioterrorismo."
      }
    ]
  },
  {
    id: "RE-555-444-777",
    nome: "Piers Nivans",
    tipo: "HUMANOS",
    categoria: "ALIADO",
    status: "DESCONHECIDO",
    infeccao: 70,
    imagem: piers,
    forca: 82,
    agilidade: 78,
    resistencia: 88,
    inteligencia: 84,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "1.80m",
    peso: "79kg",
    anoNascimento: 1989,
    nacionalidade: "Britânico",
    primeiraAparicao: "Resident Evil 6 (2012)",
    jogos: ["RE6"],
    biografia:
      "Atirador de elite da BSAA e parceiro de Chris Redfield durante os eventos do vírus-C.",
    linhaDoTempo: [
      {
        ano: 2012,
        jogo: "Resident Evil 6",
        evento: "Sacrifica-se para salvar Chris Redfield durante a missão na China."
      }
    ]
  },
  {
    id: "RE-777-111-999",
    nome: "Ethan Winters",
    tipo: "MUTANTES",
    categoria: "PROTAGONISTA",
    status: "CRÍTICO",
    infeccao: 65,
    imagem: ethan,
    forca: 72,
    agilidade: 65,
    resistencia: 88,
    inteligencia: 70,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "1.80m",
    peso: "75kg",
    anoNascimento: 1984,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil 7 (2017)",
    jogos: ["RE7", "RE VILLAGE"],
    biografia:
      "Civil envolvido em múltiplos incidentes biológicos após procurar sua esposa desaparecida. Tornou-se hospedeiro do fungo mutamiceto.",
    linhaDoTempo: [
      {
        ano: 2017,
        jogo: "Resident Evil 7",
        evento: "Sobrevive ao incidente da família Baker."
      },
      {
        ano: 2021,
        jogo: "Resident Evil Village",
        evento: "Enfrenta Mother Miranda para salvar sua filha Rosemary."
      }
    ]
  },
  {
    id: "RE-999-000-111",
    nome: "Albert Wesker",
    tipo: "MUTANTES",
    categoria: "VILAO",
    status: "CRÍTICO",
    infeccao: 85,
    imagem: wesker,
    forca: 95,
    agilidade: 95,
    resistencia: 90,
    inteligencia: 100,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "1.83m",
    peso: "84kg",
    anoNascimento: 1960,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil (1996)",
    jogos: ["RE1", "CODE VERONICA", "RE5"],
    biografia:
      "Ex-capitão da S.T.A.R.S e um dos principais responsáveis pelos experimentos biológicos da Umbrella Corporation.",
    linhaDoTempo: [
      {
        ano: 1996,
        jogo: "Resident Evil",
        evento: "Trai a equipe S.T.A.R.S durante o Incidente da Mansão."
      },
      {
        ano: 2000,
        jogo: "Code Veronica",
        evento: "Retorna com habilidades sobre-humanas."
      },
      {
        ano: 2009,
        jogo: "Resident Evil 5",
        evento: "É derrotado por Chris e Sheva em um vulcão."
      }
    ]
  },
  {
    id: "RE-VIL-003",
    nome: "Alexia Ashford",
    tipo: "MUTANTES",
    categoria: "VILAO",
    status: "ATIVO",
    infeccao: 100,
    imagem: alexia,
    forca: 85,
    agilidade: 80,
    resistencia: 95,
    inteligencia: 98,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "1.75m",
    peso: "58kg",
    anoNascimento: 1971,
    nacionalidade: "Britânica",
    primeiraAparicao: "Resident Evil Code: Veronica (2000)",
    jogos: ["CODE VERONICA"],
    biografia:
      "Prodígio genética da família Ashford e hospedeira do vírus-T Veronica.",
    linhaDoTempo: [
      {
        ano: 2000,
        jogo: "Code Veronica",
        evento: "Desperta após anos em criogenia e enfrenta Claire e Chris."
      }
    ]
  },
  {
    id: "RE-VIL-008",
    nome: "Eveline",
    tipo: "B.O.W",
    categoria: "VILAO",
    status: "ATIVO",
    infeccao: 100,
    imagem: eveline,
    forca: 40,
    agilidade: 50,
    resistencia: 85,
    inteligencia: 95,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "1.30m",
    peso: "30kg",
    anoNascimento: 2014,
    nacionalidade: "Criada em laboratório",
    primeiraAparicao: "Resident Evil 7 (2017)",
    jogos: ["RE7"],
    biografia:
      "Arma biológica criada pela organização The Connections utilizando o fungo mutamiceto.",
    linhaDoTempo: [
      {
        ano: 2017,
        jogo: "Resident Evil 7",
        evento: "Controla mentalmente a família Baker."
      }
    ]
  },
  {
    id: "RE-VIL-009",
    nome: "Carla Radames",
    tipo: "MUTANTES",
    categoria: "VILAO",
    status: "MUTAÇÃO",
    infeccao: 100,
    imagem: carla,
    forca: 78,
    agilidade: 88,
    resistencia: 97,
    inteligencia: 96,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "1.72m",
    peso: "56kg",
    anoNascimento: 1979,
    nacionalidade: "Chinesa",
    primeiraAparicao: "Resident Evil 6 (2012)",
    jogos: ["RE6"],
    biografia:
      "Pesquisadora responsável pelo desenvolvimento do vírus-C e cúmplice de Derek Simmons.",
    linhaDoTempo: [
      {
        ano: 2012,
        jogo: "Resident Evil 6",
        evento: "Transforma-se em uma criatura mutante durante os eventos na China."
      }
    ]
  },
  {
    id: "RE-VIL-007",
    nome: "Derek C. Simmons",
    tipo: "MUTANTES",
    categoria: "VILAO",
    status: "MUTAÇÃO",
    infeccao: 100,
    imagem: simmons,
    forca: 96,
    agilidade: 70,
    resistencia: 100,
    inteligencia: 95,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "1.82m",
    peso: "85kg",
    anoNascimento: 1959,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil 6 (2012)",
    jogos: ["RE6"],
    biografia:
      "Líder da organização secreta The Family e responsável pela disseminação do vírus-C durante os eventos globais de bioterrorismo.",
    linhaDoTempo: [
      {
        ano: 2012,
        jogo: "Resident Evil 6",
        evento: "Transforma-se em múltiplas formas mutantes após infecção pelo vírus-C."
      }
    ]
  },
  {
    id: "RE-016-554-321",
    nome: "William Birkin",
    tipo: "B.O.W",
    categoria: "MONSTRO",
    status: "MUTAÇÃO",
    infeccao: 100,
    imagem: birkin,
    forca: 99,
    agilidade: 75,
    resistencia: 100,
    inteligencia: 85,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "2.40m",
    peso: "210kg",
    anoNascimento: 1960,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil 2 (1998)",
    jogos: ["RE2"],
    biografia:
      "Cientista da Umbrella Corporation e criador do vírus-G. Infectou-se com sua própria criação durante o incidente de Raccoon City.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 2",
        evento: "Transforma-se em uma criatura mutante após injetar o vírus-G em si mesmo."
      }
    ]
  },
  {
    id: "RE-013-879-221",
    nome: "Verdugo",
    tipo: "INFECTADOS",
    categoria: "MONSTRO",
    status: "ATIVO",
    infeccao: 95,
    imagem: verdugo,
    forca: 92,
    agilidade: 85,
    resistencia: 98,
    inteligencia: 60,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "2.30m",
    peso: "180kg",
    anoNascimento: 1980,
    nacionalidade: "Desconhecida",
    primeiraAparicao: "Resident Evil 4 (2005)",
    jogos: ["RE4"],
    biografia:
      "Criatura leal a Ramon Salazar e uma das armas biológicas mais perigosas criadas a partir de Las Plagas.",
    linhaDoTempo: [
      {
        ano: 2004,
        jogo: "Resident Evil 4",
        evento: "Persegue Leon Kennedy nos laboratórios subterrâneos do castelo."
      }
    ]
  },
  {
    id: "RE-666-999-000",
    nome: "Nemesis",
    tipo: "B.O.W",
    categoria: "MONSTRO",
    status: "HOSTIL",
    infeccao: 100,
    imagem: nemesis,
    forca: 100,
    agilidade: 60,
    resistencia: 100,
    inteligencia: 40,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "2.20m",
    peso: "150kg",
    anoNascimento: 1998,
    nacionalidade: "Criado pela Umbrella",
    primeiraAparicao: "Resident Evil 3 (1999)",
    jogos: ["RE3"],
    biografia:
      "Tirano experimental da Umbrella Corporation programado para eliminar membros da S.T.A.R.S.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 3",
        evento: "Persegue Jill Valentine durante a destruição de Raccoon City."
      }
    ]
  },
  {
    id: "RE-888-333-555",
    nome: "Mr. X",
    tipo: "B.O.W",
    categoria: "MONSTRO",
    status: "HOSTIL",
    infeccao: 100,
    imagem: mrx,
    forca: 98,
    agilidade: 55,
    resistencia: 100,
    inteligencia: 35,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "2.20m",
    peso: "180kg",
    anoNascimento: 1998,
    nacionalidade: "Criado pela Umbrella",
    primeiraAparicao: "Resident Evil 2 (1998)",
    jogos: ["RE2"],
    biografia:
      "Modelo Tyrant T-103 enviado pela Umbrella para eliminar sobreviventes e recuperar amostras do vírus-G.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 2",
        evento: "Caça Leon e Claire dentro da delegacia de Raccoon City."
      }
    ]
  },
  {
    id: "RE-020-000-003",
    nome: "Lady Dimitrescu",
    tipo: "MUTANTES",
    categoria: "VILAO",
    status: "ATIVO",
    infeccao: 95,
    imagem: dimitrescus,
    forca: 92,
    agilidade: 70,
    resistencia: 95,
    inteligencia: 85,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "2.90m",
    peso: "220kg",
    anoNascimento: 1914,
    nacionalidade: "Romena",
    primeiraAparicao: "Resident Evil Village (2021)",
    jogos: ["RE VILLAGE"],
    biografia:
      "Nobre mutante do vilarejo europeu e uma das quatro líderes servindo Mother Miranda.",
    linhaDoTempo: [
      {
        ano: 2021,
        jogo: "Resident Evil Village",
        evento: "Enfrenta Ethan Winters em seu castelo."
      }
    ]
  },
  {
    id: "RE-111-555-333",
    nome: "Tyrant",
    tipo: "B.O.W",
    categoria: "MONSTRO",
    status: "HOSTIL",
    infeccao: 100,
    imagem: tyrant,
    forca: 97,
    agilidade: 58,
    resistencia: 100,
    inteligencia: 30,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "2.40m",
    peso: "190kg",
    anoNascimento: 1998,
    nacionalidade: "Criado pela Umbrella",
    primeiraAparicao: "Resident Evil (1996)",
    jogos: ["RE1"],
    biografia:
      "Arma biológica experimental da série Tyrant desenvolvida pela Umbrella Corporation para combate militar.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil",
        evento: "É liberado no laboratório da Mansão Spencer."
      }
    ]
  },
  {
    id: "RE-014-332-908",
    nome: "U-3",
    tipo: "B.O.W",
    categoria: "MONSTRO",
    status: "ATIVO",
    infeccao: 99,
    imagem: u3,
    forca: 95,
    agilidade: 70,
    resistencia: 97,
    inteligencia: 40,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "2.80m",
    peso: "220kg",
    anoNascimento: 2004,
    nacionalidade: "Criado por Los Illuminados",
    primeiraAparicao: "Resident Evil 4 (2005)",
    jogos: ["RE4"],
    biografia:
      "Criatura mutante criada através de experimentos com Las Plagas.",
    linhaDoTempo: [
      {
        ano: 2004,
        jogo: "Resident Evil 4",
        evento: "Ataca Leon Kennedy em instalações subterrâneas."
      }
    ]
  },
  {
    id: "RE-SUP-001",
    nome: "Rebecca Chambers",
    tipo: "AGENTES",
    categoria: "ALIADO",
    status: "ATIVO",
    infeccao: 0,
    imagem: rebecca,
    forca: 45,
    agilidade: 70,
    resistencia: 60,
    inteligencia: 95,
    nivelAmeaca: "BAIXA",
    bowIdentificado: false,
    altura: "1.60m",
    peso: "48kg",
    anoNascimento: 1980,
    nacionalidade: "Americana",
    primeiraAparicao: "Resident Evil 0 (2002)",
    jogos: ["RE0", "RE1"],
    biografia:
      "Médica e integrante da equipe Bravo da S.T.A.R.S. Especialista em suporte biológico e sobrevivência.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 0",
        evento: "Investiga o incidente no trem Ecliptic Express."
      },
      {
        ano: 1998,
        jogo: "Resident Evil",
        evento: "Sobrevive ao Incidente da Mansão Spencer."
      }
    ]
  },
  {
    id: "RE-SUP-002",
    nome: "Barry Burton",
    tipo: "AGENTES",
    categoria: "ALIADO",
    status: "ATIVO",
    infeccao: 0,
    imagem: barry,
    forca: 85,
    agilidade: 55,
    resistencia: 80,
    inteligencia: 75,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.86m",
    peso: "89kg",
    anoNascimento: 1960,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil (1996)",
    jogos: ["RE1", "RE3", "RE0"],
    biografia:
      "Especialista em armas pesadas da S.T.A.R.S e aliado próximo de Jill Valentine e Chris Redfield.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil",
        evento: "Ajuda os sobreviventes da Mansão Spencer."
      },
      {
        ano: 1998,
        jogo: "Resident Evil 3",
        evento: "Auxilia Jill durante a fuga de Raccoon City."
      }
    ]
  },
  {
    id: "RE-SUP-003",
    nome: "Carlos Oliveira",
    tipo: "AGENTES",
    categoria: "ALIADO",
    status: "ATIVO",
    infeccao: 0,
    imagem: carlos,
    forca: 82,
    agilidade: 78,
    resistencia: 80,
    inteligencia: 70,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.82m",
    peso: "83kg",
    anoNascimento: 1977,
    nacionalidade: "Sul-Americano",
    primeiraAparicao: "Resident Evil 3 (1999)",
    jogos: ["RE3"],
    biografia:
      "Mercenário da U.B.C.S enviado para conter o desastre biológico em Raccoon City.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 3",
        evento: "Ajuda Jill Valentine a escapar de Raccoon City."
      }
    ]
  },
  {
    id: "RE-SUP-004",
    nome: "Sheva Alomar",
    tipo: "AGENTES",
    categoria: "ALIADO",
    status: "ATIVO",
    infeccao: 0,
    imagem: sheva,
    forca: 78,
    agilidade: 90,
    resistencia: 75,
    inteligencia: 80,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.65m",
    peso: "52kg",
    anoNascimento: 1986,
    nacionalidade: "Africana",
    primeiraAparicao: "Resident Evil 5 (2009)",
    jogos: ["RE5"],
    biografia:
      "Agente da BSAA parceira de Chris Redfield durante a missão na África.",
    linhaDoTempo: [
      {
        ano: 2009,
        jogo: "Resident Evil 5",
        evento: "Participa da operação contra Albert Wesker."
      }
    ]
  },
  {
    id: "RE-017-334-221",
    nome: "Billy Coen",
    tipo: "HUMANOS",
    categoria: "ALIADO",
    status: "DESCONHECIDO",
    infeccao: 0,
    imagem: billy,
    forca: 90,
    agilidade: 78,
    resistencia: 88,
    inteligencia: 70,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.81m",
    peso: "80kg",
    anoNascimento: 1972,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil 0 (2002)",
    jogos: ["RE0"],
    biografia:
      "Ex-fuzileiro acusado injustamente de assassinato. Sobreviveu ao incidente envolvendo o trem Ecliptic Express ao lado de Rebecca Chambers.",
    linhaDoTempo: [
      {
        ano: 1998,
        jogo: "Resident Evil 0",
        evento: "Ajuda Rebecca Chambers durante o incidente do laboratório Umbrella."
      }
    ]
  },
  {
    id: "RE-020-000-002",
    nome: "Zeno",
    tipo: "B.O.W",
    categoria: "MONSTRO",
    status: "ATIVO",
    infeccao: 95,
    imagem: clone,
    forca: 92,
    agilidade: 85,
    resistencia: 98,
    inteligencia: 60,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "2.30m",
    peso: "180kg",
    anoNascimento: 2026,
    nacionalidade: "Criado em laboratório",
    primeiraAparicao: "Resident Evil 9",
    jogos: ["RE9"],
    biografia:
      "Criatura experimental desenvolvida através de engenharia genética e mutações biológicas extremas.",
    linhaDoTempo: [
      {
        ano: 2026,
        jogo: "Resident Evil 9",
        evento: "É liberado durante experimentos secretos."
      }
    ]
  },
  {
    id: "RE-SUP-005",
    nome: "Helena Harper",
    tipo: "AGENTES",
    categoria: "ALIADO",
    status: "ATIVO",
    infeccao: 0,
    imagem: helena,
    forca: 80,
    agilidade: 75,
    resistencia: 78,
    inteligencia: 82,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: false,
    altura: "1.75m",
    peso: "60kg",
    anoNascimento: 1983,
    nacionalidade: "Americana",
    primeiraAparicao: "Resident Evil 6 (2012)",
    jogos: ["RE6"],
    biografia:
      "Agente do Serviço Secreto dos Estados Unidos e parceira de Leon Kennedy durante os eventos do vírus-C.",
    linhaDoTempo: [
      {
        ano: 2012,
        jogo: "Resident Evil 6",
        evento: "Ajuda Leon a investigar o ataque bioterrorista nos Estados Unidos."
      }
    ]
  },
  {
    id: "RE-VIL-010",
    nome: "Bitores Méndez",
    tipo: "INFECTADOS",
    categoria: "VILAO",
    status: "MUTAÇÃO",
    infeccao: 95,
    imagem: mendez,
    forca: 97,
    agilidade: 55,
    resistencia: 100,
    inteligencia: 75,
    nivelAmeaca: "EXTREMA",
    bowIdentificado: true,
    altura: "2.10m",
    peso: "120kg",
    anoNascimento: 1950,
    nacionalidade: "Espanhol",
    primeiraAparicao: "Resident Evil 4 (2005)",
    jogos: ["RE4"],
    biografia:
      "Líder da vila controlada pelos Los Illuminados e hospedeiro avançado de Las Plagas.",
    linhaDoTempo: [
      {
        ano: 2004,
        jogo: "Resident Evil 4",
        evento: "Persegue Leon Kennedy durante sua missão na Espanha."
      }
    ]
  },
  {
    id: "RE-017-778-902",
    nome: "Osmund Saddler",
    tipo: "INFECTADOS",
    categoria: "VILAO",
    status: "ATIVO",
    infeccao: 93,
    imagem: saddler,
    forca: 85,
    agilidade: 60,
    resistencia: 88,
    inteligencia: 95,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "1.89m",
    peso: "82kg",
    anoNascimento: 1966,
    nacionalidade: "Espanhol",
    primeiraAparicao: "Resident Evil 4 (2005)",
    jogos: ["RE4"],
    biografia:
      "Líder do culto Los Illuminados e responsável pelos experimentos com Las Plagas.",
    linhaDoTempo: [
      {
        ano: 2004,
        jogo: "Resident Evil 4",
        evento: "Planeja controlar líderes mundiais através de Las Plagas."
      }
    ]
  },
  {
    id: "RE-018-119-443",
    nome: "Ramon Salazar",
    tipo: "INFECTADOS",
    categoria: "VILAO",
    status: "ATIVO",
    infeccao: 90,
    imagem: salazar,
    forca: 40,
    agilidade: 50,
    resistencia: 60,
    inteligencia: 92,
    nivelAmeaca: "MÉDIA",
    bowIdentificado: true,
    altura: "1.45m",
    peso: "35kg",
    anoNascimento: 1983,
    nacionalidade: "Espanhol",
    primeiraAparicao: "Resident Evil 4 (2005)",
    jogos: ["RE4"],
    biografia:
      "Nobre espanhol responsável por entregar o castelo da família Salazar aos Los Illuminados.",
    linhaDoTempo: [
      {
        ano: 2004,
        jogo: "Resident Evil 4",
        evento: "Auxilia Saddler durante os eventos envolvendo Ashley Graham."
      }
    ]
  },
  {
    id: "RE-019-884-210",
    nome: "Jack Baker",
    tipo: "INFECTADOS",
    categoria: "VILAO",
    status: "ATIVO",
    infeccao: 97,
    imagem: jackBaker,
    forca: 93,
    agilidade: 65,
    resistencia: 98,
    inteligencia: 70,
    nivelAmeaca: "ALTA",
    bowIdentificado: true,
    altura: "1.88m",
    peso: "95kg",
    anoNascimento: 1960,
    nacionalidade: "Americano",
    primeiraAparicao: "Resident Evil 7 (2017)",
    jogos: ["RE7"],
    biografia:
      "Patriarca da família Baker infectado pelo fungo mutamiceto após contato com Eveline.",
    linhaDoTempo: [
      {
        ano: 2017,
        jogo: "Resident Evil 7",
        evento: "Persegue Ethan Winters pela propriedade Baker."
      }
    ]
  },
]