
import { fetchCategories } from "@/utils/apí"
import Categories from "./Categories"



const Navbar = async () => {
  
    const categories = await fetchCategories()




  return (
    <nav className="fixed w-full z-10">
      <div className="flex items-center gap-6 bg-black text-white h-14">
        <Categories categories={categories} />
      </div>
    </nav>
  )
}

export default Navbar