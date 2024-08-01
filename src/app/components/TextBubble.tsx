import { ReactNode } from "react";

type TextBubbleProps = {
  title: string;
  children: ReactNode;
};

const TextBubble = ({ title, children }: TextBubbleProps) => {
  return (
    <div className="bg-neutral-300 rounded-full m-4 px-4 py-1 shadow-md">
      <p className="flex justify-start items-baseline">
        <span className="text-stone-500 text-sm mr-2">{title}</span>
        <span className="font-medium">{children}</span>
      </p>
    </div>
  );
};

export { TextBubble };
