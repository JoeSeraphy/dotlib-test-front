import React from "react";

export default function Search({ value, onChange }) {
  return (
    <div className="grid justify-center mt-4">
      <p className="text-2xl text-zinc-700 pb-4">Pesquisar</p>

      <form action="#">
        <input
          className="w-[763px] outline-none p-2 border rounded-xl border-gray-400"
          type="text"
          placeholder="pesquise por medicamento ou laboratório"
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
