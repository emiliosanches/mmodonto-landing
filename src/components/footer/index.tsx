import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="bg-teal-50 text-sm text-gray-700 px-6 py-10"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Localização</h4>
          <a
            href="https://maps.app.goo.gl/A35s9VEX6LBRP1tK9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver localização da clínica no Google Maps"
            className="underline"
          >
            <MapPin className="inline" size={16} /> Rua Caetés, 993 - Centro -
            Tupã - SP
          </a>
        </div>
        <nav role="navigation" aria-labelledby="footer-links-heading">
          <h4 className="font-semibold mb-2" id="footer-links-heading">
            Links
          </h4>
          <ul>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/clinica">A Clínica</Link>
            </li>
            <li>
              <Link href="/profissionais">Profissionais (Dentistas)</Link>
            </li>
            <li>
              <Link href="/tratamentos">Tratamentos</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <p>
            (14) 99702-7365
            <br />
            (14) 99877-2200
            <br />
            sp.tupa@mmodonto.com.br
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Siga-nos</h4>
          <a
            href="https://instagram.com/mmodontotupa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1"
          >
            <Image
              src="/assets/icons/instagram.png"
              alt="Instagram da M&M Odonto"
              className="w-6 h-6"
              width={24}
              height={24}
            />
            @mmodontotupa
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-10">
        Desenvolvido por:{" "}
        <a
          href="https://www.linkedin.com/in/emiliosanches/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Emilio Sanches (abre em nova aba)"
          className="underline"
        >
          Emilio Sanches
        </a>
      </p>
    </footer>
  );
}
