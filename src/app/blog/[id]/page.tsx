import Image from "next/image"
import Link from "next/link"


async function fetchBlog(id: number) {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
  
    try {
      const res = await fetch(`http://localhost:1337/api/blogs/${id}?populate=*`, options)
      const response = await res.json()
      return response
    } catch (err) {
      console.error(err)
    }
  }

const page = async ({ params }: any) => {
    
   const blog = await fetchBlog(params.id)


   const imageUrl = "http://localhost:1337" +blog.data.attributes.img.data.attributes.url

  return (
    <div className="max-w-3xl mx-auto p4">
        <Link href="/">{"< Back"}</Link>
        <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
            <Image
                layout="fill"
                objectFit="cover"
                src={imageUrl}
                alt=""
                className="rounded-t-lg"
            />
        </div>
        <div className="mt-4">
            <h1 className="text-3xl font-semibold">
                {blog.data.attributes.Title}
            </h1>
            <p className="text-gray-600 mt-2">
            {blog.data.attributes.Description.map((paragraph:any) => (
                paragraph.children.map((child: any, childIndex: any) => (
                    <span key={childIndex}>{child.text} </span>
                ))
            ))}
            </p>
            <div className="mt-4 flex items-center text-gray-400">
                <span className="text-sm">Published on {" "}{new Date(blog.data.attributes.publishedAt).toLocaleString()}</span>
            </div>
        </div>
    </div>
  )
}

export default page