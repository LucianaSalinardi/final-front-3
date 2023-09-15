import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setMessageSuccess] = useState("");
  const [error, setMessageError] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  const words = name.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (success != null || error != null) {
      setMessageSuccess("");
      setMessageError("");
    }

    if (name.length > 5 && regexEmail.test(email)) {
      const fullName = capitalizedWords.join(" ");

      setMessageSuccess(
        `Gracias ${fullName}, te contactaremos cuanto antes via Email`
      );
      setName("");
      setEmail("");
    } else {
      setMessageError("Por favor verifica tu informacion nuevamente");
      setName("");
      setEmail("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        />

        <button type="submit"> Send </button>

        {success && <p className="success-msg">{success}</p>}
        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
};

export default Form;
