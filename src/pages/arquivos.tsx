import Header from "../components/header";

export default function Arquivos() {
  return (
    <div className="h-screen bg-black overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50 bg-black">
        <Header />
      </div>
      <div className="text-white max-w-6xl mx-auto px-8 py-35 h-screen overflow-y-auto scrollbar-hide">

        <h1 className="text-5xl font-bold text-red-600 mb-6 tracking-widest">
          ARQUIVOS DA FRANQUIA
        </h1>

        <p className="text-zinc-400 text-lg leading-8 mb-20">
          Resident Evil é uma franquia de survival horror criada pela Capcom e lançada oficialmente em 1996.
          A série revolucionou os jogos de terror ao misturar exploração, sobrevivência, puzzles e criaturas
          biológicas desenvolvidas através de experimentos genéticos ilegais.

          A história gira em torno da Umbrella Corporation, uma poderosa empresa farmacêutica responsável pela
          criação de vírus e armas biológicas que acabaram causando surtos e destruição em diversas regiões do mundo.

          Com o passar dos anos, Resident Evil se tornou uma das franquias mais famosas da indústria dos games,
          recebendo dezenas de jogos principais, spin-offs, remakes, filmes, animações e conteúdos extras.
        </p>

        {/* CRIADORES */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold border-b border-red-700 pb-3 mb-8">
            CRIADORES
          </h2>

          <div className="space-y-6 text-zinc-300 leading-8">
            <p>
              <span className="text-red-500 font-bold">Shinji Mikami</span> —
              Diretor principal e responsável pela criação do primeiro Resident Evil.
            </p>

            <p>
              <span className="text-red-500 font-bold">Tokuro Fujiwara</span> —
              Produtor original da franquia e mentor do projeto inicial.
            </p>

            <p>
              <span className="text-red-500 font-bold">Hideki Kamiya</span> —
              Diretor de Resident Evil 2 e um dos nomes mais importantes da Capcom.
            </p>
          </div>
        </section>

        {/* JOGOS OFICIAIS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold border-b border-red-700 pb-3 mb-8">
            JOGOS OFICIAIS
          </h2>

          <div className="space-y-4 text-zinc-300">

            <p><span className="text-red-500">1996</span> — Resident Evil</p>
            <p><span className="text-red-500">1997</span> — Resident Evil Director's Cut</p>
            <p><span className="text-red-500">1998</span> — Resident Evil 2</p>
            <p><span className="text-red-500">1999</span> — Resident Evil 3: Nemesis</p>
            <p><span className="text-red-500">2000</span> — Resident Evil Code: Veronica</p>
            <p><span className="text-red-500">2002</span> — Resident Evil Remake</p>
            <p><span className="text-red-500">2002</span> — Resident Evil Zero</p>
            <p><span className="text-red-500">2005</span> — Resident Evil 4</p>
            <p><span className="text-red-500">2007</span> — Resident Evil: Umbrella Chronicles</p>
            <p><span className="text-red-500">2009</span> — Resident Evil 5</p>
            <p><span className="text-red-500">2009</span> — Resident Evil: Darkside Chronicles</p>
            <p><span className="text-red-500">2011</span> — Resident Evil: The Mercenaries 3D</p>
            <p><span className="text-red-500">2012</span> — Resident Evil: Operation Raccoon City</p>
            <p><span className="text-red-500">2012</span> — Resident Evil 6</p>
            <p><span className="text-red-500">2015</span> — Resident Evil Revelations 2</p>
            <p><span className="text-red-500">2017</span> — Resident Evil 7: Biohazard</p>
            <p><span className="text-red-500">2019</span> — Resident Evil 2 Remake</p>
            <p><span className="text-red-500">2020</span> — Resident Evil 3 Remake</p>
            <p><span className="text-red-500">2021</span> — Resident Evil Village</p>
            <p><span className="text-red-500">2022</span> — Resident Evil Re:Verse</p>
            <p><span className="text-red-500">2023</span> — Resident Evil 4 Remake</p>

          </div>
        </section>

        {/* SPIN OFFS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold border-b border-red-700 pb-3 mb-8">
            SPIN-OFFS E JOGOS NÃO PRINCIPAIS
          </h2>

          <div className="space-y-4 text-zinc-300">

            <p>Resident Evil Survivor</p>
            <p>Resident Evil Survivor 2</p>
            <p>Resident Evil Dead Aim</p>
            <p>Resident Evil Outbreak</p>
            <p>Resident Evil Outbreak File #2</p>
            <p>Resident Evil Gaiden</p>
            <p>Resident Evil Revelations</p>
            <p>Resident Evil Resistance</p>
            <p>Resident Evil: The Missions</p>
            <p>Resident Evil Genesis</p>
            <p>Resident Evil Confidential Report</p>
            <p>Resident Evil Degeneration</p>

          </div>
        </section>

        {/* FILMES */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold border-b border-red-700 pb-3 mb-8">
            FILMES E ANIMAÇÕES
          </h2>

          <div className="space-y-4 text-zinc-300">

            <p>Resident Evil (2002)</p>
            <p>Resident Evil: Apocalypse</p>
            <p>Resident Evil: Extinction</p>
            <p>Resident Evil: Afterlife</p>
            <p>Resident Evil: Retribution</p>
            <p>Resident Evil: The Final Chapter</p>
            <p>Resident Evil: Welcome to Raccoon City</p>

            <br />

            <p>Resident Evil: Degeneration</p>
            <p>Resident Evil: Damnation</p>
            <p>Resident Evil: Vendetta</p>
            <p>Resident Evil: Infinite Darkness</p>
            <p>Resident Evil: Death Island</p>

          </div>
        </section>

        {/* LEGADO */}
        <section>
          <h2 className="text-3xl font-bold border-b border-red-700 pb-3 mb-8">
            LEGADO
          </h2>

          <p className="text-zinc-300 leading-8">
            Resident Evil redefiniu o gênero survival horror e influenciou centenas de jogos ao redor do mundo.
            A franquia vendeu milhões de cópias e permanece ativa até hoje, sendo uma das marcas mais importantes
            da Capcom.

            Além dos jogos, a série expandiu seu universo através de filmes, livros, animações, quadrinhos e séries,
            tornando-se uma das franquias de terror mais reconhecidas da cultura pop.
          </p>
        </section>

      </div>
    </div>
  )
}