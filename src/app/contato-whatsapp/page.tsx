"use client";

import { useEffect } from "react";

export default function ContatoWhatsApp() {
  useEffect(() => {
    window.location.href = "https://wa.me/5514997027365";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Redirecionando para o <span className="text-teal-700">WhatsApp</span>
          ...
        </h1>
        <p className="text-gray-600">
          Você será redirecionado para nosso contato no WhatsApp em instantes.
        </p>
        <p className="text-sm text-gray-500">
          Caso não seja redirecionado automaticamente,{" "}
          <a
            href="https://wa.me/5514997027365"
            className="text-teal-700 hover:text-teal-800 underline font-medium"
          >
            clique aqui
          </a>
          .
        </p>
      </div>
    </div>
  );
}
