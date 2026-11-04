const PersonajeCard = ({ personaje, esFavorito, onToggleFavorito }) => {
  const claseEstado = {
    Alive: "estado-alive",
    Dead: "estado-dead",
    unknown: "estado-unknown",
  }[personaje.status] || "estado-unknown";

  return (
    <div className={`card ${esFavorito ? "fav" : ""}`}>
      <img src={personaje.image} alt={personaje.name} />
      <h4>{personaje.name}</h4>
      <p className={`estado ${claseEstado}`}>{personaje.status}</p>
      <button onClick={() => onToggleFavorito(personaje)}>
        {esFavorito ? "Quitar" : "Favorito"}
      </button>
    </div>
  );
};

export default PersonajeCard;