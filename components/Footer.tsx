import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-stronger-black text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/logo_stronger_3_dpsueq.png"
              alt="Stronger Fitness Logo"
              width={200}
              height={67}
              className="mb-4"
            />
            <p className="text-gray-400">
              O MAIOR Centro de Treinamento de Alta Performance do Estado de Goiás!
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Unidades</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://maps.app.goo.gl/mfZafwiay8YcFHGaA"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Unidade I
                </Link>
              </li>
              <li>
                <Link 
                  href="https://maps.app.goo.gl/5G3bD7sKYMwuW5Ki9"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Unidade II
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://wa.me/5562982935040"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp: (62) 98293-5040
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.instagram.com/ctstrongerfitness"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link 
                  href="https://linktr.ee/StrongerFitnessCT"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Linktree
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/atletas" className="text-gray-400 hover:text-white transition-colors">
                  Atletas
                </Link>
              </li>
              <li>
                <Link href="/planos" className="text-gray-400 hover:text-white transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stronger Fitness. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 