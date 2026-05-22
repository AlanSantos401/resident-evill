import { useState } from "react";

import Header from "../components/header";

import umbrellaLogo from "../assets/icon-umbrella.png";

import spencerImg from "../assets/personagens/spence.png";
import marcusImg from "../assets/personagens/marcus.png";
import edwardImg from "../assets/personagens/edward.png";

import albertImg from "../assets/personagens/albert.png";
import birkinImg from "../assets/personagens/birkin.png";
import vladimirImg from "../assets/personagens/vladimir.png";

import tricell from "../assets/tricell.png";
import wilpharma from "../assets/wilpharma.png";
import connections from "../assets/connections.png";
import blueumbrella from "../assets/blue-umbrella.png";

const fundadores = [
  {
    nome: "Oswell E. Spencer",
    cargo: "Fundador / Presidente",
    imagem: spencerImg,

    descricao:
      "Co-fundador da Umbrella Corporation e principal responsável pelo projeto de evolução humana através do Progenitor Virus. Manipulou cientistas e governos durante décadas.",

    importancia:
      "Criador da filosofia de evolução genética da Umbrella e principal arquiteto do império biotecnológico da corporação.",
  },

  {
    nome: "James Marcus",
    cargo: "Cientista-Chefe",
    imagem: marcusImg,

    descricao:
      "Pesquisador genial responsável pela descoberta inicial do T-Virus. Seus experimentos deram origem às primeiras armas biológicas da Umbrella.",

    importancia:
      "Suas pesquisas serviram como base para praticamente todos os vírus desenvolvidos pela Umbrella.",
  },

  {
    nome: "Edward Ashford",
    cargo: "Geneticista",
    imagem: edwardImg,

    descricao:
      "Membro da família Ashford e pioneiro em pesquisas genéticas avançadas. Sua linhagem influenciou diretamente os projetos da Umbrella.",

    importancia:
      "A família Ashford ajudou a financiar e expandir os laboratórios da corporação em escala global.",
  },
];

const executivos = [
  {
    nome: "Albert Wesker",
    cargo: "Operações Especiais",
    imagem: albertImg,

    descricao:
      "Um dos agentes mais perigosos da Umbrella. Traiu múltiplas organizações e buscava dominar o mundo usando armas biológicas e evolução genética.",

    importancia:
      "Responsável por diversos incidentes biológicos globais e peça-chave nos projetos secretos da corporação.",
  },

  {
    nome: "William Birkin",
    cargo: "Pesquisa Viral",
    imagem: birkinImg,

    descricao:
      "Criador do G-Virus. Cientista brilhante cuja obsessão levou à destruição de Raccoon City.",

    importancia:
      "Seu trabalho revolucionou os experimentos mutagênicos da Umbrella.",
  },

  {
    nome: "Sergei Vladimir",
    cargo: "Comandante Militar",
    imagem: vladimirImg,

    descricao:
      "General militar da Umbrella responsável pelas forças especiais USS e operações de contenção biológica.",

    importancia:
      "Controlava operações militares secretas e a proteção de instalações críticas da Umbrella.",
  },
];

const parceiras = [
  {
    nome: "Tricell",
    tipo: "Biotecnologia",
    logo: tricell,

    descricao:
      "Gigante farmacêutica que assumiu parte das pesquisas da Umbrella após sua queda. Especializada em armas biológicas avançadas e desenvolvimento do Uroboros Virus.",

    importancia:
      "A Tricell financiou operações secretas globais e trabalhou diretamente com Albert Wesker.",
  },

  {
    nome: "WilPharma",
    tipo: "Farmacêutica",
    logo: wilpharma,

    descricao:
      "Empresa farmacêutica envolvida em pesquisas ilegais com vírus mutagênicos e testes humanos clandestinos.",

    importancia:
      "Atuava como fachada corporativa para projetos derivados das pesquisas originais da Umbrella.",
  },

  {
    nome: "Blue Umbrella",
    tipo: "Segurança Biológica",
    logo: blueumbrella,

    descricao:
      "Nova divisão criada após a queda da Umbrella original. Oficialmente atua combatendo armas biológicas.",

    importancia:
      "Apesar de ajudar governos, muitos suspeitam que ainda tenha acesso aos antigos dados da Umbrella.",
  },

  {
    nome: "The Connections",
    tipo: "Mercado Negro",
    logo: connections,

    descricao:
      "Organização criminosa internacional especializada no tráfico de armas biológicas e experimentos humanos.",

    importancia:
      "Responsável pela criação da Eveline e por pesquisas ilegais envolvendo armas orgânicas.",
  },
];

export default function Organizacao() {
  const [selecionado, setSelecionado] = useState<any | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.12),transparent)]" />

      <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[url('/noise.png')]" />

      <div className="fixed top-0 left-0 w-full z-50 bg-black">
        <Header />
      </div>

      {selecionado && (
        <div
          className="
            fixed inset-0 z-[999]
            bg-black/80
            backdrop-blur-md
            flex items-center justify-center
            p-6
          "
          onClick={() => setSelecionado(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              max-w-4xl
              border border-red-900
              bg-gradient-to-br
              from-black
              via-zinc-950
              to-red-950
              grid md:grid-cols-2
              overflow-hidden
              shadow-[0_0_60px_rgba(255,0,0,0.25)]
            "
          >

            <div className="relative">

              <img
                src={selecionado.imagem || selecionado.logo}
                className="
                  w-full
                  h-full
                  object-cover object-top
                  min-h-[480px]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            </div>

            <div className="p-8 flex flex-col justify-center">

              <p className="text-red-500 tracking-[0.4em] text-sm">
                DOSSIÊ CORPORATIVO
              </p>

              <h2 className="text-5xl font-bold mt-4 leading-tight">
                {selecionado.nome}
              </h2>

              <p className="text-red-400 mt-4 text-xl tracking-widest">
                {selecionado.cargo || selecionado.tipo}
              </p>

              <div className="w-full h-[1px] bg-red-900 my-8" />

              <div className="space-y-8">

                <div>
                  <p className="text-red-500 tracking-[0.3em] text-sm mb-3">
                    RESPONSABILIDADE
                  </p>

                  <p className="text-zinc-300 leading-8 text-lg">
                    {selecionado.descricao}
                  </p>
                </div>

                {selecionado.importancia && (
                  <div>
                    <p className="text-red-500 tracking-[0.3em] text-sm mb-3">
                      IMPORTÂNCIA NA HISTÓRIA
                    </p>

                    <p className="text-zinc-400 leading-8">
                      {selecionado.importancia}
                    </p>
                  </div>
                )}

              </div>

              <button
                onClick={() => setSelecionado(null)}
                className="
                  mt-10
                  cursor-pointer
                  border border-red-700
                  px-6 py-4
                  text-red-400
                  hover:bg-red-900/20
                  hover:border-red-500
                  transition
                  tracking-[0.3em]
                "
              >
                FECHAR DOSSIÊ
              </button>

            </div>

          </div>

        </div>
      )}

      <div
        className="
    relative
    z-10
    px-6
    lg:px-12
    pt-40
    pb-10
    h-screen
    overflow-y-auto
    scrollbar-hide
  "
      >

        <div className="mb-14">

          <h1 className="text-5xl font-bold tracking-widest">
            ORGANIZAÇÃO
          </h1>

          <p className="text-red-500 tracking-[0.4em] mt-3">
            REDE CORPORATIVA
          </p>

          <p className="text-zinc-400 mt-5 max-w-3xl leading-8">
            Estrutura hierárquica da Umbrella Corporation,
            seus fundadores, executivos, organizações
            afiliadas e empresas parceiras envolvidas em
            pesquisas biológicas secretas.
          </p>

        </div>

        <div
          className="
            border border-red-900/70
            bg-black/50
            backdrop-blur-md
            p-8
            shadow-[0_0_40px_rgba(255,0,0,0.15)]
          "
        >

          <div className="flex flex-col items-center relative">

            <div className="flex flex-col items-center">

              <img
                src={umbrellaLogo}
                className="
                  w-32
                  mb-5
                  drop-shadow-[0_0_20px_red]
                "
              />

              <h2 className="text-5xl font-bold tracking-widest">
                UMBRELLA
              </h2>

              <p className="text-red-500 tracking-[0.5em] mt-2">
                CORPORATION
              </p>

            </div>

            <section className="mt-24 w-full">

              <div className="flex items-center gap-6 mb-8">
                <div className="h-[1px] bg-red-900 flex-1" />

                <h3 className="text-red-500 tracking-[0.4em]">
                  FUNDADORES
                </h3>

                <div className="h-[1px] bg-red-900 flex-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {fundadores.map((item) => (
                  <div
                    key={item.nome}
                    onClick={() => setSelecionado(item)}
                    className="
                      group
                      border border-red-900
                      bg-black/70
                      overflow-hidden
                      cursor-pointer
                      hover:border-red-500
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                      shadow-[0_0_20px_rgba(255,0,0,0.15)]
                    "
                  >

                    <div className="overflow-hidden">
                      <img
                        src={item.imagem}
                        className="
                          w-full
                          h-[320px]
                          object-cover
                          group-hover:scale-105
                          transition duration-500
                        "
                      />
                    </div>

                    <div className="p-5">

                      <h4 className="text-2xl font-semibold">
                        {item.nome}
                      </h4>

                      <p className="text-red-500 mt-3 tracking-wider">
                        {item.cargo}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </section>

            <section className="mt-24 w-full">

              <div className="flex items-center gap-6 mb-8">
                <div className="h-[1px] bg-red-900 flex-1" />

                <h3 className="text-red-500 tracking-[0.4em]">
                  EXECUTIVOS
                </h3>

                <div className="h-[1px] bg-red-900 flex-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {executivos.map((item) => (
                  <div
                    key={item.nome}
                    onClick={() => setSelecionado(item)}
                    className="
                      group
                      border border-red-900
                      bg-black/70
                      overflow-hidden
                      cursor-pointer
                      hover:border-red-500
                      hover:translate-y-[-6px]
                      transition-all
                      duration-300
                      shadow-[0_0_20px_rgba(255,0,0,0.15)]
                    "
                  >

                    <div className="overflow-hidden">
                      <img
                        src={item.imagem}
                        className="
                          w-full
                          h-[320px]
                          object-cover
                          group-hover:scale-105
                          transition duration-500
                        "
                      />
                    </div>

                    <div className="p-5">

                      <h4 className="text-2xl font-semibold">
                        {item.nome}
                      </h4>

                      <p className="text-red-500 mt-3 tracking-wider">
                        {item.cargo}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </section>

            <section className="mt-24 w-full">

              <div className="flex items-center gap-6 mb-8">
                <div className="h-[1px] bg-red-900 flex-1" />

                <h3 className="text-red-500 tracking-[0.4em]">
                  EMPRESAS PARCEIRAS
                </h3>

                <div className="h-[1px] bg-red-900 flex-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {parceiras.map((item) => (
                  <div
                    key={item.nome}
                    onClick={() => setSelecionado(item)}
                    className="
                      group
                      border border-red-900
                      bg-black/70
                      p-8
                      flex flex-col items-center
                      justify-center
                      text-center
                      cursor-pointer
                      hover:border-red-500
                      hover:scale-105
                      transition-all
                      duration-300
                      shadow-[0_0_20px_rgba(255,0,0,0.15)]
                    "
                  >

                    <img
                      src={item.logo}
                      className="
                        w-24
                        h-24
                        object-contain
                        mb-6
                        group-hover:scale-110
                        transition
                      "
                    />

                    <h4 className="text-2xl font-semibold">
                      {item.nome}
                    </h4>

                    <p className="text-red-500 mt-3 tracking-wider text-sm">
                      {item.tipo}
                    </p>

                  </div>
                ))}

              </div>

            </section>

          </div>

        </div>

      </div>

    </div>
  );
}