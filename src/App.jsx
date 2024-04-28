import { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Search from "./components/Search";
import ListaMedicamentos from "./components/ListaMedicamentos";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://127.0.0.1:3000/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json(res))
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-screen-xl m-auto">
        <Title />
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        <ListaMedicamentos data={data} search={search} />
      </main>
    </>
  );
}

export default App;
