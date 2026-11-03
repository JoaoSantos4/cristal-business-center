
function Footer() {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="border-t border-[#C8A66A]/20 bg-[#101115] px-6 pt-16 pb-8">

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

        {/* Empresa */}
        <div>
          <h2 className="text-3xl font-bold tracking-[0.2em] text-[#C8A66A]">
            CRISTAL
          </h2>

          <p className="mt-1 text-xs tracking-[0.3em] text-white">
            BUSINESS CENTER
          </p>

          <p className="mt-6 max-w-xs leading-7 text-gray-400">
            O espaço ideal para grandes conquistas.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-[#C8A66A]">
            Navegação
          </h3>

          <nav className="flex flex-col gap-4 text-gray-400">
            <a href="#inicio" className="hover:text-[#C8A66A]">
              Início
            </a>

            <a href="#espacos" className="hover:text-[#C8A66A]">
              Nossos Espaços
            </a>

            <a href="#sobre" className="hover:text-[#C8A66A]">
              Sobre Nós
            </a>

            <a href="#contato" className="hover:text-[#C8A66A]">
              Contato
            </a>
          </nav>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-6 text-lg font-semibold text-[#C8A66A]">
            Entre em contato
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

            <a
              href="https://wa.me/5519978173030"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8A66A]"
            >
              WhatsApp: (19) 97817-3030
            </a>

            <a
              href="https://www.instagram.com/cristalbusinesscenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8A66A]"
            >
              Instagram: @cristalbusinesscenter
            </a>

            <a
              href="mailto:Palomag0118@icloud.com"
              className="break-all hover:text-[#C8A66A]"
            >
              Palomag0118@icloud.com
            </a>

            <p>
              São João da Boa Vista - SP
            </p>

          </div>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-[#C8A66A]/20 pt-8 text-center">
        <p className="text-sm text-gray-500">
          © {anoAtual} Cristal Business Center.
          Todos os direitos reservados.
        </p>
      </div>

    </footer>
  )
}

export default Footer
