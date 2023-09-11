import React, { useReducer } from "react";
import { Link } from "react-router-dom";

export const initialStateFavs = {
  favs: JSON.parse(localStorage.getItem("favs")),
};

export const favsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVS":
      const newFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs));
      return {
        ...state,
        favs: newFavs,
      };
    case "REMOVE_FROM_FAVS":
      const removeDentist = (id) => {
        return state.favs.filter((dentist) => dentist.id !== id);
      };
      const actualDentists = removeDentist(action.payload.id);
      localStorage.setItem("favs", JSON.stringify(actualDentists));
      return {
        ...state,
        favs: actualDentists,
      };
    default:
      return state;
  }
};

const Card = ({ name, username, id }) => {
  const [state, dispatch] = useReducer(favsReducer, initialStateFavs);

  const addFav = () => {
    dispatch({ type: "ADD_TO_FAVS", payload: { name, username, id } });
  };

  const removeFav = () => {
    dispatch({ type: "REMOVE_FROM_FAVS", payload: { id } });
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
        <button onClick={removeFav} className="removefavButton">
          Remove <img src="./images/remove.png" alt="remove fav" />
        </button>
      </div>
    </div>
  );
};

export default Card;
