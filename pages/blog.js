import React from "react";
import styles from "../styles/Blog.module.css";
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>

<main className={styles.main}>
      <div className="blogItem">
        <Link href={'/blogpost/java-script'}><h3 className={styles.blogitemh3}>JavaScript</h3></Link>
        <p>JavaScript is used to write a logic for web</p>
      </div>
      <div className="blogItem">
        <h3>JavaScript</h3>
        <p>JavaScript is used to write a logic for web</p>
      </div>
      <div className="blogItem">
        <h3>JavaScript</h3>
        <p>JavaScript is used to write a logic for web</p>
      </div>
      </main>
    </div>
  );
};

export default Blog;
