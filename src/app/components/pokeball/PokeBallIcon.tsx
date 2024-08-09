const PokeBallIcon = () => {
  return (
    <>
      <svg
        viewBox="0 0 48 48"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        className="size-24"
      >
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="22"
          stroke="white"
          stroke-width="4"
        />
        <rect
          x="17.3191"
          y="17.3192"
          width="13.3617"
          height="13.3617"
          rx="6.68085"
          stroke="white"
          stroke-width="4"
        />
        <line x1="17" y1="24" x2="3" y2="24" stroke="white" stroke-width="4" />
        <line
          x1="45"
          y1="24"
          x2="31"
          y2="24"
          stroke="white "
          stroke-width="4"
        />
      </svg>
    </>
  );
};

export { PokeBallIcon };
