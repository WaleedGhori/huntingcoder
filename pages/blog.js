import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs'

const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogitem.metadesc.substr(0, 140)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};
export async function getStaticProps(context) {
  // let data = await  fetch('http://localhost:3000/api/blogs');
  // let allBlogs = await data.json();
  // return {
  //   props: {allBlogs}, // will be passed to the page component as props
  // }
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }
  return {
      props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog;
