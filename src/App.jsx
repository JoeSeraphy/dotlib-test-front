import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json(res))
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.loig(err));
  }, []);

  return (
    <>
      <header className="max-w-screen-xl m-auto py-4">
        <div className="flex justify-between">
          <img src="logo.png" alt="logo" />
          <span>Test-frontend</span>
        </div>
      </header>
      <main className="max-w-screen-xl m-auto">
        <h1 className="text-4xl text-zinc-700 text-center">
          Bulário Eletrónico
        </h1>
        <div className="grid justify-center mt-4">
          <p className="text-2xl text-zinc-700 pb-4">Pesquisar</p>

          <form action="#">
            <input
              className="w-[763px] outline-none p-2 border rounded-xl border-gray-400"
              type="text"
              placeholder="pesquise por medicamento ou laboratório"
            />
          </form>
        </div>
        <section className="grid grid-cols-5 gap-3  mt-4">
          {data
            .filter(
              (medicamento) =>
                medicamento.name.toLowerCase().includes(search.toLowerCase()) ||
                medicamento.company.toLowerCase().includes(search.toLowerCase())
            )
            .map((medicamento) => (
              <div
                key={medicamento.id}
                className="w-[250px] bg-slate-50 shadow rounded-sm"
              >
                <div className="flex justify-between p-1 items-center">
                  <span>Medicamento</span>
                  <span className="text-sm bg-[#99B933] rounded-md p-1 text-white">
                    Nº: {medicamento.documents[0].expedient}
                  </span>
                </div>
                <div className="bg-slate-50">
                  <p className="text-center text-3xl text-zinc-900 px-1 py-9">
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
                    <p className="">{medicamento.active_principles[0].name}</p>
                  </div>
                  <p className="" key={medicamento.documents[0].id}>
                    {medicamento.documents[0].type}
                  </p>
                  <p className="">{medicamento.published_at}</p>
                </div>
                <p className="">
                  <a href="#" target="_blank" className="text-white">
                    Bula
                  </a>
                </p>
              </div>
            ))}
        </section>
      </main>
    </>
  );
}

export default App;
