import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import Layout from "../Components/Layout";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { getDentists, state, handleDentists } = useContext(ContextGlobal);

  useEffect(() => {
    getDentists().then((data) => {
      handleDentists(data);
     
    });
  }, []);

  return (
    <Layout>
      <main className="">
        <h1>Home</h1>
        <div className="card-grid">
          {state.data ? state.data.map((card) => (<Card key={card.id} name={card.name} username={card.username} id={card.id}/>)) : null}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
