// BlogCard.js
import Link from 'next/link';
import Image from 'next/image';  // Asegúrate de importar Image desde 'next/image'

const BlogCard = ({ blog }: any) => {
  const truncateBlogDesc =
    blog.attributes.Description[0]?.children[0]?.text.length > 80
      ? blog.attributes.Description[0]?.children[0]?.text.substring(0, 80) + "..."
      : blog.attributes.Description[0]?.children[0]?.text;

  const imageUrl = `http://localhost:1337${blog.attributes.img.data.attributes.url}`;

  return (
    <div className="rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer relative">
      <Link href={`/blog/${blog.id}`}>
        <div className="relative w-full h-1" style={{ paddingBottom: "100%" }}>
          <Image
            layout="fill"
            src={imageUrl}
            alt=""
            className="rounded-t-lg"
          />
          {blog.attributes.categories.data.length > 0 && (
            <div className="category-label absolute bottom-2 left-2 bg-[#ffffff] text-black p-2 rounded-md">
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
