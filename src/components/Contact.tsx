
function Contact() {
  const endereco =
    'Av. Dr. Durval Nicolau, 2492 - Alegre, São João da Boa Vista - SP'

  const mapaUrl =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(endereco)

  return (
    <section
      id="contato"
      className="bg-[#101115] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8A66A]">
            Onde estamos
          </p>

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Localização & Contato
          </h2>

          <p className="mt-6 text-gray-400">
            Venha conhecer a Cristal Business Center.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Informações */}
          <div className="flex flex-col justify-center rounded-lg border border-[#C8A66A]/20 bg-[#1B1B1D] p-8 md:p-12">

            <h3 className="mb-6 text-2xl font-semibold text-[#C8A66A]">
              Visite nosso espaço
            </h3>

            <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
              Endereço
            </p>

            <address className="mb-8 not-italic leading-8 text-gray-200">
              Av. Dr. Durval Nicolau, 2492
              <br />
              Alegre
              <br />
              São João da Boa Vista - SP
              <br />
              CEP 13874-788
            </address>


{/* WhatsApp */}
<div className="mb-6">
  <h4 className="mb-2 text-sm uppercase tracking-widest text-[#C8A66A]">
    WhatsApp
  </h4>

  <a
    href="https://wa.me/5519978173030"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-200 transition hover:text-[#C8A66A]"
  >
    (19) 97817-3030
  </a>
</div>


{/* Instagram */}
<div className="mb-6">
  <h4 className="mb-2 text-sm uppercase tracking-widest text-[#C8A66A]">
    Instagram
  </h4>

  <a
    href="https://www.instagram.com/cristalbusinesscenter/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-200 transition hover:text-[#C8A66A]"
  >
    @cristalbusinesscenter
  </a>
</div>


{/* E-mail */}
<div className="mb-6">
  <h4 className="mb-2 text-sm uppercase tracking-widest text-[#C8A66A]">
    E-mail
  </h4>

  <a
    href="mailto:Palomag0118@icloud.com"
    className="break-all text-gray-200 transition hover:text-[#C8A66A]"
  >
    Palomag0118@icloud.com
  </a>
</div>

{/* Horários */}
<div className="mb-8">
  <h4 className="mb-3 text-sm uppercase tracking-widest text-[#C8A66A]">
    Horário de funcionamento
  </h4>

  <div className="space-y-2 text-gray-300">
    <div className="flex justify-between gap-4">
      <span>Segunda a sexta</span>
      <span>09h às 17h</span>
    </div>

    <div className="flex justify-between gap-4">
      <span>Sábado e domingo</span>
      <span>Fechado</span>
    </div>
  </div>
</div>

{/* Botão WhatsApp */}
<a
  href="https://wa.me/5519978173030?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20os%20espa%C3%A7os%20da%20Cristal%20Business%20Center."
  target="_blank"
  rel="noopener noreferrer"
  className="mb-4 inline-block w-fit rounded bg-[#C8A66A] px-7 py-4 text-center font-semibold text-black transition hover:bg-[#E0BF85]"
>
  Agende uma visita
</a>


            <a
              href={mapaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded bg-[#C8A66A] px-7 py-4 font-semibold text-black transition hover:bg-[#E0BF85]"
            >
              Como chegar
            </a>
          </div>

          {/* Mapa */}
          <div className="min-h-[350px] overflow-hidden rounded-lg border border-[#C8A66A]/20">
            <iframe
              title="Localização da Cristal Business Center"
              src={
                'https://www.google.com/maps?q=' +
                encodeURIComponent(endereco) +
                '&output=embed'
              }
              className="h-full min-h-[350px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
