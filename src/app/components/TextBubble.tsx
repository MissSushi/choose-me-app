import { ReactNode } from "react";

type TextBubbleProps = {
  title: string;
  children: ReactNode;
  titleColor: string;
};

const TextBubble = ({ title, titleColor, children }: TextBubbleProps) => {
  return (
    <div className="bg-black/5 rounded-full m-4 px-4 py-1 shadow-md">
      <p className="flex justify-start items-baseline">
        <span className={`text-sm mr-2 ${titleColor}`}>{title}</span>
        <span className="font-medium">{children}</span>
      </p>
    </div>
  );
};

export { TextBubble };
