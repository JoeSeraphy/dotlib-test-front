import { MagnifyingGlass } from "@phosphor-icons/react";
import React from "react";

export default function Search({ value, onChange, action }) {
  return (
    <div className="px-4 mt-4 lg:grid">
      <div className="flex">
        <p className="text-xl xl:text-2xl text-zinc-700 pb-4">Pesquisar</p>
        <MagnifyingGlass size={20} className="grid items-baseline ml-2 mt-1" />
      </div>
      <form action="#">
        <input
          className="w-full outline-none p-2 border rounded-xl border-gray-400"
          type="search"
          placeholder="Pesquiser por medicamento ou laboratório"
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
