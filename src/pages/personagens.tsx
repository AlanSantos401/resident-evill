import { useState } from "react"
import { Search } from "lucide-react"
import Header from "../components/header"
import Umbrella from "../assets/icon-umbrella.png"

// IMAGENS (usa as suas)
import jill from "../assets/personagens/jill.png"
import leon from "../assets/personagens/leon.png"
import ada from "../assets/personagens/ada.png"
import neimes from "../assets/personagens/nemies.png"
import albert from "../assets/personagens/albert.png"
import chris from "../assets/personagens/chris.png"

export default function Personagens() {
  const [busca, setBusca] = useState("")
  const [filtro, setFiltro] = useState("TODOS")

  const personagens = [
    {
      id: 1,
      nome: "Jill Valentine",
      tipo: "HUMANOS",
      status: "ATIVO",
      infeccao: 12,
      imagem: jill,
      forca: 80,
      agilidade: 90,
      resistencia: 70,
      inteligencia: 85,
    },
    {
      id: 2,
      nome: "Leon S. Kennedy",
      tipo: "HUMANOS",
      status: "ATIVO",
      infeccao: 0,
      imagem: leon,
      forca: 75,
      agilidade: 85,
      resistencia: 80,
      inteligencia: 80,
    },
    {
      id: 3,
      nome: "Ada Wong",
      tipo: "HUMANOS",
      status: "ATIVO",
      infeccao: 0,
      imagem: ada,
      forca: 65,
      agilidade: 80,
      resistencia: 70,
      inteligencia: 75,
    },
    {
      id: 4,
      nome: "Chris Redfield",
      tipo: "AGENTES",
      status: "MÉDIA",
      infeccao: 5,
      imagem: chris,
      forca: 95,
      agilidade: 70,
      resistencia: 90,
      inteligencia: 75,
    },
    {
      id: 4,
      nome: "Neimes",
      tipo: "AGENTES",
      status: "MÉDIA",
      infeccao: 5,
      imagem: neimes,
      forca: 95,
      agilidade: 70,
      resistencia: 90,
      inteligencia: 75,
    },
    {
      id: 4,
      nome: "Albert Wesker",
      tipo: "AGENTES",
      status: "MÉDIA",
      infeccao: 5,
      imagem: albert,
      forca: 95,
      agilidade: 70,
      resistencia: 90,
      inteligencia: 75,
    },
    {
      id: 4,
      nome: "Chris Redfield",
      tipo: "AGENTES",
      status: "MÉDIA",
      infeccao: 5,
      imagem: chris,
      forca: 95,
      agilidade: 70,
      resistencia: 90,
      inteligencia: 75,
    },
    {
      id: 4,
      nome: "Chris Redfield",
      tipo: "AGENTES",
      status: "MÉDIA",
      infeccao: 5,
      imagem: chris,
      forca: 95,
      agilidade: 70,
      resistencia: 90,
      inteligencia: 75,
    },
  ]

  const [selecionado, setSelecionado] = useState(personagens[0])

  const filtrados = personagens.filter((p) => {
    return (
      (filtro === "TODOS" || p.tipo === filtro) &&
      p.nome.toLowerCase().includes(busca.toLowerCase())
    )
  })

  return (
    <div className="flex flex-col h-screen text-white">
      <Header />

      <div className="flex flex-1">

        <aside className="w-[300px] border-r p-4">



          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Buscar indivíduo..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full py-1 pl-2 pr-8 bg-transparent border border-gray-300 focus:outline-none focus:border-red-950"
            />

            <Search
              size={16}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300"
            />
          </div>

          <div className="flex items-center text-center gap-1 mb-4 text-gray-300">
            <img src={Umbrella} className="w-12" />
            <h2 className="text-xl font-semibold">BANCO DE DADOS</h2>
          </div>

          <div className="border border-white p-2 text-gray-300">
            <h2 className=" mb-2 flex justify-between items-center text-xl font-semibold">
              CLASSIFICAÇÃO <span className="text-red-700 text-xl">{">"}</span>
            </h2>

            <div className=" h-[1px] bg-gray-400 mx-auto my-4"></div>

            {["TODOS", "HUMANOS", "INFECTADOS", "B.O.W", "AGENTES", "VILÕES"].map((item) => (
              <div
                key={item}
                onClick={() => setFiltro(item)}
                className="flex items-center gap-2 px-2 py-1 cursor-pointer group"
              >
                <span className="text-red-600 group-hover:translate-x-1 transition">
                  {">>"}
                </span>

                <span className={`${filtro === item ? "text-red-500" : ""}`}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm px-1 text-gray-300">
            <h2 className=" mb-2 flex justify-between items-center text-[1.1rem] font-semibold">
              DADOS DO PERSONAGEM <span className="text-red-700 text-xl font-bold">{">"}</span>
            </h2>

            <div className="h-[1px] bg-gray-400 mx-auto my-4"></div>

            <p className="mb-1 flex justify-between">Personagens Catalogados: <span>{personagens.length}</span></p>
            <p className="mb-1 flex justify-between">B.O.W Identificado: <span>{personagens.filter(p => p.tipo === "B.O.W").length}</span></p>
            <p className="mb-1 flex justify-between">Nível de ameaça Global: <span>ALTA</span></p>

          </div>
        </aside>

        <section className="flex-1 p-4">
          <div className="grid grid-cols-4 gap-y-4 gap-x-6">

            {filtrados.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelecionado(p)}
                className="flex flex-col border border-gray-700 cursor-pointer  transition hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              >
                <img src={p.imagem} className="w-full h-35 object-cover mb-2" />

                <h3 className=" mx-4 text-[1rem]">{p.nome}</h3>

                <h4 className="mx-4 flex text-[0.8rem] justify-between ">STATUS: <span className={` ${p.status === "ATIVO" ? "text-green-500" : "text-yellow-500"
                  }`}>
                  {p.status}
                </span></h4>
                <h3 className="mx-4 text-[0.8rem]">ID: RE-125-152-001</h3>

                <button className="m-2 border border-red-600 text-xs py-1 hover:bg-red-600/20 cursor-pointer">
                  ANALISAR
                </button>
              </div>
            ))}

          </div>
        </section>

        <aside className="w-[350px] border-l border-red-900 py-3 px-4 h-[calc(100vh-80px)] overflow-hidden ">

          <h2 className="text-gray-300 mb-1 text-xl font-bold">SCAN BIOLÓGICO</h2>

          <div className="mb-2 ">
            <img
              src={selecionado.imagem}
              className="w-full h-37 object-cover"
            />
          </div>

          <h2 className="text-xl ">
            {selecionado.nome.toUpperCase()}
          </h2>

          <p className="text-base text-gray-400 border-b border-red-900 pb-1 mb-1">
            ID: RE-1996-003
          </p>

          <div className="text-[14px] space-y-1 mt-4 ">

            <div className="flex justify-between border-b border-gray-800">
              <span>Status:</span>
              <span className="text-green-500">{selecionado.status}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800">
              <span>Infecção:</span>
              <span className="text-yellow-400">{selecionado.infeccao}%</span>
            </div>
            <div className="flex justify-between border-b border-gray-800">
              <span>Ameaça:</span>
              <span className="text-yellow-400">MÉDIA</span>
            </div>
            <div className="flex justify-between border-b border-gray-800">
              <span>Altura:</span>
              <span className="text-gray-300">1.66m</span>
            </div>
            <div className="flex justify-between border-b border-gray-800">
              <span>Peso:</span>
              <span className="text-gray-300">50kg</span>
            </div>

          </div>

          <div className="mt-2 space-y-2">

            {[
              { label: "FORÇA", value: selecionado.forca, color: "bg-green-500" },
              { label: "AGILIDADE", value: selecionado.agilidade, color: "bg-green-500" },
              { label: "RESISTÊNCIA", value: selecionado.resistencia, color: "bg-yellow-500" },
              { label: "INTELIGÊNCIA", value: selecionado.inteligencia, color: "bg-red-500" },
            ].map((item) => (

              <div key={item.label} className="flex items-center gap-2">

                <p className="text-[11px] w-[90px] tracking-widest">
                  {item.label}
                </p>

                <div className="flex-1 h-2 bg-gray-800 relative overflow-hidden">

                  <div
                    className={`h-full ${item.color}`}
                    style={{ width: `${item.value}%` }}
                  />

                  <div className="absolute inset-0 flex">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 border-r border-black/40"
                      />
                    ))}
                  </div>

                </div>

              </div>
            ))}

          </div>
          <button className="w-full m-2 border border-red-600 text-base py-1 hover:bg-red-600/20 cursor-pointer">
            ABRIR DOSSIÊ ▶
          </button>
      

        </aside>

      </div>
    </div>
  )
}