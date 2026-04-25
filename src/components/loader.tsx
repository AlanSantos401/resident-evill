import { useEffect, useRef, useState } from "react";
import bg from "../assets/bg-loading.png";
import umbrella from "../assets/icon-umbrella-2.png";
import { useAudio } from "./audioContext";

import clickSound from "../audio/botoes.mp3";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [isLandscape, setIsLandscape] = useState(true);

  const started = useRef(false);
  const clickRef = useRef<HTMLAudioElement | null>(null);

  const { soundEnabled } = useAudio();

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  useEffect(() => {
    clickRef.current = new Audio(clickSound);
    if (clickRef.current) clickRef.current.volume = 0.9;
  }, []);

  const playClick = () => {
    if (!soundEnabled || !clickRef.current) return;
    clickRef.current.currentTime = 0;
    clickRef.current.play();
  };

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let value = 0;

    const sleep = (ms: number) =>
      new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      while (value < 35) {
        value++;
        setProgress(value);
        await sleep(40);
      }

      await sleep(900);

      while (value < 67) {
        value++;
        setProgress(value);
        await sleep(40);
      }

      await sleep(900);

      while (value < 100) {
        value++;
        setProgress(value);
        await sleep(30);
      }

      await sleep(300);

      setDone(true);
    };

    run();
  }, []);

  if (!isLandscape) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        <div className="flex flex-col text-center gap-3">
          <div className="flex items-center justify-center gap-2">
            <img
            className="w-10 tracking-widest animate-pulse"
            src={umbrella}
            alt="icon-umbrella"
          />
          <p className="text-2xl tracking-widest animate-pulse">
            GIRE O CELULAR
          </p>
          </div>
          
          <p className="text-gray-400 mt-2 text-[1rem] drop-shadow-[0_0_10px_#ff0000]">
            Este sistema funciona melhor no modo paisagem
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden">

      <div className="absolute inset-0">
        <img
          src={bg}
          className="w-full h-full object-cover animate-bgFade"
        />

        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,rgba(255,0,0,0.06)_0px,rgba(255,0,0,0.06)_1px,transparent_2px,transparent_4px)]" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">

        <h1 className="text-white text-4xl tracking-[0.5rem] animate-pulse drop-shadow-[0_0_10px_#ff0000]">
          CARREGANDO
        </h1>

        <p className="text-gray-400 mt-2 tracking-widest text-sm">
          CARREGANDO ARQUIVOS...
        </p>

        <div className="w-[360px] h-2 border border-red-600 mt-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#300] via-red-500 to-red-700 shadow-[0_0_10px_#ff0000]"
            style={{
              width: `${progress}%`,
              transition: "width 0.2s",
            }}
          />
        </div>

        <span className="block mt-3 text-gray-400 text-sm tracking-wider">
          Verificando dados de Raccoon City...{" "}
          <b className="text-red-500">{progress}%</b>
        </span>

        <div className="mt-6 h-[70px] flex items-center justify-center">
          <div
            className={`transition-all duration-500 ease-out ${done
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
              }`}
          >
            <button
              type="button"
              onClick={() => {
                onFinish();
                playClick();
              }}
              className="group relative flex items-center gap-2 px-6 py-3 cursor-pointer 
                text-white uppercase overflow-hidden
                border border-red-600 bg-red-600/20
                transition hover:bg-red-600/30 hover:shadow-[0_0_12px_#ff1a1a]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300
                bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.25),transparent_70%)]"
              />

              <div
                className="absolute inset-0 border border-red-600 pointer-events-none
                [clip-path:polygon(10px_0%,calc(100%-10px)_0%,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0%_calc(100%-10px),0%_10px)]"
              />

              <img
                className="w-8 z-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                src={umbrella}
                alt="icon-umbrella"
              />

              <span className="text-xl z-10 tracking-wide">
                ENTRAR NA MISSÃO
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}