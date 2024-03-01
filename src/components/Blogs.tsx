"use client"
import { useContext } from "react"
import BlogCard from "./BlogCard"
import { CategoryContext } from "@/context/CategoryContext"


// Blogs.js
const Blogs = ({ blogs }: any) => {
  const { category } = useContext(CategoryContext);

  // Si no hay categoría seleccionada, mostrar todos los blogs
  const filteredBlogs = category
    ? blogs.data.filter((blog: any) =>
        blog.attributes.categories.data.some(
          (cat: any) => cat.attributes.Title === category
        )
      )
    : blogs.data;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filteredBlogs?.map((blog: any) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
