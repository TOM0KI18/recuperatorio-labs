import PersonajeCard from "./PersonajeCard";

const PersonajeList = ({ personajes, favoritos, onToggleFavorito }) => {
  return (
    <div className="grid">
      {personajes.map((personaje) => {
        const esFavorito = favoritos.some((f) => f.id === personaje.id);

        return (
          <PersonajeCard
            key={personaje.id}
            personaje={personaje}
            esFavorito={esFavorito}
            onToggleFavorito={onToggleFavorito}
          />
        );
      })}
    </div>
  );
};

export default PersonajeList;