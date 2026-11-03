
import { useState } from 'react'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="w-full border-b border-[#C8A66A]/20 bg-[#101115]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="#inicio" className="flex flex-col">
          <span className="text-2xl font-bold tracking-[0.2em] text-[#C8A66A]">
            CRISTAL
          </span>
          <span className="text-[10px] tracking-[0.3em] text-white">
            BUSINESS CENTER
          </span>
        </a>

        {/* Menu desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#inicio" className="text-white hover:text-[#C8A66A]">
            Início
          </a>
          <a href="#espacos" className="text-white hover:text-[#C8A66A]">
            Espaços
          </a>
          <a href="#sobre" className="text-white hover:text-[#C8A66A]">
            Sobre
          </a>
          <a href="#contato" className="rounded bg-[#C8A66A] px-5 py-2 font-semibold text-black">
            Contato
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          className="text-2xl text-[#C8A66A] md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
        >
          {menuAberto ? '✕' : '☰'}
        </button>
      </nav>

      {/* Menu mobile */}
      {menuAberto && (
        <div
          id="menu-mobile"
          className="flex flex-col gap-5 border-t border-[#C8A66A]/20 px-6 py-6 md:hidden"
        >
          <a href="#inicio" onClick={() => setMenuAberto(false)} className="text-white">
            Início
          </a>
          <a href="#espacos" onClick={() => setMenuAberto(false)} className="text-white">
            Espaços
          </a>
          <a href="#sobre" onClick={() => setMenuAberto(false)} className="text-white">
            Sobre
          </a>
          <a href="#contato" onClick={() => setMenuAberto(false)} className="text-[#C8A66A]">
            Contato
          </a>
        </div>
      )}
    </header>
  )
}

export default Header
