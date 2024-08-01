type ButtonProps = React.ComponentProps<"button">;

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={`${className} backdrop-blur-sm rounded w-full p-6 text-xl flex justify-center`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export { Button };
