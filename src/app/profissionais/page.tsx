import Image from "next/image";
import gridCss from "./professionals-grid.css";

type Professional = {
  name: string;
  specialization: string;
  cro: string;
  picture: string;
};

const professionals: Professional[] = [
  {
    name: "Dr. Lucas Monzane",
    specialization: "Ortodontia e Responsável Técnico",
    cro: "CRO/SP 108445",
    picture: "/assets/images/profissionais/Lucas.jpg",
  },
  {
    name: "Dr. Renan Lehm",
    specialization: "Endodontia",
    cro: "CRO/SP 137074",
    picture: "/assets/images/profissionais/Renan.jpg",
  },
  {
    name: "Dra. Naiene Sanches",
    specialization: "Clínico geral, atendimento infantil e dentística",
    cro: "CRO/SP 147910",
    picture: "/assets/images/profissionais/Naiene.jpg",
  },
  {
    name: "Dra. Letícia Passoni",
    specialization: "Cirurgias, implantes, próteses e clínico geral",
    cro: "CRO/SP 148038",
    picture: "/assets/images/profissionais/Leticia.jpg",
  },
  {
    name: "Dr. Fernando Nishida",
    specialization: "Próteses, cirurgias e clínico geral",
    cro: "CRO/SP 122501",
    picture: "/assets/images/profissionais/Fernando.jpg",
  },
];

export default function ProfissionaisPage() {
  return (
    <div className="max-w-[90rem] mx-auto px-20 py-12">
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-4">
        Nossos Profissionais
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-base">
        Conheça nossa equipe altamente qualificada e comprometida em oferecer o
        melhor atendimento para você e sua família.
        <br />
        Cada profissional da nossa clínica atua com excelência em sua
        especialidade, utilizando técnicas modernas e foco no bem-estar dos
        pacientes.
      </p>

      <style href={gridCss}></style>

      {/* grid container for fix broken layout on safari */}
      <div className="grid-container">
        <div className="grid gap-10 professionals-container">
          {professionals.map((prof) => (
            <div
              key={prof.name}
              className="bg-white rounded-2xl shadow p-4 text-center hover:shadow-lg transition grid-item"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={prof.picture}
                  alt={prof.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {prof.name}
              </h2>
              <p className="text-sm text-gray-600">{prof.specialization}</p>
              <p className="text-xs text-gray-500 mt-1">{prof.cro}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
