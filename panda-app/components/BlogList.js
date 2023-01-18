import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";
import { server } from "../config";
import BlogItem from "./BlogItem";
// import blogdata from "../blogdata";

const BlogList = ({ blogdata }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.container}>
        <main className={styles.main}>
          {blogdata.map((blogdata) => (
            <BlogItem blogdata={blogdata} key={blogdata.id} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default BlogList;
