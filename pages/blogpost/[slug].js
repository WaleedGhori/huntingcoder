import React from 'react'
import { useRouter } from 'next/router';
import styles from "../../styles/blogPost.module.css";

const slug= () => {

    const router =  useRouter();
    const {slug} = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Tiltle of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates dignissimos a placeat, explicabo iste! Qui est suscipit porro provident tenetur eveniet quis. Tempora eum corporis dignissimos fugit nam culpa porro exercitationem quae nihil repellat! Voluptatum officia repudiandae quod sed libero cupiditate eos.
        </div>
      </main>
    </div>
  )
}

export default slug