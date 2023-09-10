import React, { useEffect, useContext } from "react";
import Layout from "../Components/Layout";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { getDentistById, state, handleDentistById } =
    useContext(ContextGlobal);

  useEffect(() => {
    getDentistById(id).then((data) => {
      handleDentistById(data);
    });
  }, []);
  
  return (
    <Layout>
      <h1>Details Dentist </h1>
      <div className="align-details">
        <div className="details-dentist">
          <h3>{state.dentist.name}</h3>
          <p> Email: {state.dentist.email}</p>
          <p> Phone: {state.dentist.phone}</p>
          <p> Website: {state.dentist.website}</p>
        </div>
        <div className="img-dentist-details">
          <img
            src={process.env.PUBLIC_URL + "/images/doctor.jpg"}
            alt="img dentist"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
