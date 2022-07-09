import mongoose from 'mongoose'

require('dotenv').config()
const { PASSWORD } = process.env

export async function connectToDb() {
  if (mongoose.connection.readyState >= 1) return

  return mongoose.connect(`mongodb+srv://admin:${PASSWORD}@cluster0.a1c51.mongodb.net/?retryWrites=true&w=majority`)
}
