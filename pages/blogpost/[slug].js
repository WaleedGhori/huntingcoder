import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/blogPost.module.css';
import * as fs from 'fs'
// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
    function createMarkup(c) {
        return { __html: c };
    }
    const [blog, setBlog] = useState(props.myBlog);

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
            <h1 className={styles.stylesh1}>{blog && blog.title}</h1>
            <hr />
            <div>
                {/* {blog && blog.content} */}
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
            </div>
        </main>
    </div>;
};

export async function getStaticPaths() {
    let allblog = await fs.promises.readdir('blogdata');
    allblog = allblog.map((item)=>{
        return {params:{slug:item.split(".")[0]}}
    })
    return {
        paths:allblog,
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    // const {slug} = context.query;
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
    // let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
    // let myBlogs = await data.json();
}
export default Slug;