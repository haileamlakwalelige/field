import React from "react";
import BlogIntro from "../components/blogs/BlogIntro";
import BlogNews from "../components/blogs/BlogNews";

const Blogs = () => {
  return (
    <div className="mt-20">
      <BlogIntro />
      <BlogNews />
    </div>
  );
};

export default Blogs;
