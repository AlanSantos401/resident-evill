import bg from '../assets/bg-home.png'
import Header from '../components/header'
import resident from "../assets/name-resident-evil.png"
import umbrella from "../assets/icon-umbrella-2.png"

import clickSound from "../audio/botoes.mp3"
import bgMusic from "../audio/bg-musica.mp3"

import { useEffect, useRef } from 'react'
import { useAudio } from '../components/audioContext'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const clickRef = useRef<HTMLAudioElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { soundEnabled } = useAudio()

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
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Header />

      <audio
        ref={audioRef}
        src={bgMusic}
        loop
        autoPlay
      />

      <section>
        <div className='flex flex-col justify-center px-5 lg:pt-14 lg:p-8'>
          <img className='w-2xs lg:w-xl' src={resident} alt="nome-resident-evill" />

          <h2 className='text-xl lg:text-3xl mb-3 lg:mb-4 text-mauve-300 leading-relaxed tracking-wider'>
            ARQUIVOS OFICIAIS DA SAGA
          </h2>

          <p className='text-[1rem] lg:text-xl text-mauve-300'>
            Explore a cronologia completa, personagens lendários, locais <br />
            icônicos e os segredos mais sombrios da Umbrella Corporation.
          </p>

          <div className="flex gap-4 mt-4 lg:mt-8">

            <button
              onClick={() => {
                playClick();
                navigate("/organizacao");
              }}
              className="group relative flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-4 cursor-pointer 
              text-white uppercase overflow-hidden
              border border-red-600 bg-red-600/20
              transition hover:bg-red-600/30 hover:shadow-[0_0_12px_#ff1a1a]"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300
                bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.25),transparent_70%)]" />

              <div className="absolute inset-0 border border-red-600 pointer-events-none
                [clip-path:polygon(10px_0%,calc(100%-10px)_0%,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0%_calc(100%-10px),0%_10px)]" />

              <img
                className="w-6 lg:w-8 z-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                src={umbrella}
                alt="icon-umbrella"
              />

              <span className="text-sm lg:text-xl z-10 tracking-wide">
                VER ORGANIZAÇÃO
              </span>
            </button>

            <button
              onClick={() => {
                playClick();
                navigate("/linha-do-tempo");
              }}
              className="relative flex items-center gap-2 px-6 lg:px-8 lg:py-4 cursor-pointer 
              text-white uppercase overflow-hidden
              border border-gray-600 bg-gray-700/20
              transition hover:bg-gray-700/30 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            >

              <div className="absolute inset-0 border border-gray-600 pointer-events-none
                [clip-path:polygon(10px_0%,calc(100%-10px)_0%,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0%_calc(100%-10px),0%_10px)]" />

              <span className="text-sm lg:text-xl z-10">
                VER LINHA DO TEMPO
              </span>
            </button>

          </div>
        </div>
      </section>
    </div>
  )
}