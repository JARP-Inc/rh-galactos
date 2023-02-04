import type { FC } from "react";
import getAuthor from "../../hooks/getAuthor";

interface props {
  name: string;
}

let Author: FC<props> = ({ name }) => {
  let { picture_url, description } = getAuthor(name);
  return (
    <>
      <img src={picture_url} />
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
};

export default Author;
