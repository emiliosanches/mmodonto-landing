import Image from "next/image";

type Professional = {
  name: string;
  specialization: string;
  cro: string;
  picture: string;
};

const professionals: Professional[] = [
  {
    name: "Dra. Camila Oliveira",
    specialization: "Ortodontia",
    cro: "CRO-SP 123456",
    picture: "/assets/images/profissionais/naiene.jpg",
  },
  {
    name: "Dr. Rafael Santos",
    specialization: "Endodontia",
    cro: "CRO-SP 234567",
    picture: "/assets/images/profissionais/naiene.jpg",
  },
  {
    name: "Dra. Mariana Lopes",
    specialization: "Dentística",
    cro: "CRO-SP 345678",
    picture: "/assets/images/profissionais/naiene.jpg",
  },
  {
    name: "Dr. Eduardo Lima",
    specialization: "Prótese Dentária",
    cro: "CRO-SP 456789",
    picture: "/assets/images/profissionais/naiene.jpg",
  },
];

export default function ProfissionaisPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {professionals.map((prof) => (
          <div
            key={prof.name}
            className="bg-white rounded-2xl shadow p-4 text-center hover:shadow-lg transition"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={prof.picture}
                alt={prof.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">{prof.name}</h2>
            <p className="text-sm text-gray-600">{prof.specialization}</p>
            <p className="text-xs text-gray-500 mt-1">{prof.cro}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
