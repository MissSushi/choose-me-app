import { Pokeball } from "./Pokeball";
import { Pokemon } from "@/app/custom-hooks/usePokemon";

type pokeTeamProps = {
  pokeTeam: Pokemon[];
};

const PokeTeam = ({ pokeTeam }: pokeTeamProps) => {
  return (
    <>
      <Pokeball pokemon={pokeTeam[0]}></Pokeball>
      <Pokeball pokemon={pokeTeam[1]}></Pokeball>
      <Pokeball pokemon={pokeTeam[2]}></Pokeball>
      <Pokeball pokemon={pokeTeam[3]}></Pokeball>
      <Pokeball pokemon={pokeTeam[4]}></Pokeball>
      <Pokeball pokemon={pokeTeam[5]}></Pokeball>
    </>
  );
};

export { PokeTeam };
