'use client'
import { CategoryContext } from "@/context/CategoryContext"
import { useContext } from "react"

const Category = ({ cat }: any) => {
  const { category, changeCategory } = useContext(CategoryContext);

  const handleCategoryClick = () => {
    changeCategory(cat.attributes.Title);
  };

  return (
    <div
      onClick={handleCategoryClick}
      className={`${
        cat.attributes.Title === category
          ? "bg-[#ffffff] text-black"
          : "bg-[#af8533]"
      } p-4 rounded-lg shadow-md cursor-pointer`}
    >
      {cat.attributes?.Title}
    </div>
  );
};

export default Category;
