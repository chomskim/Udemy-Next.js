import axios from 'axios'

export const getPost = async (postId) => {
  try {
    const request = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return { posts: request.data }
  } catch {
    return { message: 'Sorry, try again later' }
  }
}

const handler = async (req, res) => {
  const postId = req.query.postid

  if (req.method === 'GET') {
    try {
      const request = await getPost(postId)
      res.status(200).json(request)
    } catch {
      res.status(401).json(request)
    }
  }
}

export default handler
