import { useEffect, useRef, useState } from "react";

import mapa from "../assets/mapa.png";
import raccoonImg from "../assets/raccoon.png";
import clickSound from "../audio/botoes.mp3"
import errorSound from "../audio/error.mp3"
import bgMusic from "../audio/bg-musica.mp3"

import Header from "../components/header";
import { useAudio } from "../components/audioContext";

const locais = [
  {
    id: 0,
    nome: "Ilha Rockfort",

    jogo: "Resident Evil CODE: Veronica",

    status: "RISCO EXTREMO",

    descricao:
      "Complexo militar da Umbrella utilizado para treinamento e experimentos biológicos secretos.",

    detalhes: [
      "Base militar da Umbrella",
      "Prisão de Claire Redfield",
      "Ataque viral em larga escala",
      "Ligação com a família Ashford",
    ],

    imagem: raccoonImg,

    x: "27%",
    y: "21%",
  },

  {
    id: 1,
    nome: "Mansão Spencer",

    jogo: "Resident Evil (1996)",

    status: "CONTAMINADO",

    descricao:
      "Local do primeiro grande incidente biológico envolvendo o T-Virus.",

    detalhes: [
      "Incidente Arklay",
      "Laboratório subterrâneo",
      "Equipe S.T.A.R.S enviada ao local",
      "Experimentos da Umbrella",
    ],

    imagem: raccoonImg,

    x: "22%",
    y: "42%",
  },

  {
    id: 2,
    nome: "Raccoon City",

    jogo: "Resident Evil 2 / Resident Evil 3",

    status: "PERDA TOTAL",

    descricao:
      "Cidade destruída após o vazamento do T-Virus e avanço incontrolável da infecção.",

    detalhes: [
      "Epicentro do T-Virus",
      "R.P.D dominado",
      "Ataque do Nemesis",
      "Destruição nuclear da cidade",
    ],

    imagem: raccoonImg,

    x: "47.2%",
    y: "49%",
  },

  {
    id: 3,
    nome: "Laboratório NEST",

    jogo: "Resident Evil 2",

    status: "RISCO BIOLÓGICO",

    descricao:
      "Centro avançado de pesquisas subterrâneo da Umbrella Corporation.",

    detalhes: [
      "Criação do G-Virus",
      "Pesquisas de William Birkin",
      "Sistema de autodestruição",
      "Infestação de Lickers",
    ],

    imagem: raccoonImg,

    x: "29%",
    y: "64%",
  },

  {
    id: 4,
    nome: "Arsenal Island",

    jogo: "Resident Evil CODE: Veronica",

    status: "ALERTA MÁXIMO",

    descricao:
      "Ilha utilizada pela Umbrella para operações militares e transporte biológico.",

    detalhes: [
      "Base de armas biológicas",
      "Movimentação de B.O.W.s",
      "Conexão com Rockfort",
      "Área militar restrita",
    ],

    imagem: raccoonImg,

    x: "47.5%",
    y: "16%",
  },

  {
    id: 5,
    nome: "Kijuju",

    jogo: "Resident Evil 5",

    status: "INFECÇÃO EM MASSA",

    descricao:
      "Região africana dominada pelo parasita Las Plagas e operações da Tricell.",

    detalhes: [
      "Parasita Las Plagas",
      "Majinis hostis",
      "Missão de Chris Redfield",
      "Experimentos biológicos ilegais",
    ],

    imagem: raccoonImg,

    x: "80%",
    y: "19%",
  },

  {
    id: 6,
    nome: "GAIA",

    jogo: "Resident Evil Revelations",

    status: "AMEAÇA GLOBAL",

    descricao:
      "Área ligada a atividades bioterroristas e pesquisas envolvendo o T-Abyss.",

    detalhes: [
      "Ataques biológicos",
      "Conspiração internacional",
      "Pesquisas marítimas",
      "Atividade da organização Veltro",
    ],

    imagem: raccoonImg,

    x: "68%",
    y: "40%",
  },

  {
    id: 7,
    nome: "Vila RE4",

    jogo: "Resident Evil 4",

    status: "HOSTIL",

    descricao:
      "Vilarejo dominado pelo culto Los Illuminados e infectado por Las Plagas.",

    detalhes: [
      "Culto religioso extremista",
      "Ganados infectados",
      "Sequestro de Ashley Graham",
      "Presença de Saddler",
    ],

    imagem: raccoonImg,

    x: "67%",
    y: "58%",
  },

  {
    id: 8,
    nome: "Harvardville",

    jogo: "Resident Evil Degeneration",

    status: "SURTO VIRAL",

    descricao:
      "Cidade afetada por bioterrorismo envolvendo variantes do T-Virus.",

    detalhes: [
      "Ataque em aeroporto",
      "Participação de Leon Kennedy",
      "Novo vazamento viral",
      "Operação de contenção",
    ],

    imagem: raccoonImg,

    x: "44%",
    y: "70%",
  },

  {
    id: 9,
    nome: "Antártica U-8",

    jogo: "Resident Evil CODE: Veronica",

    status: "MUTAÇÃO BIOLÓGICA",

    descricao:
      "Base secreta da Umbrella localizada na Antártica utilizada para pesquisas avançadas.",

    detalhes: [
      "Experimentos genéticos",
      "Base da família Ashford",
      "Vírus T-Veronica",
      "Laboratórios criogênicos",
    ],

    imagem: raccoonImg,

    x: "52%",
    y: "90%",
  },
];

export default function Mapas() {
  const [selecionado, setSelecionado] = useState<
    null | (typeof locais)[0]
  >(null);
  const [abrirArquivo, setAbrirArquivo] = useState(false);
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const errorRef = useRef<HTMLAudioElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { soundEnabled } = useAudio()

  useEffect(() => {
    clickRef.current = new Audio(clickSound);
    errorRef.current = new Audio(errorSound)

    if (clickRef.current) clickRef.current.volume = 0.9;
    if (errorRef.current) errorRef.current.volume = 0.9
  }, []);

  const playClick = () => {
    if (!soundEnabled || !clickRef.current) return;

    clickRef.current.currentTime = 0;
    clickRef.current.play();
  };

  const playError = () => {
    if (!soundEnabled || !errorRef.current) return;

    errorRef.current.currentTime = 0;
    errorRef.current.play();
  };

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    audio.volume = 0.2;

    if (soundEnabled) {
      audio.muted = false;
      audio.play().catch(() => { });
    } else {
      audio.muted = true;
    }
  }, [soundEnabled]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      <img
        src={mapa}
        className="
        mt-2
        absolute inset-0
        w-full h-full
        object-fill
        opacity-80
      "
      />

      <audio
        ref={audioRef}
        src={bgMusic}
        loop
        autoPlay
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {locais.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            playClick();
            setSelecionado(item);
            setAbrirArquivo(false);
          }}
          className={`
    absolute z-40

    w-10 h-10
    cursor-pointer

    flex items-center justify-center

    rounded-full
    border border-red-500
    bg-red-600/20

    text-white
    text-sm
    font-bold

    shadow-[0_0_35px_red]
    backdrop-blur-sm

    transition-all duration-300

    hover:scale-110

    ${selecionado?.id === item.id
              ? "scale-125 animate-pulse"
              : "animate-pulse"
            }
  `}
          style={{
            left: item.x,
            top: item.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="leading-none">
            {item.id}
          </span>
        </button>
      ))}

      {selecionado && (
        <div
          className="
          absolute
          left-[22.4%]
          bottom-8
          -translate-x-1/2
          z-40
          w-[660px]
          h-[300px]
          bg-black/80
          backdrop-blur-md
          border border-red-900
          flex
          overflow-hidden
          shadow-[0_0_30px_rgba(255,0,0,0.3)]
        "
        >

          <div className="w-[45%] h-full">
            <img
              src={selecionado.imagem}
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="
            flex-1
            p-2
            text-white
            relative
            overflow-y-auto
          "
          >

            <button
              onClick={() => {
                playClick();
                setSelecionado(null);
                setAbrirArquivo(false);
              }}
              className="
              absolute top-1 right-4
              cursor-pointer
              text-gray-400
              hover:text-red-500
              text-2xl
            "
            >
              ×
            </button>

            <p className="text-red-500 tracking-[0.3rem] text-sm">
              LOCALIDADE #{selecionado.id}
            </p>

            <h1 className="text-3xl mt-2 font-bold">
              {selecionado.nome}
            </h1>

            <p className="mt-2 text-red-400 tracking-widest">
              {selecionado.status}
            </p>

            <div className="w-full h-[1px] bg-red-900 my-2" />

            <p className="text-gray-300 leading-relaxed">
              {selecionado.descricao}
            </p>

            <button
              onClick={() => {
                playClick();
                setAbrirArquivo(!abrirArquivo)
              }
              }
              className="
              mt-4
              w-full
              cursor-pointer
              border border-red-900
              bg-red-950/20
              hover:bg-red-900/30
              transition-all duration-300
              px-4 py-3
              flex items-center justify-between
            "
            >
              <div className="text-left">

                <p
                  className="
                  text-gray-500
                  text-xs
                  tracking-[0.2rem]
                  uppercase
                "
                >
                  Arquivo Relacionado
                </p>

                <p className="text-red-400 mt-1">
                  {selecionado.jogo}
                </p>
              </div>

              <span className="text-red-500 text-2xl">
                ›
              </span>
            </button>

          </div>
        </div>
      )}

      {selecionado && abrirArquivo && (
        <div
          className="
          absolute
          right-6
          top-[55.3%]
          -translate-y-1/2
          z-50
          w-[420px]
          h-[80vh]
          bg-black/95
          backdrop-blur-md
          border border-red-900
          p-6
          overflow-y-auto
          shadow-[0_0_40px_rgba(255,0,0,0.35)]
          animate-in
          slide-in-from-right
          duration-300
        "
        >

          <button
            onClick={() => {
              playClick();
              setAbrirArquivo(false)
            }}
            className="
            absolute
            top-4
            right-5
           cursor-pointer
            text-2xl
            text-gray-500

            hover:text-red-500
          "
          >
            ×
          </button>

          <p className="text-red-500 tracking-[0.3rem] text-sm">
            ARQUIVO CLASSIFICADO
          </p>

          <h1 className="text-3xl text-white mt-3 font-bold">
            {selecionado.nome}
          </h1>

          <p className="text-red-400 mt-2 tracking-widest">
            {selecionado.jogo}
          </p>

          <div className="w-full h-[1px] bg-red-900 my-5" />

          <p className="text-gray-300 leading-relaxed">
            {selecionado.descricao}
          </p>

          <div className="mt-6 flex flex-col gap-3">

            {selecionado.detalhes.map((item, index) => (
              <div
                key={index}
                  onClick={playError}
                className="
                border border-red-900
                bg-red-950/20
                cursor-pointer
                p-4
                text-gray-300
                text-sm
                tracking-wide

                hover:bg-red-900/20
                transition
              "
              >
                ▸ {item}
              </div>
            ))}

          </div>

        </div>
      )}

      <div
        className="
        absolute inset-0
        pointer-events-none
        opacity-20
        bg-[repeating-linear-gradient(
          to_bottom,
          transparent_0px,
          transparent_2px,
          rgba(255,0,0,0.15)_3px
        )]
      "
      />

    </div>
  );
}