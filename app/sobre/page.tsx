import Image from 'next/image'
import Link from 'next/link'

export default function Sobre() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-stronger-black text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Sobre a Stronger Fitness</h1>
          <p className="text-xl max-w-3xl">
            O MAIOR Centro de Treinamento de Alta Performance do Estado de Goiás!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg text-gray-700 mb-6">
                Transformar vidas através do treinamento de alta performance, combinando força, inteligência e tecnologia.
              </p>
              <p className="text-lg text-gray-700">
                Na Stronger Fitness, acreditamos que cada pessoa tem um potencial ilimitado. Nossa missão é ajudar você a alcançar seus objetivos, seja para competição, saúde ou qualidade de vida.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/CARD_ATHLETE_1_dyb52l.png"
                alt="Atleta Stronger Fitness"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-stronger-red">Excelência</h3>
              <p className="text-gray-700">
                Buscamos a excelência em tudo o que fazemos, desde o atendimento até os resultados dos nossos alunos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-stronger-red">Inovação</h3>
              <p className="text-gray-700">
                Estamos sempre à frente, utilizando as mais modernas tecnologias e metodologias de treinamento.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-stronger-red">Comunidade</h3>
              <p className="text-gray-700">
                Construímos uma comunidade forte e unida, onde todos se apoiam para alcançar seus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stronger-red text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Venha fazer parte da nossa história</h2>
          <Link href="/contato" className="btn-secondary">
            Entre em Contato
          </Link>
        </div>
      </section>
    </main>
  )
} 