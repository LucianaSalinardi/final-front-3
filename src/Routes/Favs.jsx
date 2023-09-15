import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { stateFavs } = useContext(ContextGlobal);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {stateFavs.favs.length !== 0 ? (
          stateFavs.favs.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              username={card.username}
              id={card.id}
            />
          ))
        ) : (
          <h3>There are no dentists added to favs</h3>
        )}
      </div>
    </>
  );
};

export default Favs;
