import axios from 'axios'
import { connectToDb } from '../../helpers/database/mongo-db'
import { getAll } from '../../helpers/database/functions'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const documents = await getAll('posts')
      res.status(201).json({ message: 'Got it', result: documents })
    } catch (error) {
      res.status(401).json({ message: 'Sorry, try again later', error })
    }
  }

  if (req.method === 'POST') {
    let mongoClient
    const { title, body } = req.body

    try {
      mongoClient = await connectToDb()
    } catch (error) {
      return res.status(500).json({ message: 'Sorry, try again later' })
    }

    try {
      const db = mongoClient.db()
      const result = await db.collection('posts').insertOne({
        title,
        body,
      })
      res.status(201).json({ message: 'Added', result: result })
    } catch (error) {
      res.status(401).json({ message: 'Sorry, try again later' })
    }
  }
}

export default handler
