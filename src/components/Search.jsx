import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

export default function Search({ value, onChange }) {
  return (
    <div className="grid justify-center mt-4">
      <div className="flex">
        <p className="text-2xl text-zinc-700 pb-4">Pesquisar</p>
        <MagnifyingGlass size={20} className="grid items-baseline ml-2 mt-1" />
      </div>
      <form action="#">
        <input
          className="w-[763px] outline-none p-2 border rounded-xl border-gray-400"
          type="text"
          placeholder="Pesquiser por medicamento ou laboratório"
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
