
const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[50vmax]">
      <h1 className="text-4xl font-mono">Welcome to Notes Taking App</h1>
      <main className="mt-10">
        <article>
          <a href="/new" className="font-serif text-lg ">
            Create A New Note
          </a>
        </article>
      </main>
      <article>
        <h1 className="font-serif">Notes:</h1>
        <div className="grid max-md:grid-cols-1 grid-cols-4">

        </div>
      </article>
    </div>
  );
}

export default Home