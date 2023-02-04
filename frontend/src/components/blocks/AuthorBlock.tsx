import type { FC } from "react";
import getAuthor from "../../hooks/getAuthor";

interface props {
  authorID: string;
}

let Author: FC<props> = ({ authorID }) => {
  let { picture_url, description, name } = getAuthor(authorID);
  return (
    <div className="bg-primary flex flex-col items-center gap-3 rounded-md py-6 px-7">
      <div className="avatar">
        <div className="w-32 rounded-full">
          <img src={picture_url} />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">{name}</h1>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default Author;
