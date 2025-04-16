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

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="typeform-widget" 
                data-url="https://form.typeform.com/to/YOUR_FORM_ID" 
                style={{ width: '100%', height: '500px' }}
              />
              <script src="https://embed.typeform.com/next/embed.js" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Unidade I</h3>
              <p className="text-gray-700 mb-4">
                Av. T-10, 1047 - St. Bueno<br />
                Goiânia - GO
              </p>
              <Link 
                href="https://maps.app.goo.gl/mfZafwiay8YcFHGaA"
                target="_blank"
                className="text-stronger-red hover:text-stronger-red-dark"
              >
                Ver no mapa
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Unidade II</h3>
              <p className="text-gray-700 mb-4">
                Av. T-10, 1047 - St. Bueno<br />
                Goiânia - GO
              </p>
              <Link 
                href="https://maps.app.goo.gl/5G3bD7sKYMwuW5Ki9"
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