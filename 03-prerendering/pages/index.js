import axios from 'axios'
import Link from 'next/link'

const Home = (props) => {
  console.log('print in every 60 secs')
  return (
    <>
      <h1>Hello {props.name}</h1>
      <span>Nothing to see here, {props.value}</span>
      <ul>
        {props.theRequest.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <hr />
      <div>
        <Link href='/users/1'>User one</Link>
        <br />
        <Link href='/users/2'>User two</Link>
        <br />
        <Link href='/users/3'>User three</Link>
        <br />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const request = await axios.get('https://jsonplaceholder.typicode.com/users')

  // if (request.data.length > 0) {
  //   return {
  //     redirect: {
  //       destination: '/someplace_else',
  //     },
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      name: 'Francis',
      value: 'Just a girl standing in front of a boy...',
      theRequest: request.data,
    },
    revalidate: 60,
  }
}

export default Home
