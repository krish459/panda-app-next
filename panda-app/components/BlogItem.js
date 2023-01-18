import Link from "next/link";
import React from "react";
import styles from "../styles/Blog.module.css";
import { server } from "../config";
// import blogdata from "../blogdata";

const BlogItem = ({ blogdata }) => {
  return (
    <div>
      <Link
        href="/blogpost/{id}"
        as={`/blogpost/${blogdata.id}`}
        legacyBehavior
      >
        <h2 className={styles.blogItemh3}>{blogdata.title}</h2>
      </Link>
      <p>{blogdata.content.slice(0, 60)}...</p>
    </div>
  );
};

export default BlogItem;
