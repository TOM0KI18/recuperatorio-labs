import { useState } from "react";
import PersonajeList from "./components/PersonajeList";
import FavoritosPanel from "./components/FavoritosPanel";
import usePersonajes from "./hooks/usePersonajes";

const App = () => {
  const { personajes, loading, error } = usePersonajes();

  const [favoritos, setFavoritos] = useState([]);

  const onToggleFavorito = (personaje) => {
    const existe = favoritos.some((f) => f.id === personaje.id);

    if (existe) {
      setFavoritos(favoritos.filter((f) => f.id !== personaje.id));
      return;
    }

    setFavoritos([...favoritos, personaje]);
  };

  const onQuitarFavorito = (personaje) => {
    setFavoritos(favoritos.filter((f) => f.id !== personaje.id));
  };

  return (
    <div>
      <h1>Rick and Morty - Favoritos</h1>

      <div className="layout">
        {loading && <p className="mensaje">Cargando...</p>}

        {!loading && error && (
          <p className="mensaje error">Error: {error}</p>
        )}

        {!loading && !error && (
          <PersonajeList
            personajes={personajes}
            favoritos={favoritos}
            onToggleFavorito={onToggleFavorito}
          />
        )}

        {!loading && !error && (
          <FavoritosPanel
            favoritos={favoritos}
            onQuitar={onQuitarFavorito}
          />
        )}
      </div>
    </div>
  );
};

export default App;