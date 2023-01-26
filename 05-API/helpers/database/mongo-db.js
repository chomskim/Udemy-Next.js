import { MongoClient } from 'mongodb'

require('dotenv').config()
const { DB_PASSWORD, DB_HOST } = process.env

export async function connectToDb() {
  const dbClient = await MongoClient.connect(
    `mongodb+srv://admin:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`
  )
  return dbClient
}
