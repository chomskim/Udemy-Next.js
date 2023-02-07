import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Loader from 'helpers/loader'

const RouteGuard = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const loadSession = async () => {
      try {
        const session = await getSession()
        if (!session) {
          router.push('/users/sign_in')
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    loadSession()
  }, [])

  if (loading) {
    return <Loader />
  }

  return <>{children}</>
}

export default RouteGuard
