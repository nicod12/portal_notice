"use client"
import { useContext, useLayoutEffect } from "react"
import Category from "./Category"
import { CategoryContext } from "@/context/CategoryContext"


const Categories = ({ categories }: any) => {
  const { changeCategory } = useContext(CategoryContext);


  useLayoutEffect(() => {
    if (categories?.data && categories.data.length > 0) {
      if (!changeCategory) {
        changeCategory(categories.data[0].attributes.Title);
      }
    }
  }, [categories, changeCategory]);

  return (
    <div className="flex items-center gap-6 ">
      <h2 className="text-lg font-bold ml-24 cursor-pointer" onClick={() => window.location.reload()}>NewsVista</h2>
      {categories?.data?.map((category: any) => (
        <div key={category.id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
