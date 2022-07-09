import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  body: {
    required: true,
    type: String,
  },
})

const Post = mongoose.models.Post || mongoose.model('Post', postSchema)
export default Post
