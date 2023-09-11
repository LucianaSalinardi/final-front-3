import React, { useReducer } from "react";
import { favsReducer, initialStateFavs } from "../Components/Card";
import Card from "../Components/Card";
import Layout from "../Components/Layout";

const Favs = () => {
  const [state, dispatch] = useReducer(favsReducer, initialStateFavs);

  return (
    <Layout>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs
          ? state.favs.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                username={card.username}
                id={card.id}
              />
            ))
          : null}
      </div>
    </Layout>
  );
};

export default Favs;
