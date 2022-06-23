
const Posts = [
  {
    id: 1,
    title: 'Blog Post 1',

    body: 'This is the body of blog post 1',
    published: true,
    author: "John Doe",
    category: "Technology",
    trending: true,
    featured: true,
    coverImage: "https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: ` ${new Date().toLocaleDateString()}`,

  },
  {
    id: 2,
    title: 'Blog Post 2',
    body: 'This is the body of blog post 2',
    published: true,
    author: "Jane Doe",
    category: "Technology",
    trending: true,
    featured: true,
    coverImage: "https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: "2020-01-01"

  },
  {
    id: 3,
    title: 'Blog Post 3',
    body: 'This is the body of blog post 3',
    published: true,
    author: "Funny Domie",
    category: "Technology",
    trending: true,
    featured: true,
    coverImage: "https://images.pexels.com/photos/5424696/pexels-photo-5424696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: "2020-01-01"

  }
]



module.exports = Posts
