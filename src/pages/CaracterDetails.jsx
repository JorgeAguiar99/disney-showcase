import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Collapse from "../components/Collapse";

function CaracterDetails() {
  const [caracter, setCaracter] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function fetchCaracter() {
    try {
      const url =
        "https://api.disneyapi.dev/character/" +
        window.location.pathname.split("/")[2];

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch character");
      const data = await response.json();
      setCaracter(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCaracter();
  }, []);

  return (
    <div className="mb-16">
      <Navbar />
      <div className="text-white pt-10 pl-16">
        <button
          className="cursor-pointer flex flex-row items-center"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="size-12" />
          Retornar
        </button>
      </div>
      {loading ? (
        <h1 className="text-center text-white text-5xl">Carregando</h1>
      ) : (
        <div className="text-white w-72 justify-self-center pt-12">
          <img
            src={caracter.imageUrl}
            className="rounded-xl w-48 h-56 justify-self-center"
          />
          <h1 className="font-bold text-2xl pt-2 text-center pb-5">
            {caracter.name}
          </h1>
          <Collapse title="Filmes" items={caracter.films} />
          <Collapse title="Curta Metragem" items={caracter.shortFilms} />
          <Collapse title="Programas de TV" items={caracter.tvShows} />
          <Collapse title="Jogos" items={caracter.videoGames} />
          <Collapse
            title="Atrações no Parque"
            items={caracter.parkAttractions}
          />
          <Collapse title="Aliados" items={caracter.allies} />
          <Collapse title="Inimigos" items={caracter.enemies} />
        </div>
      )}
    </div>
  );
}

export default CaracterDetails;
