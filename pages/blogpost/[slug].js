import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css';

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const slug = (props) => {

    const [blog, setBlog] = useState(props.myBlogs);

    // const router = useRouter();
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     console.log(slug);
    //     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a) => {
    //         return a.json();
    //     })
    //         .then((parsed) => {
    //             setBlog(parsed)
    //         })
    // }, [router.isReady])

    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <div>
                {blog && blog.content}
            </div>
        </main>
    </div>;
};

export async function getServerSideProps(context) {
    const {slug} = context.query;
    let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
    let myBlogs = await data.json();
    return {
      props: {myBlogs}, // will be passed to the page component as props
    }
  }
export default slug;