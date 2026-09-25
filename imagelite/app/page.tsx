"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const acessarGaleria = () => {
    router.push("/galeria");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Olá!☀️
      </h1>

      <button
        onClick={acessarGaleria}
        className="px-6 py-2.5 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
      >
        Acessar Galeria
      </button>
    </div>
  );
}