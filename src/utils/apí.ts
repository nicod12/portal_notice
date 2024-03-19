export  async function fetchBlogs() {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
  
    try {
      const res = await fetch("http://localhost:1337/api/blogs?populate=*", options)
      const response = await res.json()
      return response
    } catch (err) {
      console.error(err)
    }
  }
  

  export async function fetchCategories() {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      }
    }
  
    try {
      const res = await fetch("http://localhost:1337/api/categories", options)
      const response = await res.json()
      return response
    } catch (err) {
      console.error(err)
    }
  }