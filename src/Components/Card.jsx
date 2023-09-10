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
    default:
      return state;
  }
};

const Card = ({ name, username, id }) => {


  const [state, dispatch] = useReducer(favsReducer, initialStateFavs);

  const addFav = () => {
    dispatch({ type: "ADD_TO_FAVS", payload: { name, username, id } });
  };

  console.log(state);
  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="img dentist" />
        <h3>{name}</h3>
        <p>{username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        Add to fav <img src="./images/fav.png" alt="fav" />
      </button>
    </div>
  );
};


export default Card;

