import Header from "../components/header";

import resident_evill_1 from "../assets/jogos/resident_evil_1.png";
import resident_evill_2 from "../assets/jogos/resident_evil_2.png";
import resident_evill_3 from "../assets/jogos/resident_evil_3.png";
import code_veronica from "../assets/jogos/resident_evil_code_veronica.png";
import resident_evill_0 from "../assets/jogos/resident_evil_0.png";
import resident_evill_4 from "../assets/jogos/resident_evil_4.png";
import resident_evill_5 from "../assets/jogos/resident_evil_5.png";
import resident_evill_6 from "../assets/jogos/resident_evil_6.png";
import resident_evill_7 from "../assets/jogos/resident_evil_7.png";
import resident_evill_8 from "../assets/jogos/resident_evil_8.png";
import resident_evill_9 from "../assets/jogos/resident_evil_9.png";

import slideSound from "../audio/carrossel.mp3"
import linhaDoTempo from "../assets/name_linha_do_tempo.png"

import re0Video from "../videos/Resident_Evil_0.mp4";
import re1Video from "../videos/Resident_Evil.mp4";
import re2Video from "../videos/Resident_Evil_2.mp4";
import reCodVerVideo from "../videos/Resident_Evil_Code_Veronica.mp4";
import re3Video from "../videos/Resident_Evil_3.mp4";
import re4Video from "../videos/Resident_Evil_4.mp4";
import re5Video from "../videos/Resident_Evil_5.mp4";
import re6Video from "../videos/Resident_Evil_6.mp4";
import re7Video from "../videos/Resident_Evil_7.mp4";
import re8Video from "../videos/Resident_Evil_8.mp4";
import re9Video from "../videos/Resident_Evil_9.mp4";

import { useEffect, useRef, useState } from "react";
import { useAudio } from "../components/audioContext";

export default function LinhaDoTempo() {
  const [selecionado, setSelecionado] = useState(0);
  const [inicio, setInicio] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { soundEnabled } = useAudio();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoLoading, setVideoLoading] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    if (soundEnabled) {
      video.muted = false;
    } else {
      video.muted = true;
    }
  }, [soundEnabled]);

  const jogos = [
    {
      img: resident_evill_1,
      video: re1Video,
      titulo: "Resident Evil",
      tipo: "Remake",
      descricao: "Sobreviva em uma mansão isolada cheia de mistérios, criaturas mortais e segredos obscuros escondidos nas sombras."
    },
    {
      img: resident_evill_2,
      video: re2Video,
      titulo: "Resident Evil 2",
      tipo: "Remake",
      descricao: "Enfrente o caos em Raccoon City enquanto zumbis dominam as ruas e segredos perigosos surgem a cada passo."
    },
    {
      img: resident_evill_3,
      video: re3Video,
      titulo: "Resident Evil 3",
      tipo: "Remake",
      descricao: "Fuja de uma cidade em colapso enquanto é perseguido por uma ameaça implacável que nunca para de caçar você."
    },
    {
      img: code_veronica,
      video: reCodVerVideo,
      titulo: "Resident Evil Code: Veronica",
      tipo: null,
      descricao: "Explore instalações sombrias em busca da verdade, enfrentando inimigos cruéis e descobrindo segredos da Umbrella Corporation."
    },
    {
      img: resident_evill_0,
      video: re0Video,
      titulo: "Resident Evil 0",
      tipo: "Remaster",
      descricao: "Descubra as origens do terror em um trem abandonado, enfrentando criaturas perigosas e revelações surpreendentes."
    },
    {
      img: resident_evill_4,
      video: re4Video,
      titulo: "Resident Evil 4",
      tipo: "Remake",
      descricao: "Viaje até um vilarejo isolado dominado por uma seita perigosa e enfrente inimigos inteligentes e extremamente agressivos."
    },
    {
      img: resident_evill_5,
      video: re5Video,
      titulo: "Resident Evil 5",
      tipo: "Remaster",
      descricao: "Lute em ambientes hostis na África enquanto enfrenta ameaças biológicas intensas e coopera para sobreviver ao perigo constante."
    },
    {
      img: resident_evill_6,
      video: re6Video,
      titulo: "Resident Evil 6",
      tipo: "Remaster",
      descricao: "Acompanhe múltiplas histórias globais enquanto o mundo enfrenta surtos biológicos devastadores e ameaças em larga escala."
    },
    {
      img: resident_evill_7,
      video: re7Video,
      titulo: "Resident Evil 7",
      tipo: null,
      descricao: "Entre em uma casa aterrorizante e encare uma família perturbadora em uma experiência intensa de horror em primeira pessoa."
    },
    {
      img: resident_evill_8,
      video: re8Video,
      titulo: "Resident Evil Village",
      tipo: null,
      descricao: "Explore um vilarejo sombrio dominado por criaturas estranhas e líderes poderosos em uma jornada cheia de medo e ação."
    },
    {
      img: resident_evill_9,
      video: re9Video,
      titulo: "Resident Evil Requiem",
      tipo: null,
      descricao: "Encare novos horrores em um mundo devastado, onde ameaças evoluídas desafiam sua sobrevivência e testam seus limites."
    },
  ];

  const limite = 7;
  const visiveis = jogos.slice(inicio, inicio + limite);

  useEffect(() => {
    audioRef.current = new Audio(slideSound);
    audioRef.current.volume = 0.8
  }, [])

  const playSlideSound = () => {
    if (!soundEnabled || !audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  }

  useEffect(() => {
    setMinTimePassed(false);

    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [selecionado]);

  useEffect(() => {
    setVideoLoading(true);
    setVideoReady(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [selecionado]);

  useEffect(() => {
    if (videoReady && minTimePassed) {
      setVideoLoading(false);

      if (videoRef.current) {
        videoRef.current.play().catch(() => {

          console.log("Autoplay bloqueado");
        });
      }
    }
  }, [videoReady, minTimePassed]);

  function handleVideoLoad() {
    setVideoReady(true);
  }

  function proximo() {
    if (selecionado < jogos.length - 1) {
      setSelecionado((prev) => prev + 1);

      if (selecionado >= inicio + limite - 1) {
        setInicio((prev) => prev + 1);
      }
    }
  }

  function anterior() {
    if (selecionado > 0) {
      setSelecionado((prev) => prev - 1);

      if (selecionado <= inicio) {
        setInicio((prev) => prev - 1);
      }
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          ref={videoRef}
          key={jogos[selecionado].video}
          src={jogos[selecionado].video}
          loop
          preload="auto"
          muted={!soundEnabled}
          onLoadedData={handleVideoLoad}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoading ? "opacity-0" : "opacity-100"
            }`}
        />

        {videoLoading && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center flex-col gap-4">
            <p className="text-red-600 tracking-widest text-sm animate-pulse">
              LOADING...
            </p>
          </div>
        )}
      </div>

      <section className="flex flex-col lg:pt-5 px-4 lg:px-8 lg:gap-8">
        <div className="max-w-[37rem]">
          <img src={linhaDoTempo} className="w-[15rem] lg:w-[31rem]" />
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-red-600 font-semibold text-xl lg:text-3xl tracking-wider">
              {jogos[selecionado].titulo.toUpperCase()}
            </h2>

            {jogos[selecionado].tipo && (
              <span
                className={`
        flex items-center justify-center
        px-3 h-6 lg:h-8 text-xs tracking-widest font-bold rounded
        ${jogos[selecionado].tipo === "Remake"
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white"}
      `}
              >
                {jogos[selecionado].tipo.toUpperCase()}
              </span>
            )}
          </div>


          <p className="hidden lg:block text-gray-400 leading-relaxed">
            {jogos[selecionado].descricao.toUpperCase()}
          </p>
        </div>

        <div className="flex items-center justify-center lg:gap-6 lg:mt-12">
          <button onClick={() => {
            anterior();
            playSlideSound();
          }} className="text-white text-8xl hover:text-red-500 cursor-pointer">
            ‹
          </button>

          <div className="flex gap-6 ml-1">
            {visiveis.map((jogo, index) => {
              const realIndex = inicio + index;
              const isAtivo = selecionado === realIndex;

              return (
                <div
                  key={realIndex}
                  onClick={() => {
                    setSelecionado(realIndex);
                    playSlideSound();
                  }}
                  className={`relative cursor-pointer transition-all duration-300 ${isAtivo ? "scale-110 z-10" : "scale-95 opacity-40"
                    }`}
                >
                  <img
                    src={jogo.img}
                    className={`transition-all duration-300 ${isAtivo ? "brightness-100" : "brightness-50"
                      }`}
                  />

                  {isAtivo && (
                    <div className="absolute inset-0 shadow-[0_0_20px_rgba(255,0,0,0.7)]"></div>
                  )}
                </div>
              );
            })}
          </div>

          <button onClick={() => {
            proximo();
            playSlideSound();
          }} className="text-white text-8xl hover:text-red-500 cursor-pointer">
            ›
          </button>
        </div>
      </section>
    </div>
  );
}