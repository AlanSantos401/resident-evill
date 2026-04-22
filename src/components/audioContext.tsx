import { type ReactNode, createContext, useContext, useEffect, useState } from "react";


type AudioContextType = {
  soundEnabled: boolean;
  setSoundEnabled: (value: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  useEffect(() => {
    const saved = localStorage.getItem("sound");
    if (saved !== null) {
      setSoundEnabled(saved === "true")
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("sound", String(soundEnabled))
  }, [soundEnabled])

  return (
    <AudioContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio deve ser usado dentro do AudioProvider")
  }
  return context;;
}