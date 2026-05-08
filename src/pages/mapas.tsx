import Header from "../components/header";
import umbrella from "../assets/icon-umbrella-2.png";

export default function Mapas() {
  return (
    <div className="h-screen bg-black">
      <Header />
      <div className="h-screen flex justify-center items-center gap-6 ">
        <img
         className="w-12 lg:w-15 tracking-widest animate-pulse"
        src={umbrella} alt="icon-umbrella" />
        <h1 className="text-white text-4xl lg:text-6xl tracking-widest animate-pulse">
          AGUARDE ATUALIZAÇÃO
        </h1>
      </div>
    </div>
  )
}