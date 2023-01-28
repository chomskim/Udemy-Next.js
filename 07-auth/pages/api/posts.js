import { getSession } from 'next-auth/react'

async function handler(req, res) {
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).json({ message: 'Bro, you need to be auth' })
  }

  res.status(200).json({ message: 'Here are the admin post' })
}

export default handler
