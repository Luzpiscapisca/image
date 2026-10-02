"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const acessarGaleria = () => {
    router.push("/galeria");
  };

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 p-6">
      <img
        src="/galinha.jpg"
        alt="Foto de perfil"
        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-5"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        🐣 Pó Pó! 🐔
      </h1>
      {/* Ovos decorativos */}
<div className="absolute top-10 left-10 w-7 h-9 rounded-[50%] bg-[#D6A85F] opacity-90 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] rotate-12">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F3D79B] opacity-70"></div>
</div>

<div className="absolute top-20 right-20 w-6 h-8 rounded-[50%] bg-[#C9954A] opacity-85 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] -rotate-12">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F3D79B] opacity-70"></div>
</div>

<div className="absolute top-1/3 left-20 w-8 h-10 rounded-[50%] bg-[#E0B66D] opacity-85 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] rotate-6">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F5DFA8] opacity-70"></div>
</div>

<div className="absolute top-1/3 right-1/4 w-7 h-9 rounded-[50%] bg-[#C9954A] opacity-80 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] -rotate-6">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F3D79B] opacity-70"></div>
</div>

<div className="absolute top-1/2 left-1/3 w-6 h-8 rounded-[50%] bg-[#D6A85F] opacity-85 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] rotate-12">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F5DFA8] opacity-70"></div>
</div>

<div className="absolute top-1/2 right-10 w-8 h-10 rounded-[50%] bg-[#E0B66D] opacity-85 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] -rotate-12">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F5DFA8] opacity-70"></div>
</div>

<div className="absolute bottom-20 left-16 w-7 h-9 rounded-[50%] bg-[#C9954A] opacity-85 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] rotate-6">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F3D79B] opacity-70"></div>
</div>

<div className="absolute bottom-10 right-20 w-6 h-8 rounded-[50%] bg-[#D6A85F] opacity-80 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] -rotate-6">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F5DFA8] opacity-70"></div>
</div>

<div className="absolute bottom-1/3 left-1/4 w-8 h-10 rounded-[50%] bg-[#E0B66D] opacity-80 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] rotate-12">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F5DFA8] opacity-70"></div>
</div>

<div className="absolute bottom-1/4 right-1/3 w-5 h-7 rounded-[50%] bg-[#C9954A] opacity-85 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] -rotate-12">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F3D79B] opacity-70"></div>
</div>

<div className="absolute top-16 left-1/2 w-5 h-7 rounded-[50%] bg-[#D6A85F] opacity-80 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] rotate-6">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F5DFA8] opacity-70"></div>
</div>

<div className="absolute bottom-16 right-1/2 w-7 h-9 rounded-[50%] bg-[#E0B66D] opacity-80 shadow-[2px_3px_0px_rgba(40,20,10,0.25)] rotate-12">
  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#F5DFA8] opacity-70"></div>
</div>



      <button
        onClick={() => router.push("/galeria")}
        className="relative z-10 px-6 py-2.5 bg-amber-700 text-white font-medium rounded-lg shadow-md hover:bg-amber-800 transition duration-200"
      >
        Acesse a galeria
      </button>
    </div>
  );
}