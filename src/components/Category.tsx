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
          ? "bg-[#2b2a2a] text-white"
          : ""
      } p-2 rounded-lg shadow-md cursor-pointer hover:bg-[#2b2a2a] hover:text-white`}
    >
      {cat.attributes?.Title}
    </div>
  );
};

export default Category;
