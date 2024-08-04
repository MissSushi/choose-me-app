"use client";

import { useRef } from "react";
import { usePokemon } from "../custom-hooks/usePokemon";
import { TextBubble } from "./TextBubble";
import { SearchBar } from "./SearchBar";
import { Button } from "./Button";

function determineColors(pokemonColor: string | undefined) {
  // if (pokemonColor && pokemonColor in colorMap) {
  //   // @ts-ignore
  //   return colorMap[pokemonColor]
  // }
  return {
    text: {
      primary: "text-black",
      secondary: "text-stone-500",
      tertiary: "text-white",
    },
    bg: {
      primary: "bg-neutral-200",
      secondary: "bg-neutral-300/80",
      tertiary: "bg-stone-700",
    },
  };
}

// const colorMap = {
//   black: {
//     text: {
//       primary: "text-white",
//       secondary: "text-neutral-300",
//       tertiary: "text-stone-500",
//     },
//     bg: {
//       primary: "bg-black",
//       secondary: "bg-neutral-800",
//     },
//   },
//   blue: {
//     text: {
//       primary: "text-white",
//       secondary: "text-neutral-300",
//       tertiary: "text-stone-500",
//     },
//     bg: {
//       primary: "bg-black",
//       secondary: "bg-neutral-800",
//     },
//   },
// };

const PokemonCard = () => {
  const { pokemon, setId } = usePokemon();
  const ref = useRef<HTMLAudioElement>(null);

  const colors = determineColors(pokemon?.color);

  return (
    <>
      <SearchBar
        onIdFound={(id) => {
          setId(id);
        }}
      ></SearchBar>
      <div
        className={`relative rounded shadow-lg max-w-3xl mx-auto mb-20 ${colors.bg.secondary}`}
      >
        <div
          className={`relative sm:static flex flex-col items-center rounded-t ${colors.bg.primary}`}
        >
          <img
            src={pokemon?.imageSrc}
            alt={pokemon?.name ?? ""}
            className="w-60 h-60"
          />
          <div className="flex items-center justify-between absolute inset-0 p-2 pointer-events-none">
            {/* next pokémon, previous pokémon */}
            <button
              onClick={() => setId((id) => Math.max(id - 1, 1))}
              disabled={pokemon?.id === 1}
              type="button"
              className={`size-12 sm:size-10 flex items-center justify-center ${colors.bg.tertiary} ${colors.text.tertiary} rounded-full pointer-events-auto`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={() => setId((id) => Math.min(id + 1, 1025))}
              disabled={pokemon?.id === 1025}
              type="button"
              className={`size-12 sm:size-10 flex items-center justify-center ${colors.bg.tertiary} ${colors.text.tertiary} rounded-full pointer-events-auto`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="flex justify-center text-2xl my-4 font-semibold">
              {pokemon?.name ?? "Lädt..."}
            </h1>
            {/* Audio Button */}
            <button
              type="button"
              className={`rounded-full p-2 flex items-baseline justify-center ${colors.bg.tertiary} ${colors.text.tertiary}`}
              onClick={() => {
                ref.current?.play();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-6"
              >
                <path d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.203 7H2.667a.75.75 0 0 0-.7.48A6.985 6.985 0 0 0 1.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75ZM16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z" />
                <path d="M14.329 7.172a.75.75 0 0 0-1.061 1.06 2.5 2.5 0 0 1 0 3.536.75.75 0 0 0 1.06 1.06 4 4 0 0 0 0-5.656Z" />
              </svg>

              <audio ref={ref} src={pokemon?.cries}></audio>
            </button>
          </div>
          <div
            className={`absolute -right-2 -top-2 rounded-full py-2 px-3 flex items-baseline justify-center  ${colors.bg.tertiary} ${colors.text.tertiary}`}
          >
            <span className={`text-xs font-semibold ${colors.text.secondary}`}>
              #
            </span>
            {pokemon?.id}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center my-6">
          <TextBubble title="Typ" titleColor={colors.text.secondary}>
            {pokemon?.types.toLocaleString("de")}
          </TextBubble>

          <TextBubble title="Gewicht" titleColor={colors.text.secondary}>
            {pokemon?.weight.toLocaleString("de")} Kg
          </TextBubble>

          <TextBubble title="Größe" titleColor={colors.text.secondary}>
            {pokemon?.height.toLocaleString("de")} m
          </TextBubble>
        </div>

        <p className="flex justify-center px-4 pb-6">
          {pokemon?.description ?? ""}
        </p>
      </div>

      <div className="fixed bottom-2 left-0  w-full ">
        <div className="max-w-3xl flex mx-auto gap-8">
          {/* Dislike Button */}
          <Button
            className="bg-stone-200/80"
            onClick={() => {
              window.location.reload();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
              />
            </svg>
          </Button>

          {/* Like Button */}
          <Button
            className="bg-stone-700/80"
            onClick={() => {
              window.location.reload();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
};

export { PokemonCard };
