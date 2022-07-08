import Link from 'next/link'

const CarsMain = (props) => {
  return (
    <>
      <h1>Cars</h1>
      {props.cars.map((item) => (
        <div key={item}>
          <Link href={`/cars/${item}`}>{item}</Link>
        </div>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      cars: ['nissan', 'ford', 'mazda', 'ferrari'],
    },
  }
}
// export const getServerSideProps = async (context) => {
//   console.log(context.req)
//   return {
//     props: {
//       cars: ['nissan', 'ford', 'mazda', 'ferrari'],
//     },
//   }
// }

export default CarsMain
