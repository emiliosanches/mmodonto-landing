import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const tratamentos = [
  {
    id: "aparelho-ortodontico",
    title: "Aparelho Ortodôntico",
    description:
      "Instalação e manutenção de aparelhos ortodônticos para adultos e crianças, proporcionando correção do alinhamento dos dentes e mordida.",
    image: "/assets/images/tratamentos/aparelho-ortodontico.png",
  },
  {
    id: "dentistica",
    title: "Dentística",
    description:
      "Tratamentos funcionais e estéticos para seus dentes, como facetas, clareamentos e restauração de dentes cariados ou fraturados.",
    image: "/assets/images/tratamentos/dentistica.png",
  },
  {
    id: "endodontia",
    title: "Endodontia",
    description:
      'Também conhecido como "canal", é o tratamento de infecções ou inflamações profundas nos dentes, atingindo a polpa ou tecidos periapicais.',
    image: "/assets/images/tratamentos/endodontia.png",
  },
  {
    id: "protese",
    title: "Próteses e Implantes",
    description:
      "Próteses fixas e removíveis e implantes para reabilitação da mastigação e reconstrução estética do seu sorriso.",
    image: "/assets/images/tratamentos/implante-protese.png",
  },
  {
    id: "cirurgias",
    title: "Cirurgias",
    description:
      "Procedimentos cirúrgicos com segurança e conforto para você: extrações dentárias, cirurgias periodontais (gengivas), frenectomia (remoção de freio lingual) entre outros.",
    image: "/assets/images/tratamentos/cirurgias.png",
  },
  {
    id: "limpeza",
    title: "Limpezas",
    description:
      "Diferentes tipos de limpeza para manter a saúde do seu sorriso.\n" +
      "Profilaxia (placas bacterianas e manchas superficiais), tartarectomia (remoção de tártaro) e raspagem em campo aberto (limpeza cirúrgica, para casos de doença periodontal avançada)",
    image: "/assets/images/tratamentos/limpeza.png",
  },
];

export default function Tratamentos() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-teal-700 mb-4">Tratamentos</h1>
      <p className="text-gray-700 mb-10 max-w-3xl text-center">
        Conheça os principais tratamentos que oferecemos em nossa clínica.
        Cuidamos do seu sorriso com tecnologia, qualidade e acolhimento.
      </p>

      <div className="flex flex-col gap-16">
        {tratamentos.map((t, index) => (
          <div
            key={t.id}
            id={t.id}
            className={cn(
              "w-full flex flex-row gap-10 border-1 border-gray-100 rounded-xl shadow-md self-start scroll-mt-24 text-left min-h-56",
              index % 2 === 1 && "flex-row-reverse self-end text-right"
            )}
          >
            <div className="relative aspect-[3/2] min-h-56 self-stretch w-auto">
              <Image
                src={t.image}
                alt={t.title}
                fill
                className={cn(
                  "object-cover w-full h-auto shadow-sm",
                  index % 2 === 1 ? "rounded-r-xl" : "rounded-l-xl"
                )}
              />
            </div>
            <div className="w-full py-8 px-4">
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">
                {t.title}
              </h3>
              <p className="text-gray-600 text-base whitespace-pre-wrap">
                {t.description}
              </p>
              <a
                href={`https://wa.me/5514997027365?text=${encodeURIComponent(
                  `Olá! Vim pelo site da M&M Odonto e tenho interesse em ${t.title}`
                )}`}
                className="text-primary underline inline-flex gap-1 items-center mt-4"
              >
                Agende pelo WhatsApp <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
