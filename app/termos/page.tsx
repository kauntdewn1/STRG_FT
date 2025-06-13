import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso | Stronger Fitness',
  description: 'Termos de uso do site Stronger Fitness',
}

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-stronger-black text-white">
      <section className="py-20">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-6">
              Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, por favor, não use nosso site.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Uso do Site</h2>
            <p className="mb-6">
              O conteúdo deste site é apenas para fins informativos. A Stronger Fitness reserva-se o direito de modificar ou descontinuar qualquer aspecto ou recurso do site a qualquer momento.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Propriedade Intelectual</h2>
            <p className="mb-6">
              Todo o conteúdo, incluindo textos, imagens, logotipos e outros materiais presentes neste site, são propriedade da Stronger Fitness e estão protegidos por leis de direitos autorais.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Links para Terceiros</h2>
            <p className="mb-6">
              Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Limitação de Responsabilidade</h2>
            <p className="mb-6">
              A Stronger Fitness não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou incapacidade de usar este site.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Alterações nos Termos</h2>
            <p className="mb-6">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Contato</h2>
            <p className="mb-6">
              Se você tiver alguma dúvida sobre estes termos, entre em contato conosco através do formulário de contato ou por telefone.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 