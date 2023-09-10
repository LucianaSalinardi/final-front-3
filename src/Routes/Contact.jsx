import React from "react";
import Form from "../Components/Form";
import Layout from "../Components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact">
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form />
      </div>
    </Layout>
  );
};

export default Contact;
