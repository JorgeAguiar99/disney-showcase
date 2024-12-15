import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DisplayCard from "../components/DisplayCard";
import SearchText from "../components/SearchText";

function Home() {
  const [caracters, setCaracters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCaracters = async (searchTerm = "") => {
    setLoading(true);
    try {
      const url = searchTerm
        ? `https://api.disneyapi.dev/character?name=${encodeURIComponent(
            searchTerm
          )}`
        : "https://api.disneyapi.dev/character";

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch characters");
      const data = await response.json();
      setCaracters(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaracters();
  }, []);

  return (
    <div>
      <Navbar onSearch={fetchCaracters} />
      {loading ? (
        <SearchText>Carregando...</SearchText>
      ) : caracters.length == 0 ? (
        <SearchText>Nenhum resultado encontrado.</SearchText>
      ) : (
        <div className="w-9/12 pt-16 mx-auto grid auto-rows-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14">
          {caracters.map((caracter) => (
            <DisplayCard key={caracter._id} props={caracter} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
