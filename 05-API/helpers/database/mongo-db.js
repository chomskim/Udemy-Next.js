import { MongoClient } from 'mongodb'

require('dotenv').config()
const { PASSWORD } = process.env

export async function connectToDb() {
  const dbClient = await MongoClient.connect(
    `mongodb+srv://admin:${PASSWORD}@cluster0.a1c51.mongodb.net/?retryWrites=true&w=majority`
  )
  return dbClient
}
