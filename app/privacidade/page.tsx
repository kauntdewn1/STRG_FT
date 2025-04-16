import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Stronger Fitness',
  description: 'Política de privacidade do site Stronger Fitness',
}

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-stronger-black text-white">
      <section className="py-20">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
            <p className="mb-6">
              A Stronger Fitness está comprometida em proteger a privacidade dos seus usuários. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Informações Coletadas</h2>
            <p className="mb-6">
              Podemos coletar informações como nome, e-mail, telefone e endereço quando você preenche formulários em nosso site ou entra em contato conosco.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Uso das Informações</h2>
            <p className="mb-6">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Responder às suas solicitações</li>
              <li>Enviar comunicações sobre nossos serviços</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Cumprir obrigações legais</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">4. Compartilhamento de Informações</h2>
            <p className="mb-6">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Segurança</h2>
            <p className="mb-6">
              Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Seus Direitos</h2>
            <p className="mb-6">
              Você tem o direito de:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações imprecisas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Retirar seu consentimento para o processamento de dados</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
            <p className="mb-6">
              Utilizamos cookies para melhorar sua experiência no site. Você pode controlar o uso de cookies através das configurações do seu navegador.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Alterações na Política</h2>
            <p className="mb-6">
              Reservamo-nos o direito de modificar esta política a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.
            </p>

            <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
            <p className="mb-6">
              Se você tiver dúvidas sobre esta política ou sobre como tratamos suas informações, entre em contato conosco através do formulário de contato ou por telefone.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 