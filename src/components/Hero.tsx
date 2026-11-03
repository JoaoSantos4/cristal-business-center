
function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-81px)] w-full items-center justify-center overflow-hidden bg-[#101115]"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Camada escura */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">

        {/* Nome da empresa */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-[#C8A66A]">
          Cristal Business Center
        </p>

        {/* Título principal */}
        <h1 className="text-5xl font-bold tracking-[0.15em] text-[#C8A66A] md:text-7xl">
          CRISTAL
        </h1>

        {/* Subtítulo */}
        <h2 className="mt-3 text-sm font-light tracking-[0.4em] text-white md:text-lg">
          BUSINESS CENTER
        </h2>

        {/* Linha dourada */}
        <div className="mx-auto my-8 h-px w-24 bg-[#C8A66A]" />

        {/* Slogan */}
        <p className="text-2xl font-light leading-relaxed text-[#F5F2EB] md:text-4xl">
          O espaço ideal para
          <span className="block font-semibold text-[#C8A66A]">
            grandes conquistas.
          </span>
        </p>

        {/* Descrição */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
          Conheça os espaços da Cristal Business Center
          em São João da Boa Vista e descubra novas
          possibilidades para o seu negócio.
        </p>

        {/* Localização */}
        <p className="mt-6 text-sm tracking-widest text-gray-400">
          São João da Boa Vista • São Paulo
        </p>

        {/* Botões */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#espacos"
            className="rounded bg-[#C8A66A] px-8 py-4 font-semibold text-[#101115] transition hover:bg-[#E0BF85]"
          >
            Conheça nossos espaços
          </a>

          <a
            href="#contato"
            className="rounded border border-[#C8A66A] px-8 py-4 font-medium text-white transition hover:bg-[#C8A66A] hover:text-[#101115]"
          >
            Fale conosco
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
