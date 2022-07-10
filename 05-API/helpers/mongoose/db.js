import mongoose from 'mongoose'

require('dotenv').config()
const { DB_PASSWORD, DB_HOST } = process.env

export async function connectToDb() {
  if (mongoose.connection.readyState >= 1) return

  return mongoose.connect(`mongodb+srv://admin:${PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`)
}
