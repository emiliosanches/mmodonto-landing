import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nossa Clínica",
  description:
    "Conheça nossa clínica em Tupã - SP. Temos dentistas qualificados para cuidar do seu sorriso e da sua saúde, comprometidos com seu bem-estar e um atendimento de excelência.",
};

export default function Clinica() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-16">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-0">
            Conheça a <span className="text-teal-700">M&M Odonto</span>
          </h1>

          <p className="text-gray-400 text-sm">CROSP-CL 14322</p>

          <p className="text-gray-700 text-lg">
            Localizada no coração de Tupã, nossa clínica foi projetada para
            oferecer conforto, tecnologia e um ambiente acolhedor. Nosso
            compromisso é com a sua saúde bucal e bem-estar.
          </p>
          <Link
            href="/profissionais"
            className="inline-flex gap-2 items-center bg-teal-700 text-white font-medium px-6 py-3 rounded-xl hover:bg-teal-800 transition"
          >
            Conheça nossos profissionais
            <ExternalLink size={20} />
          </Link>
        </div>
        <div className="flex items-center justify-center max-w-3xl w-10/12 h-64 overflow-hidden rounded-xl shadow-lg place-self-center">
          <Image
            src="/assets/images/storefront.jpg"
            width={768}
            height={854}
            alt="M&M Odonto - Clínica odontológica no centro de Tupã - SP"
          />
        </div>
      </section>

      <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
        <div className="flex items-center justify-center w-72 h-72 overflow-hidden rounded-full shadow-lg place-self-center">
          <Image
            src="/assets/images/profissionais/Naiene.jpg"
            width={300}
            height={300}
            alt="Doutora Naiene - Nova direção da M&M Odonto em Tupã/SP"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-teal-700">Nova gestão</h1>
          <p className="text-gray-700 text-lg max-w-3xl">
            Desde o final de 2024, a M&M Odonto vive uma nova fase. Sob nova
            gestão, reforçamos nosso compromisso com a qualidade no atendimento,
            a modernização da estrutura e a constante busca por aprimoramento
            nos serviços prestados. Seguimos dedicados a oferecer um ambiente
            acolhedor e tratamentos de excelência aos nossos pacientes.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">
          Onde estamos
        </h2>
        <p className="text-gray-700 mb-4">
          Rua Caetés, 993 - Centro - Tupã - SP
        </p>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.060557691695!2d-50.51731358844003!3d-21.932223279869365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9495b7ff958b2053%3A0x2ec0e766f5318cc5!2sM%26M%20ODONTO%20-%20ORTODONTIA%20E%20CL%C3%8DNICO%20GERAL!5e0!3m2!1spt-BR!2sbr!4v1746588707662!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
