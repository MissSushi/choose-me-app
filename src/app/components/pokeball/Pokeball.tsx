import { type Pokemon } from "@/app/custom-hooks/usePokemon";
import { PokeBallIcon } from "./PokeBallIcon";

type PokeballProps = {
  pokemon?: Pokemon;
};

const Pokeball = ({ pokemon }: PokeballProps) => {
  return (
    <>
      <div className="relative size-24 inline-block">
        <div className="absolute inset-0 -z-10">
          <PokeBallIcon></PokeBallIcon>
        </div>
        <img src={pokemon?.pokeballImageSrc} alt={pokemon?.name} />
      </div>
    </>
  );
};

export { Pokeball };
