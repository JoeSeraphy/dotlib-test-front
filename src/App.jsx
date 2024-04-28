import { useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Search from "./components/Search";
import ListaMedicamentos from "./components/ListaMedicamentos";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const api = "http://127.0.0.1:3000/data";

  async function getData() {
    try {
      const res = await axios.get(api);
      const data = res.data;
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  function sortDate() {
    return data.sort(
      (a, b) => new Date(a.published_at) - new Date(b.published_at),
    );
  }

  useEffect(() => {
    getData();
  }, [sortDate(), search]);

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
