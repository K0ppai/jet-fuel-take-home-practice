export default async function Home() {
  const categories = await fetch('https://www.plugco.in/public/take_home_sample_feed');
  console.log(categories)

  return (
    <main className="">
      hi
    </main>
  )
}
