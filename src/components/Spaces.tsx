
import SpaceCard from './SpaceCard'

const espacos = [
  {
    id: 1,
    titulo: 'Sala privativa',
    descricao: 'Uma proposta de ambiente reservado para atividades profissionais.',
    imagem: '/images/sala-privativa.jpg'
  },
  {
    id: 2,
    titulo: 'Sala de reuniões',
    descricao: 'Uma proposta de espaço para encontros e reuniões profissionais.',
    imagem: '/images/sala-reuniao.jpg'
  },
  {
    id: 3,
    titulo: 'Espaço corporativo',
    descricao: 'Uma proposta de ambiente versátil para diferentes negócios.',
    imagem: '/images/espaco-corporativo.jpg'
  }
]

function Spaces() {
  return (
    <section
      id="espacos"
      className="bg-[#101115] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A66A]">
            Conheça a Cristal
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Nossos Espaços
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Explore possibilidades de ambientes profissionais
            para o seu negócio.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {espacos.map((espaco) => (
            <SpaceCard
              key={espaco.id}
              titulo={espaco.titulo}
              descricao={espaco.descricao}
              imagem={espaco.imagem}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Spaces
