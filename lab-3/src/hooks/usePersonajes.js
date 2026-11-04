import { useEffect, useState } from "react";
import { getPersonajes } from "../services/fetchPersonajes";

const usePersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPersonajes();
        setPersonajes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return {
    personajes,
    loading,
    error,
  };
};

export default usePersonajes;