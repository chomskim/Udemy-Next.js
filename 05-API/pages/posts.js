import { getPost } from './api/posts/[postid]'
import { useContext } from 'react'
import { AppContext } from '../store/app_context'
import Link from 'next/link'

const Posts = (props) => {
  const { users, addUser } = useContext(AppContext)

  const handleUser = () => {
    addUser({ name: 'Steve' })
  }

  return (
    <>
      <h1>The users are</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={handleUser}>Add user</button>
      </div>
      <Link href='/'>Go home</Link>
    </>
  )
}

export const getStaticProps = async () => {
  const post = await getPost(1)

  return {
    props: {
      data: post,
    },
  }
}

export default Posts
