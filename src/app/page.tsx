import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const serviceAreas = [
  {
    link: "/tratamentos#aparelho-ortodontico",
    title: "ORTODONTIA",
    desc: "Corrige a posição dos dentes e maxilar, visando a harmonia da face.\nVenha melhorar a função dentária e a estética do seu sorriso.",
    icon: (
      <Image
        src="/assets/icons/ortodontia.png"
        alt="Ícone de um dente com aparelho ortodôntico"
        width={36}
        height={36}
      />
    ),
  },
  {
    link: "/tratamentos#dentistica",
    title: "DENTÍSTICA",
    desc: "Clareamento e restaurações estéticas.\nTratamento de cáries, fraturas, descolorações, e muito mais. Deixe seu sorriso ainda mais bonito!",
    icon: (
      <Image
        src="/assets/icons/dentistica.png"
        alt="Ícone de um dente brilhando"
        width={36}
        height={36}
      />
    ),
  },
  {
    link: "/tratamentos#endodontia",
    title: "ENDODONTIA",
    desc: "Tratamento de lesões na polpa e canais.\nPrecisando de um tratamento mais profundo? Nossos profissionais estão capacitados para te atender!",
    icon: (
      <Image
        src="/assets/icons/endodontia.png"
        alt="Ícone de um dente com com a polpa representada"
        width={36}
        height={36}
      />
    ),
  },
  {
    link: "/tratamentos#protese",
    title: "PRÓTESE",
    desc: "Reposição de dentes ausentes ou desgastados.\nFazemos a instalação e manutenção de próteses dentárias fixas e removíveis para restaurar seu sorriso e sua autoestima.",
    icon: (
      <Image
        src="/assets/icons/protese.png"
        alt="Ícone de uma prótese dentária"
        width={36}
        height={36}
      />
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-primary text-white px-6 flex flex-col-reverse justify-center items-center gap-2 sm:flex-row">
        <Image
          src="/assets/images/sorriso.png"
          alt="Imagem de mulher sorrindo"
          height={450}
          width={300}
          className="h-[300px] w-[200px] md:h-[450px] md:w-[300px]"
        />
        <div className="max-w-4xl pt-12 text-center sm:pb-12 flex flex-col items-center gap-4">
          <Image
            src="/assets/logo/mmodonto-circular-branco.png"
            alt="Logo da M&M Odonto"
            width={128}
            height={128}
          />
          <h1 className="text-4xl font-bold ">SORRIA COM CONFIANÇA</h1>
          <p className="text-lg  max-w-[400px]">
            Venha cuidar do seu sorriso com a gente,{" "}
            <span className="text-green-300 font-semibold">
              agende sua avaliação agora mesmo!
            </span>
          </p>
          <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5514997027365"
              className="underline flex gap-1"
            >
              <Image
                src="/assets/icons/whatsapp-white.png"
                alt="Ícone do WhatsApp"
                width={24}
                height={24}
              />{" "}
              (14) 99702-7365
            </a>
            <a
              href="https://wa.me/5514998772200"
              className="underline flex gap-1"
            >
              <Image
                src="/assets/icons/whatsapp-white.png"
                alt="Ícone do WhatsApp"
                width={24}
                height={24}
              />{" "}
              (14) 99877-2200
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-10">
          Nossas áreas de atendimento
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto justify-center">
          {serviceAreas.map((item) => (
            <Link href={item.link} key={item.title}>
              <Card className="rounded-2xl shadow-sm group hover:bg-primary hover:text-white transition-all">
                <CardContent className="p-6 cursor-pointer">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold flex items-center mb-0">
                      {item.icon} {item.title}
                    </h3>

                    <ChevronRight
                      color="white"
                      className="relative left-6 color-white duration-500 opacity-0 group-hover:opacity-100 group-hover:left-0"
                    />
                  </div>
                  <p className="text-sm group-hover:text-gray-100 whitespace-pre-line">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Link
          href="/tratamentos"
          className="mt-4 text-lg font-bold text-teal-700"
        >
          Ver tudo <ArrowRight className="inline" />
        </Link>

        <div className="text-center mt-10">
          <Link
            href="https://wa.me/5514997027365"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 bg-primary hover:bg-teal-700 text-white px-6 py-2 rounded-xl text-base cursor-pointer"
          >
            <Image
              src="/assets/icons/whatsapp-white.png"
              alt="Ícone do WhatsApp"
              width={24}
              height={24}
            />
            Agendar agora
          </Link>
        </div>
      </section>
    </main>
  );
}
