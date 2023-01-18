// import Link from "next/link";
import React from "react";
// import styles from "../styles/Blog.module.css";
import { server } from "../config";
import BlogList from "@/components/BlogList";

const Blog = ({ blogdata }) => {
  return (
    <div>
      <BlogList blogdata={blogdata} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/blogs`);
  const blogdata = await res.json();
  return {
    props: {
      blogdata,
    },
  };
};

export default Blog;
