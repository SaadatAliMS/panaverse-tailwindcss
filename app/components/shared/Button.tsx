import { FC } from "react";

const Button: FC<{ text: string }> = ({ text }) => {
  return (
    <button className="bg-teal-700 px-4 py-3 text-white rounded-full hover:shadow-lg text-lg font-medium hover:scale-125 duration-700">
      {text}
    </button>
  );
};
export default Button;
