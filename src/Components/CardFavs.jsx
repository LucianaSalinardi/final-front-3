import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const CardFavs = ({ name, username, id }) => {
  const { stateFavs, handleRemoveFavs } = useContext(ContextGlobal);

  //En Google Chrome hay que hacer click dos veces en boton aceptar al mostrar mensaje de alerta. En Mozilla funciona correctamente
  const removeFav = () => {
    if (stateFavs.favs.some((fav) => fav.id === id)) {
      const newFavs = stateFavs.favs.filter((fav) => fav.id !== id);
      handleRemoveFavs(newFavs);
      window.alert("Dentista eliminado con éxito!");
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="img dentist" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <div className="align-buttons">
        <button onClick={removeFav} className="removefavButton">
          Remove <img src="./images/remove.png" alt="remove fav" />
        </button>
      </div>
    </div>
  );
};

export default CardFavs;
