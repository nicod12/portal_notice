
import Link from 'next/link';


const BlogCard = ({ blog }: any) => {
  const truncateBlogDesc =
    blog.attributes.Description[0]?.children[0]?.text.length > 80
      ? blog.attributes.Description[0]?.children[0]?.text.substring(0, 80) + "..."
      : blog.attributes.Description[0]?.children[0]?.text;

  const imageUrl = `http://localhost:1337${blog.attributes.img.data.attributes.url}`;

  return (
    <div className="rounded-lg w-full shadow-md p-4 mb-8 overflow-hidden border border-gray-600 cursor-pointer relative left-1/2 -translate-x-1/2 ">
      <Link href={`/blog/${blog.id}`}>
        <div className="relative w-full">
          <img
            src={imageUrl}
            alt=""
            className="rounded-t-lg w-full h-[300px] "
          />
          {blog.attributes.categories.data.length > 0 && (
            <div className="category-label absolute top-2 left-2 bg-[#dad7d7] bg-opacity-55 text-black p-2 rounded-md">
              {blog.attributes.categories.data[0]?.attributes.Title}
            </div>
          )}
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold mb-2 overflow-ellipsis">
            {blog.attributes.Title}
          </h2>
          <p className="text-gray-600">{truncateBlogDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
