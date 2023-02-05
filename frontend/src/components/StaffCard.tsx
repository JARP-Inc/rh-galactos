import type { FC } from "react";
import stringify from "../utils/stringify";

interface props {
  author: Author;
}

const StaffCard: FC<props> = ({ author }) => {
  let { name, image_url, title } = author;
  return (
    <div className="bg-base-200 hover:bg-base-300 grid h-full w-64 grid-rows-2 items-center justify-items-center gap-5 rounded-xl p-5">
      <div className="avatar">
        <div className="w-32 rounded-full">
          <img src={image_url} />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 text-center">
        <a
          href={`/staff/${stringify(name)}`}
          className="text-info cursor-pointer rounded-lg text-2xl font-semibold normal-case"
        >
          {name}
        </a>
        <h2 className="text-secondary text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default StaffCard;
