import Image from 'next/image'

export default async function Home() {
  // const catalogItems = await getCatalog();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-black text-6xl w-2/4 text-center text-white/90">The blacker the berry, the sweeter the juice</h1>
    </main>
  )
}
