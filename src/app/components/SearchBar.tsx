type SearchBarProps = {
  onIdFound: (id: number) => void;
};

import pokemonArray from "../../../public/pokemon.json";

const SearchBar = ({ onIdFound }: SearchBarProps) => {
  return (
    <form
      className="max-w-3xl mx-auto mb-8"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const inputValue = formData.get("default-search") as string;

        const potentialID = parseInt(inputValue);
        if (isNaN(potentialID)) {
          const lowerCasedInputValue = inputValue.toLowerCase();
          const foundInputEntry = pokemonArray.find(
            (element) =>
              element.name.toLowerCase().search(lowerCasedInputValue) !== -1
          );

          if (foundInputEntry !== undefined) {
            onIdFound(foundInputEntry.id);
          }
        } else {
          const foundInputEntry = pokemonArray.find(
            (element) => potentialID === element.id
          );

          if (foundInputEntry !== undefined) {
            onIdFound(foundInputEntry.id);
          }
        }
      }}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Suche
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          name="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-stone-700 rounded-lg bg-gray-50 focus:ring-stone-700 focus:border-stone-700"
          placeholder="Bisasam, 1, Glurak, 6, ..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-700 font-medium rounded-lg text-sm px-4 py-2"
        >
          Suche
        </button>
      </div>
    </form>
  );
};

export { SearchBar };
