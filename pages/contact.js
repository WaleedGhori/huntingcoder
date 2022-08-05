import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name , email , phone , desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Your Form Submit Success fully");
        setDesc("");
        setEmail("");
        setName("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log(name, email, phone, desc);
  };
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "phone") {
      setPhone(e.target.value);
    }
    if (e.target.name === "desc") {
      setDesc(e.target.value);
    }
    console.log(e, "This is a handle change");
  };
  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Name
          </label>
          <input
            value={name}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            value={email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            value={phone}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="phone"
            name="phone"
          />
        </div>
        <div className="mb-3g">
          <textarea
            value={desc}
            name="desc"
            onChange={handleChange}
            className="form-control"
            placeholder="About your self"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
