import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSession } from 'next-auth/react'

import Loader from './loader'

import { autoSignIn } from 'store/actions/user.action'

const SessionCheck = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const loadSession = async () => {
      try {
        const session = await getSession()
        if (session) {
          await dispatch(autoSignIn()).unwrap()
          setLoading(false)
        } else {
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
      }
    }
    loadSession()
  }, [])

  if (loading) return <Loader />
  return <>{children}</>
}

export default SessionCheck
