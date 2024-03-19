import Blogs from "@/components/Blogs";
import { fetchBlogs } from "@/utils/apí";






export default async function Home() {

  const blogs = await fetchBlogs()
  return (
    <div>
      <Blogs blogs={blogs} />
    </div>
  );
}
