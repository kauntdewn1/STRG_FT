import { Metadata } from 'next'
import ParallaxImage from '@/components/ParallaxImage'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Stronger Fitness',
  description: 'Conheça nossa política de privacidade e como protegemos seus dados.',
}

export default function PoliticaPrivacidadePage() {
  return (
    <main className="min-h-screen">
      <section className="relative h-[40vh]">
        <ParallaxImage
          src="/images/privacy-hero.jpg"
          alt="Proteção de dados"
          className="h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-xl md:text-2xl">Última atualização: 01/01/2024</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2>1. Introdução</h2>
          <p>
            A Stronger Fitness está comprometida em proteger a privacidade e a segurança dos dados pessoais de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você utiliza nossos serviços.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          <ul>
            <li>Informações de identificação (nome, e-mail, telefone)</li>
            <li>Dados de pagamento</li>
            <li>Informações de saúde e condicionamento físico</li>
            <li>Dados de uso do site e aplicativo</li>
            <li>Informações de localização</li>
          </ul>

          <h2>3. Como Usamos suas Informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Personalizar sua experiência</li>
            <li>Processar pagamentos</li>
            <li>Enviar comunicações importantes</li>
            <li>Garantir a segurança de nossos serviços</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas com:
          </p>
          <ul>
            <li>Prestadores de serviços que nos auxiliam em nossas operações</li>
            <li>Autoridades legais quando exigido por lei</li>
            <li>Com seu consentimento explícito</li>
          </ul>

          <h2>5. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2>6. Seus Direitos</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Acessar suas informações pessoais</li>
            <li>Corrigir dados imprecisos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Retirar seu consentimento</li>
            <li>Exportar seus dados</li>
          </ul>

          <h2>7. Cookies e Tecnologias Similares</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site e personalizar conteúdo.
          </p>

          <h2>8. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta política periodicamente. Notificaremos você sobre alterações significativas através de nosso site ou por e-mail.
          </p>

          <h2>9. Contato</h2>
          <p>
            Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail: privacidade@strongerfitness.com
          </p>
        </div>
      </section>
    </main>
  )
} 