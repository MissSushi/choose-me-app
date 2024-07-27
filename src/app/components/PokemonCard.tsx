const PokemonCard = () => {
  return (
    <>
      <div className="relative bg-neutral-300/80 rounded shadow-lg max-w-3xl mx-auto mb-20">
        <div className="flex flex-col items-center bg-neutral-200 rounded-t">
          <img src="/evoli.png" alt="Evoli" className="w-60 h-60" />
          <h1 className="flex justify-center text-2xl my-4 font-semibold">
            Evoli
          </h1>
          <div className="absolute -right-2 -top-2 bg-stone-700 rounded-full size-8 flex items-center justify-center text-white">
            #1
          </div>
        </div>
        <ul className="flex flex-row justify-center gap-3 md:gap-8 mt-8 rounded text-stone-700 hover:text-stone-600 sm:text-lg sm:font-semibold px-4">
          <li className="bg-stone-700 text-white rounded-full px-2 py-1">
            Beschreibung
          </li>
          <li>Fähigkeiten</li>
          <li>Evolutionen</li>
        </ul>
        <p className="flex justify-center my-4 px-4 pb-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="fixed bottom-2 left-0 flex w-full gap-8 px-2">
        <button className="bg-stone-200/80 backdrop-blur-sm rounded w-full p-6 text-xl ">
          Dislike
        </button>
        <button className="bg-stone-700/80 backdrop-blur-sm rounded text-white w-full p-6 text-xl ">
          Choose me!
        </button>
      </div>
    </>
  );
};

export default PokemonCard;
