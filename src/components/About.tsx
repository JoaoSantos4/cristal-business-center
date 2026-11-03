function About() {
  return (
    <section
      id="sobre"
      className="bg-[#18191D] px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-[#101115]">
          <img
            src="/images/sobre.jpg"
            alt="Conceito ilustrativo de recepção corporativa"
            className="h-auto w-full object-contain md:h-[450px] md:object-cover md:object-center"
          />
</div>


        {/* Conteúdo */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A66A]">
            Sobre nós
          </p>

          <h2 className="mb-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
            Um ambiente para
            <span className="block text-[#C8A66A]">
              novas conquistas.
            </span>
          </h2>

          <div className="mb-8 h-px w-20 bg-[#C8A66A]" />

          <p className="mb-5 leading-8 text-gray-300">
            Localizada em São João da Boa Vista,
            a Cristal Business Center é um espaço
            voltado ao ambiente profissional.
          </p>

          <p className="mb-8 leading-8 text-gray-400">
            Conheça a estrutura e entre em contato
            para saber mais sobre as possibilidades
            disponíveis para o seu negócio.
          </p>

          <a
            href="#contato"
            className="inline-block rounded border border-[#C8A66A] px-8 py-4 font-semibold text-[#C8A66A] transition hover:bg-[#C8A66A] hover:text-black"
          >
            Entre em contato
          </a>
        </div>

      </div>
    </section>
  )
}

export default About