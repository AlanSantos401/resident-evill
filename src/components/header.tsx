import logo from "../assets/logo-umbrella.png";
import Fone from "../assets/svg/fone.svg";
import SemSom from "../assets/svg/fone-x.svg";
import Configuracao from "../assets/svg/configurar.svg";
import { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAudio } from "./audioContext";

import clickSound from "../audio/botoes.mp3"

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { soundEnabled, setSoundEnabled } = useAudio()

  const clickRef = useRef<HTMLAudioElement | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const [style, setStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const links = [
    { nome: "INICIO", rota: "/" },
    { nome: "LINHA DO TEMPO", rota: "/linha-do-tempo" },
    { nome: "PERSONAGENS", rota: "/personagens" },
    { nome: "MAPAS", rota: "/mapas" },
    { nome: "ORGANIZAÇÃO", rota: "/organizacao" },
    { nome: "ARQUIVOS", rota: "/arquivos" },
  ];


  const ativoIndex = Math.max(
    links.findIndex((item) => item.rota === location.pathname),
    0
  );

  useEffect(() => {
    const el = refs.current[ativoIndex];

    if (el) {
      setStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [ativoIndex]);

  useEffect(() => {
    clickRef.current = new Audio(clickSound)

    if (clickRef.current) clickRef.current.volume = 0.8
  }, [])

  const playClick = () => {
    if (!soundEnabled || !clickRef.current) return;

    clickRef.current.currentTime = 0;
    clickRef.current.play();
  };


  return (
    <div className="w-full flex justify-between items-center px-2 py-3 lg:px-6 lg:py-4">

      <img
        className="h-10 lg:h-28 object-contain"
        src={logo}
        alt="logo-umbrella"
      />

      <div className="relative flex gap-4 text-white text-sm mb-6 lg:gap-8">

        {links.map((item, index) => (
          <div
            key={item.nome}
            ref={(el) => {
              refs.current[index] = el;
            }}
            onClick={() => {
              playClick();
              navigate(item.rota);
            }}
            className={`cursor-pointer text-[0.6rem] lg:text-[1rem] transition ${ativoIndex === index ? "text-white" : "hover:text-white"
              }`}
          >
            {item.nome}
          </div>
        ))}

        <div className="absolute -bottom-2 -left-4 lg:-left-6 w-[calc(100%+2rem)] lg:w-[calc(100%+3rem)] h-[2px] bg-gray-700 rounded-full"></div>

        <div
          className="absolute -bottom-2 h-[2px] bg-red-600 rounded-full transition-all duration-300"
          style={{
            left: style.left,
            width: style.width,
          }}
        ></div>
      </div>

      <div className="flex items-center gap-4 mb-4">

        <div className="flex h-8 lg:h-12 items-center gap-1 lg:gap-3 border border-gray-700 rounded-xl px-2 lg:px-3">
          {soundEnabled ? (
            <img
              src={Fone}
              alt="som"
              className="lg:h-6 cursor-pointer hover:scale-110 transition"
              onClick={() => setSoundEnabled(false)}
            />
          ) : (
            <img
              src={SemSom}
              alt="sem som"
              className="lg:h-6 cursor-pointer hover:scale-110 transition"
              onClick={() => setSoundEnabled(true)}
            />
          )}



          <img
            src={Configuracao}
            onClick={playClick}
            alt="configuração"
            className="h-6 cursor-pointer hover:rotate-90 transition duration-300"
          />
        </div>

        <div
          onClick={playClick}
          className="relative p-2 lg:px-5 lg:py-3 flex items-center gap-2 
                        border border-red-600 text-white uppercase
                        bg-red-600/10 overflow-hidden cursor-pointer
                        transition hover:bg-red-600/20 hover:shadow-[0_0_12px_#ff1a1a]">

          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition
                          bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.2),transparent_70%)]">
          </div>

          <div className="absolute inset-0 border border-red-600 pointer-events-none
                          [clip-path:polygon(10px_0%,calc(100%-10px)_0%,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0%_calc(100%-10px),0%_10px)]">
          </div>


          <span className="animate-alert text-[8px] lg:text-lg z-10 mb-1">⚠️</span>

          <div className="flex flex-col items-center text-[10px] leading-tight z-10">
            <strong className="text-[6px] lg:text-xs tracking-wider">
              ACESSO RESTRITO
            </strong>
            <span className="text-[8px] lg:text-xs text-gray-300">
              NIVEL 5 CLASSE A
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}