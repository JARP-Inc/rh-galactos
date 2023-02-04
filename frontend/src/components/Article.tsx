import type { FC } from "react";
import AuthorBlock from "./blocks/AuthorBlock";
import DataBlock from "./blocks/DataBlock";

interface props {}

let Article: FC<props> = () => {
  // @ts-ignore
  let data: Article = { author: "john" };
  let { author, content, image_URL } = data;
  return (
    <>
      <DataBlock data={data} />
      <img src={image_URL} />
      <div>{content}</div>
      <AuthorBlock author={author} />
    </>
  );
};

export default Article;
