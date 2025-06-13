import Link from 'next/link'

export default function Contato() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-stronger-black text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Entre em Contato</h1>
          <p className="text-xl max-w-3xl">
            Estamos aqui para ajudar você a alcançar seus objetivos. Preencha o formulário abaixo e entraremos em contato.
          </p>
        </div>
      </section>


      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Unidade I</h3>
              <p className="text-gray-700 mb-4">
                Av. das Nações, Qd 40 - Lt 31 - Campos Elíseos,<br />
                Aparecida de Goiânia - GO, 74959-003
              </p>
              <Link 
                href="https://g.co/kgs/CBQnJKE"
                target="_blank"
                className="text-stronger-red hover:text-stronger-red-dark"
              >
                Ver no mapa
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Unidade II</h3>
              <p className="text-gray-700 mb-4">
                Av. Rita Campos, SN - Quadra 06 Lote 03<br />
                Aparecida de Goiânia, GO, 74973-162
              </p>
              <Link 
                href="https://g.co/kgs/Hrhb5Xg"
                target="_blank"
                className="text-stronger-red hover:text-stronger-red-dark"
              >
                Ver no mapa
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <div className="space-y-2">
                <Link 
                  href="https://www.instagram.com/ctstrongerfitness"
                  target="_blank"
                  className="block text-stronger-red hover:text-stronger-red-dark"
                >
                  Instagram
                </Link>
                <Link 
                  href="https://wa.me/5562982935040"
                  target="_blank"
                  className="block text-stronger-red hover:text-stronger-red-dark"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 