import React from "react";

export default function ListaMedicamentos({ data, search }) {
  return (
    <div>
      <section className="grid grid-cols-3 gap-4  my-4">
        {data
          .filter(
            (medicamento) =>
              medicamento.name.toLowerCase().includes(search.toLowerCase()) ||
              medicamento.company.toLowerCase().includes(search.toLowerCase())
          )
          .map((medicamento) => (
            <div key={medicamento.id} className="w-96 shadow rounded-sm">
              <div className="flex justify-between p-1 items-center">
                <span>Medicamento</span>
                <span className="text-sm bg-[#99B933] rounded-md p-1 text-white">
                  Nº: {medicamento.documents[0].expedient}
                </span>
              </div>
              <div className="">
                <p className="text-center text-lg font-semibold text-zinc-900 px-1 py-9">
                  {medicamento.name}
                </p>
              </div>
              <div className="bg-zinc-900 text-white p-1">
                <div className="border-t">
                  <span className="text-sm">Laboratório:</span>
                  <p className="text-base">{medicamento.company}</p>
                </div>
                <div className="border-t">
                  <span className="text-sm">Ativos Principais:</span>
                  <p className="text-base">
                    {medicamento.active_principles[0].name}
                  </p>
                </div>
                <div className="border-t">
                  <span className="text-sm">Uso:</span>
                  <p className="text-base">{medicamento.documents[0].type}</p>
                </div>
                <div className="border-t">
                  <span className="text-sm">Data de Publicação</span>
                  <p className="text-base">{medicamento.published_at}</p>
                </div>
              </div>
              <div className="bg-[#99B933] text-center py-3 flex  justify-center items-baseline align-bottom">
                <a href="#" target="_blank" className="text-white text-lg">
                  Bula
                </a>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
