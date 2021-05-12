export default function Home(props) {
  return (
    <div>
      <div>Index</div>
      <p>{JSON.stringify(props.espisodies)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/episodies')
  const data = await response.json()

  return {
    props: {
      episodies: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
