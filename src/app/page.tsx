import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const serviceAreas = [
  {
    title: "ORTODONTIA",
    desc: "Corrige o alinhamento dos dentes e a mordida.",
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
    title: "DENTÍSTICA",
    desc: "Clareamento e restaurações estéticas.",
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
    title: "ENDODONTIA",
    desc: "Tratamento de canal e polpas dentárias.",
    icon: (
      <Image
        src="/assets/icons/ortodontia.png"
        alt="Ícone de um dente com com a polpa representada"
        width={36}
        height={36}
      />
    ),
  },
  {
    title: "PRÓTESE",
    desc: "Reposição de dentes ausentes ou desgastados.",
    icon: (
      <Image
        src="/assets/icons/ortodontia.png" //TODO
        alt="Ícone de uma prótese dentária"
        width={36}
        height={36}
      />
    ),
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
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
            <Card key={item.title} className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  {item.icon} {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Link
          href="/tratamentos"
          className="mt-4 text-lg font-bold text-teal-700"
        >
          Ver tudo <ArrowRight className="inline" />
        </Link>

        <div className="text-center mt-10">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-xl text-base cursor-pointer ">
            <Image
              src="/assets/icons/whatsapp-white.png"
              alt="Ícone do WhatsApp"
              width={24}
              height={24}
            />
            Agendar agora
          </Button>
        </div>
      </section>
    </div>
  );
}
