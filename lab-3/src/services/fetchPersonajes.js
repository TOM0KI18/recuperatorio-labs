export const getPersonajes = async () => {
  const url = "https://rickandmortyapi.com/api/character";

  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error("Error al cargar personajes");
  }

  const { results = [] } = await respuesta.json();

  const personajesNuevos = results.map((personaje) => {
    return {
      id: personaje.id,
      name: personaje.name,
      status: personaje.status,
      species: personaje.species,
      image: personaje.image,
    };
  });

  return personajesNuevos;
};