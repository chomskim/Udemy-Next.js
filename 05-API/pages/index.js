import axios from 'axios'
import { useFormik } from 'formik'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const getPosts = () => {
    axios.get('/api/posts').then((response) => {
      console.log(response.data)
    })
  }

  console.log(props)

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    onSubmit: (values) => {
      axios
        .post('/api/posts', values)
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  })

  return (
    <div className={styles.container}>
      <button onClick={getPosts}>Load posts</button>
      <hr />
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <br />
          <input id='title' name='title' onChange={formik.handleChange} value={formik.values.title} />
        </div>

        <div>
          <label htmlFor='body'>Body</label>
          <br />
          <input id='body' name='body' onChange={formik.handleChange} value={formik.values.body} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export const getStaticProps = async () => {
  const request = await axios.get('http://localhost:3000/api/posts')

  return {
    props: {
      posts: request.data,
    },
  }
}
