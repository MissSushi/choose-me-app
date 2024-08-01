"use client";
import { useEffect, useState } from "react";

type Pokemon = {
  name: string;
  imageSrc: string;
  id: number;
  types: string[];
  description: string;
  weight: number;
  height: number;
  cries: string;
};

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const abortController = new AbortController();

    function getRandomPokemonId(max: number) {
      return Math.floor(Math.random() * max) + 1;
    }
    const id = getRandomPokemonId(1025);

    async function getPokemon() {
      const species = await getPokemonSpeciesData();
      const data = await getPokemonData();

      if (!species || !data) return;

      const { name, description } = species;
      const { types, weight, height, cries } = data;

      setPokemon({
        id,
        imageSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        name,
        description,
        types,
        height,
        weight,
        cries,
      });
    }

    async function getPokemonSpeciesData() {
      const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        const germanNameEntry = result.names.find(
          (item: any) => item.language.name === "de"
        )?.["name"];

        const germanDescriptionEntry = result.flavor_text_entries.find(
          (item: any) => item.language.name === "de"
        )?.["flavor_text"];

        return {
          name: germanNameEntry,
          description: germanDescriptionEntry,
        };
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") return;
          console.error(`Error message: ${error.message}`);
        }
      }
    }

    async function getPokemonData() {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();

        const types = result.types as any[];
        const heightInMeter = result.height / 10;
        const weightInKG = result.weight / 10;
        const cries = result.cries["latest"];

        const germanTypeNames = await Promise.all(
          types.map(async (item) => {
            const typeUrl = item.type.url;
            const response = await fetch(typeUrl, {
              signal: abortController.signal,
            });
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();

            const germanTypeName = result.names.find(
              (item: any) => item.language.name === "de"
            )?.["name"];
            return germanTypeName;
          })
        );

        return {
          types: germanTypeNames,
          height: heightInMeter,
          weight: weightInKG,
          cries,
        };
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") return;
          console.error(`Error message: ${error.message}`);
        }
      }
    }

    getPokemon();

    return () => {
      abortController.abort();
    };
  }, []);

  return pokemon;
};

export { usePokemon };
