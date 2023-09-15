import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const { stateFavs, handleAddFavs } = useContext(ContextGlobal);

  const addFav = () => {
    if (!stateFavs.favs.some((fav) => fav.id === id)) {
      const fav = {
        name,
        username,
        id,
      };
      const arr = [...stateFavs.favs, fav];
      handleAddFavs(arr);
      window.alert("Dentista agregado con éxito!");
    } else {
      window.alert("El dentista seleccionado ya se encuentra en favoritos");
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
        <button onClick={addFav} className="favButton">
          Add <img src="./images/fav.png" alt="add fav" />
        </button>
      </div>
    </div>
  );
};

export default Card;
