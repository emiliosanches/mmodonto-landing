import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const tratamentos = [
  {
    id: "aparelho-ortodontico",
    title: "Aparelho Ortodôntico",
    description:
      "Instalação e manutenção de aparelhos para correção dos dentes e mordida.",
    image: "/assets/images/tratamentos/aparelho-ortodontico.png",
  },
  {
    id: "restauracao",
    title: "Restauração",
    description:
      "Tratamento para recuperar dentes danificados por cáries ou fraturas.",
    image: "/assets/images/tratamentos/aparelho-ortodontico.png",
  },
  {
    id: "canal",
    title: "Canal",
    description:
      "Endodontia para remoção da polpa dentária inflamada ou infectada.",
    image: "/assets/images/tratamentos/aparelho-ortodontico.png",
  },
  {
    id: "facetas",
    title: "Facetas",
    description:
      "Revestimento estético para melhorar forma, cor e alinhamento dos dentes.",
    image: "/assets/images/tratamentos/aparelho-ortodontico.png",
  },
  {
    id: "protese",
    title: "Próteses",
    description:
      "Próteses fixas e removíveis para reabilitação da mastigação e estética.",
    image: "/assets/images/tratamentos/aparelho-ortodontico.png",
  },
  {
    id: "extracao",
    title: "Extração Dentária",
    description:
      "Extração de dentes comprometidos de forma segura e confortável.",
    image: "/assets/images/tratamentos/aparelho-ortodontico.png",
  },
];

export default function Tratamentos() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">Tratamentos</h1>
      <p className="text-gray-700 mb-10 max-w-3xl">
        Conheça os principais tratamentos que oferecemos em nossa clínica.
        Cuidamos do seu sorriso com tecnologia, qualidade e acolhimento.
      </p>

      <div className="flex flex-col gap-16">
        {tratamentos.map((t, index) => (
          <div
            key={t.id}
            id={t.id}
            className={cn(
              "flex flex-col md:flex-row gap-6 md:gap-10 bg-gray-50 py-4 px-2 shadow-md self-start max-w-2xl scroll-mt-20",
              index % 2 === 1 && "md:flex-row-reverse self-end"
            )}
          >
            <div className="relative w-full aspect-[3/2] md:w-48 md:h-32">
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="rounded-xl object-cover w-full h-auto shadow-sm"
              />
            </div>
            <div
              className={cn(
                "w-full md:w-1/2",
                index % 2 === 1 && "md:text-right"
              )}
            >
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">
                {t.title}
              </h3>
              <p className="text-gray-600 text-base">{t.description}</p>
              <a
                href={`https://wa.me/5514997027365?text=${encodeURIComponent(
                  `Olá! Vim pelo site, tenho interesse em ${t.title}`
                )}`}
                className="text-primary underline inline-flex gap-1 items-center"
              >
                Agende pelo WhatsApp <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
