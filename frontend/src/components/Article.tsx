import type { FC } from "react";
import getArticle from "../hooks/getArticle";
import useQueryParam from "../hooks/useQueryParam";
import AuthorBlock from "./blocks/AuthorBlock";
import DataBlock from "./blocks/DataBlock";

interface props {}

let Article: FC<props> = () => {
  let [id, _] = useQueryParam("article", "");
  let data: Article = getArticle(id);

  let { author, content, image_url } = data;
  return (
    <>
      <DataBlock data={data} />
      <img src={image_url} />
      <div>{content}</div>
      <AuthorBlock name={author} />
    </>
  );
};

export default Article;
