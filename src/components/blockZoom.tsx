import { useEffect, useState } from "react";
import umbrella from "../assets/icon-umbrella-2.png";

export function BlockZoom() {
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    // ORIENTAÇÃO
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener(
      "orientationchange",
      checkOrientation
    );

    // BLOQUEAR ZOOM
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.ctrlKey &&
        (e.key === "+" ||
          e.key === "-" ||
          e.key === "=" ||
          e.key === "0")
      ) {
        e.preventDefault();
      }
    };

    const handleGesture = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    window.addEventListener(
      "gesturestart",
      handleGesture
    );

    window.addEventListener(
      "gesturechange",
      handleGesture
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkOrientation
      );

      window.removeEventListener(
        "orientationchange",
        checkOrientation
      );

      window.removeEventListener(
        "wheel",
        handleWheel
      );

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      window.removeEventListener(
        "gesturestart",
        handleGesture
      );

      window.removeEventListener(
        "gesturechange",
        handleGesture
      );
    };
  }, []);

  if (isLandscape) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[999999]">
      <div className="flex flex-col text-center gap-3">

        <div className="flex items-center justify-center gap-6">
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