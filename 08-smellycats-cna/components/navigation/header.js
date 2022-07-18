import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  const router = useRouter()

  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link href='/'>The smelly cats</Link>
        </Navbar.Brand>
        <Nav className='ml-auto'>
          <Link href='/show' passHref>
            <Nav.Link>Shows</Nav.Link>
          </Link>

          <Link href='/contact' passHref>
            <Nav.Link>Contact</Nav.Link>
          </Link>

          <Link href='/users/sign_in' passHref>
            <Nav.Link>Sign in</Nav.Link>
          </Link>

          <Nav.Link
            onClick={() => {
              console.log('sign out')
              router.push('/')
            }}
          >
            Sign out
          </Nav.Link>

          <Link href='/users/dashboard' passHref>
            <Nav.Link>Dashboard</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
