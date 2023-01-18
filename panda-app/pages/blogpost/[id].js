import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

import { server } from "@/config";
import Link from "next/link";

const id = ({ blogdata }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  // console.log(blogdata);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page : {blogdata.title}</h1>
        <hr />
        <div>{blogdata.content}</div>
        <h5>-{blogdata.author}</h5>
        <div>
          <Link href="/blog">Go Back</Link>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/blogs/${context.params.id}`);
  const blogdata = await res.json();
  // console.log("this : ", blogdata);
  return {
    props: {
      blogdata,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/blogs`);

  const blogsdata1 = await res.json();

  const ids = blogsdata1.map((blogdata) => blogdata.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
export default id;
