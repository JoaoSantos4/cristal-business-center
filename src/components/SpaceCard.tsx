
type SpaceCardProps = {
  titulo: string
  descricao: string
  imagem: string
}

function SpaceCard({
  titulo,
  descricao,
  imagem
}: SpaceCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-[#C8A66A]/20 bg-[#1B1B1D]">

      <div className="overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-[#C8A66A]">
          {titulo}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-gray-300">
          {descricao}
        </p>

        <a
          href="#contato"
          className="text-sm font-semibold text-[#C8A66A] hover:text-white"
        >
          Saiba mais →
        </a>
      </div>
    </article>
  )
}

export default SpaceCard
