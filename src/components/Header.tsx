import React from "react";

export function Header() {
  return (
    <div className="w-full flex-col text-center pt-10 md:pt-0">
      <h1 className="text-lg text-gray-100 font-bold">Bem vindo ao <span className="text-green-500">Border-previewer!</span></h1>
      <h2 className="text-md text-gray-100">
        Aqui você poderá visualizar como se comporta o <i className="text-green-500">border-radius</i>
      </h2>
    </div>
  );
}
