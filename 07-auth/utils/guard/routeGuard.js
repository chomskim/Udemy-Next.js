import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const RouteGuard = ({ children }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSession = async () => {
      const session = await getSession()
      console.log(session)

      if (!session) {
        router.push('/sign_in')
      } else {
        setLoading(false)
      }
    }
    loadSession()
  }, [])

  if (loading) {
    return <div>...loading</div>
  }

  return <>{children}</>
}

export default RouteGuard
