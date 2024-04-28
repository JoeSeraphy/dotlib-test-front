import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { useEffect, useState } from "react";
const bula = "api/public/pdf_sample.pdf";

export default function ListaMedicamentos({ data, search }) {
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 10;
  const lastPage = currentPage * recordsPerPage;
  const firstPage = lastPage - recordsPerPage;
  const records = data.slice(firstPage, lastPage);
  const theLastPage = 3;
  const theFisrtPage = 1;

  function prePage() {
    if (currentPage !== firstPage) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  data.sort((a, b) => a.published_at.localeComapre(b.published_at));

  return (
    <div>
      <section className="grid justify-center gap-4 my-7 lg:grid-cols-2 xl:grid-cols-3">
        {records
          .filter(
            (medicamento) =>
              medicamento.name.toLowerCase().includes(search.toLowerCase()) ||
              medicamento.company.toLowerCase().includes(search.toLowerCase()),
          )
          .map((medicamento) => (
            <div
              key={medicamento.id}
              className="w-96 mt-2 shadow rounded-sm lg:mx-auto"
            >
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
                  <span className="text-sm">Data de Publicação:</span>
                  <p className="text-base">
                    {format(medicamento.published_at, "P", { locale: ptBR })}
                  </p>
                </div>
              </div>
              <div className="bg-[#99B933] text-center py-3 flex  justify-center items-baseline align-bottom">
                <a href={bula} target="_blank" className="text-white text-lg">
                  Bula
                </a>
              </div>
            </div>
          ))}
      </section>
      <nav className="gris my-4">
        <ul className="flex justify-around">
          <li
            className={`${
              currentPage === theFisrtPage ? "hidden" : ""
            } flex items-center bg-[#99B933] py-2 px-3 rounded-lg text-white text-sm`}
          >
            <ArrowCircleLeft size={18} className="mr-2" />
            <a href="#" onClick={prePage}>
              Anterior
            </a>
          </li>
          <li
            className={`${
              currentPage === theLastPage ? "hidden" : ""
            } flex items-center bg-[#99B933] py-2 px-3 rounded-lg text-white text-sm`}
          >
            <a href="#" onClick={nextPage}>
              Próximo
            </a>
            <ArrowCircleRight size={18} className="ml-2" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
