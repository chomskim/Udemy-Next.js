import { connectToDb } from '../../helpers/mongoose/db'
import Post from '../../helpers/mongoose/post.model'

const handler = async (req, res) => {
  connectToDb()

  if (req.method === 'GET') {
    try {
      const results = await Post.find({}).exec()
      res.status(201).json({ message: 'Got it', results })
    } catch (error) {
      res.status(401).json({ message: 'Sorry, try again later', error })
    }
  }

  if (req.method === 'POST') {
    const { title, body } = req.body

    try {
      const post = new Post({
        title,
        body,
      })
      await post.save()
      res.status(201).json({ message: 'Added', result: post })
    } catch (error) {
      res.status(401).json({ message: 'Sorry, try again later' })
    }
  }
}

export default handler
