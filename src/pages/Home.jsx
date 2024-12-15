import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DisplayCard from "../components/DisplayCard";

function Home() {
  const [caracters, setCaracters] = useState([]);

  useEffect(() => {
    const fetchCaracters = async (link) => {
      link = !link ? "https://api.disneyapi.dev/character" : link;
      // Chamar a API
      const response = await fetch(link, {
        method: "GET",
      });
      const data = await response.json();

      setCaracters(data.data);
    };

    fetchCaracters();

    const inputSearch = document.getElementById("inputSearch");

    inputSearch.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (inputSearch.value == null || inputSearch.value == "") {
          fetchCaracters();
          return;
        }
        fetchCaracters(
          "https://api.disneyapi.dev/character?name=" +
            encodeURIComponent(inputSearch.value)
        );
      }
    });
  }, []);

  return (
    <div className="h-max bg-neutral-900">
      <Navbar />
      <div className="w-9/12 pt-16 mx-auto grid auto-rows-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-14">
        {caracters.map((caracter) => (
          <DisplayCard key={caracter._id} props={caracter} />
        ))}
      </div>
    </div>
  );
}

export default Home;
