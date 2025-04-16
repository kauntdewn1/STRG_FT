import Image from 'next/image'
import Link from 'next/link'

export default function Atletas() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-stronger-black text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Nossos Atletas</h1>
          <p className="text-xl max-w-3xl">
            Conheça os atletas que fazem parte da família Stronger Fitness e suas conquistas.
          </p>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Athlete Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/CARD_ATHLETE_1_dyb52l.png"
                  alt="Atleta Stronger Fitness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nome do Atleta</h3>
                <p className="text-gray-700 mb-4">
                  Categoria: Bodybuilding<br />
                  Principais conquistas: Campeão estadual, vice-campeão nacional
                </p>
                <Link href="/atletas/1" className="text-stronger-red hover:text-stronger-red-dark">
                  Ver perfil completo
                </Link>
              </div>
            </div>

            {/* Athlete Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/CARD_ATHLETE_1_dyb52l.png"
                  alt="Atleta Stronger Fitness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nome do Atleta</h3>
                <p className="text-gray-700 mb-4">
                  Categoria: Powerlifting<br />
                  Principais conquistas: Recorde estadual, campeão nacional
                </p>
                <Link href="/atletas/2" className="text-stronger-red hover:text-stronger-red-dark">
                  Ver perfil completo
                </Link>
              </div>
            </div>

            {/* Athlete Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="/CARD_ATHLETE_1_dyb52l.png"
                  alt="Atleta Stronger Fitness"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nome do Atleta</h3>
                <p className="text-gray-700 mb-4">
                  Categoria: Crossfit<br />
                  Principais conquistas: Top 10 nacional, campeão regional
                </p>
                <Link href="/atletas/3" className="text-stronger-red hover:text-stronger-red-dark">
                  Ver perfil completo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stronger-red text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Quer fazer parte do nosso time?</h2>
          <Link href="/contato" className="btn-secondary">
            Entre em Contato
          </Link>
        </div>
      </section>
    </main>
  )
} 