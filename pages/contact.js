import React from "react";
import styles from "../styles/Contact.module.css";
const handleSubmit=(e)=>{
  e.preventDefault();''
}
const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [desc, setDesc] = useState()
  return (
    <div className={styles.container}>
      <h1>Contact us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Name</label>
          <input value={name} type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input value={email} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="password" className={styles.formlabel}>Password</label>
          <input value={password} type="number" className="form-control" id="password" name="password" />
        </div>
        <div className="mb-3g">
          <textarea value={desc} className="form-control" placeholder="About your self" id="desc"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
