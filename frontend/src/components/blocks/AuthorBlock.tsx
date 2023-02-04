import type { FC } from "react";
import getAuthor from "../../hooks/getAuthor";

interface props {
  authorID: string;
}

let Author: FC<props> = ({ authorID }) => {
  let { picture_url, description, name } = getAuthor(authorID);
  return (
    <>
      <img src={picture_url} />
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
};

export default Author;
