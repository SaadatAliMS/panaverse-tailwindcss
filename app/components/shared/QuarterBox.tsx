import React, { FC } from "react";

interface IProps {
  header: string;
  description: string;
  number: number;
  haveBorder?: boolean;
}

export const QuarterBox: FC<IProps> = ({
  header,
  description,
  number,
  haveBorder = true,
}) => {
  return (
    <div
      className={`rounded-md flex-1  relative justify-center  flex flex-col sm:p-10 ${
        haveBorder === true ? "border" : ""
      }`}
    >
      <h4 className="font-bold text-lg">{header}</h4>
      <p className="mt-2 text-slate-600 z-0">{description} </p>
      <div className="text-gray-200 absolute top-0 right-10 text-9xl font-bold -z-10">
        {number}
      </div>
    </div>
  );
};
