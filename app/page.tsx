import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* AI Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stronger-red mb-4">
              🚀 A ACADEMIA DO FUTURO JÁ ESTÁ AQUI!
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A Stronger Fitness já se destaca pela infraestrutura de ponta. Agora, é hora de adicionar inteligência ao treino e se tornar referência absoluta no mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-stronger-black">
                Com a integração da IA, sua academia terá:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-stronger-red text-xl mr-2">✅</span>
                  <span className="text-gray-700">Mais alunos fidelizados e engajados com a tecnologia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stronger-red text-xl mr-2">✅</span>
                  <span className="text-gray-700">Diferencial de mercado para atrair bodybuilders e atletas sérios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stronger-red text-xl mr-2">✅</span>
                  <span className="text-gray-700">Resultados mais rápidos e treinos mais eficientes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stronger-red text-xl mr-2">✅</span>
                  <span className="text-gray-700">Monitoramento inteligente para evitar estagnação e lesões</span>
                </li>
              </ul>
            </div>

            <div className="bg-stronger-red/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-stronger-black mb-6">
                A pergunta final é: <span className="text-stronger-red">sua academia quer seguir no mesmo nível ou ser pioneira na revolução do fitness inteligente?</span>
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-lg">
                  <span className="text-stronger-red mr-2">🔹</span>
                  Seja a primeira academia hardcore a usar IA no Brasil!
                </p>
                <p className="flex items-center text-lg">
                  <span className="text-stronger-red mr-2">🔹</span>
                  Entre em contato e veja como implementar essa tecnologia agora.
                </p>
                <p className="text-xl font-bold text-stronger-red mt-6">
                  📍 Stronger Fitness – Onde a força encontra a inteligência.
                </p>
                <div className="mt-8">
                  <Link href="/contato" className="btn-primary">
                    Fale Conosco
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Stronger Fitness?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Treino Personalizado</h3>
              <p>Programas de treino gerados por IA adaptados às suas necessidades e objetivos.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Alta Performance</h3>
              <p>Estrutura completa e moderna para maximizar seus resultados.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">Tecnologia</h3>
              <p>Plataforma digital completa para acompanhar seu progresso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stronger-red text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto para transformar seu corpo?</h2>
          <Link href="/planos" className="btn-secondary">
            Comece Agora
          </Link>
        </div>
      </section>
    </main>
  );
}
