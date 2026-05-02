import { useState } from "react"
import { Search } from "lucide-react"
import Header from "../components/header"
import Umbrella from "../assets/icon-umbrella.png"

import type {
  Personagem,
  Status,
  NivelAmeaca,
  FiltroCategoria
} from "../types/personagem"

import { personagens } from "../data/personagens"

export default function Personagens() {
  const [busca, setBusca] = useState("")
  const [filtro, setFiltro] = useState<FiltroCategoria>("TODOS")



  const [selecionado, setSelecionado] = useState<Personagem>(personagens[0])

  const statusColor: Record<Status, string> = {
    ATIVO: "text-emerald-400",
    CRÍTICO: "text-orange-400",
    HOSTIL: "text-red-600",
    DESCONHECIDO: "text-zinc-400",
    MUTAÇÃO: "text-fuchsia-500",
    PROTEGIDO: "text-sky-400"
  }

  const ameacaColor: Record<NivelAmeaca, string> = {
    BAIXA: "text-green-500",
    MÉDIA: "text-yellow-400",
    ALTA: "text-orange-500",
    EXTREMA: "text-red-600",
  }

  const filtros: FiltroCategoria[] = [
    "TODOS",
    "PROTAGONISTAS",
    "ALIADOS",
    "VILÕES",
    "MONSTROS",
  ]

  const mapaCategoria = {
    PROTAGONISTAS: "PROTAGONISTA",
    ALIADOS: "ALIADO",
    VILÕES: "VILAO",
    MONSTROS: "MONSTRO",
  }

  const filtrados = personagens.filter((p) => {
    const matchBusca = p.nome.toLowerCase().includes(busca.toLowerCase())

    if (filtro === "TODOS") return matchBusca

    const categoria = mapaCategoria[filtro as keyof typeof mapaCategoria]

    return matchBusca && p.categoria === categoria
  })

  const jogoColors: Record<string, string> = {
    "3+": "border-gray-500 text-gray-300 bg-gray-800/30",
    "RE0": "border-gray-500 text-gray-300 bg-gray-800/30",
    "RE1": "border-green-600 text-green-400 bg-green-900/20",
    "RE2": "border-blue-600 text-blue-400 bg-blue-900/20",
    "RE3": "border-red-700 text-red-400 bg-red-900/20",
    "RE4": "border-yellow-600 text-yellow-400 bg-yellow-900/20",
    "RE5": "border-orange-600 text-orange-400 bg-orange-900/20",
    "RE6": "border-purple-600 text-purple-400 bg-purple-900/20",
    "RE7": "border-lime-600 text-lime-400 bg-lime-900/20",
    "RE8": "border-pink-600 text-pink-400 bg-pink-900/20",
    "RE9": "border-cyan-600 text-cyan-400 bg-cyan-900/20",
    "CODE VERONICA": "border-indigo-600 text-indigo-400 bg-indigo-900/20",
  }

  return (
    <div
      className="flex flex-col h-screen text-white">
      <Header />

      <div className="flex flex-1">

        <aside className="lg:w-[300px] border-r p-4">
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

            {filtros.map((item) => (
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

            <p className="mb-1 flex justify-between">
              Personagens Catalogados:
              <span>{filtrados.length}</span>
            </p>

            <p className="mb-1 flex justify-between">
              B.O.W Identificado:
              <span>{filtrados.filter(p => p.tipo === "B.O.W").length}</span>
            </p>
            <p className="mb-1 flex justify-between">Nível de ameaça Global: <span className={ameacaColor[selecionado.nivelAmeaca]}>
              {selecionado.nivelAmeaca}
            </span></p>

          </div>
        </aside>

        <section className="flex-1 p-4 overflow-y-auto h-[calc(100vh-80px)]">
          <div className="grid grid-cols-4 gap-y-4 gap-x-6">

            {filtrados.map((p) => (
              <div
                key={p.id}

                className="flex flex-col border border-gray-700 cursor-pointer  transition hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              >
                <img src={p.imagem} className="w-full h-35 object-cover mb-2" />

                <h3 className=" mx-4 text-[1rem]">{p.nome}</h3>

                <h4 className="mx-4 flex text-[0.8rem] justify-between ">
                  STATUS:
                  <span className={statusColor[p.status]}>
                    {p.status}
                  </span>
                </h4>
                <h3 className="mx-4 text-[0.8rem]">ID: {p.id}</h3>

                <button className="m-2 border border-red-600 text-xs py-1 hover:bg-red-600/20 cursor-pointer"
                  onClick={() => setSelecionado(p)}>
                  ANALISAR
                </button>
              </div>
            ))}

          </div>
        </section>

        <aside className="lg:w-[350px] border-l border-red-900 py-3 px-4 h-[calc(100vh-80px)] overflow-hidden ">

          <h2 className="text-gray-300 mb-1 text-xl font-bold">SCAN BIOLÓGICO</h2>

          <div className="mb-2 ">
            <img
              src={selecionado.imagem}
              className="w-full h-37 object-cover"
            />
          </div>
          <div className="flex justify-between border-b border-red-900">
            <div>
              <h2 className="text-xl ">
                {selecionado.nome.toUpperCase()}
              </h2>

              <p className="flex justify-between text-base text-gray-400  pb-1 mb-1">
                ID: {selecionado.id}
              </p>
            </div>
            <div className="flex flex-wrap p-1 gap-1 items-end">
              {selecionado.jogos?.map((jogo) => (
                <span
                  key={jogo}
                  className={`
        px-1 py-[2px] text-[10px] border tracking-wider
        ${jogoColors[jogo]}
      `}
                >
                  {jogo}
                </span>
              ))}
            </div>
          </div>

          <div className="text-[14px] space-y-1 mt-4 ">

            <div className="flex justify-between border-b border-gray-800">
              <span>Status:</span>
              <span className={statusColor[selecionado.status]}>
                {selecionado.status}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800">
              <span>Infecção:</span>
              <span className="text-yellow-400">{selecionado.infeccao}%</span>
            </div>
            <div className="flex justify-between border-b border-gray-800">
              <span>Ameaça:</span>
              <span className={ameacaColor[selecionado.nivelAmeaca]}>
                {selecionado.nivelAmeaca}
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-800">
              <span>Altura:</span>
              <span className="text-gray-300">{selecionado.altura}</span>
            </div>
            <div className="flex justify-between border-b border-gray-800">
              <span>Peso:</span>
              <span className="text-gray-300">{selecionado.peso}</span>
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