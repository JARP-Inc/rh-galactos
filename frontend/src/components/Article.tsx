import type { FC } from "react";
import getArticle from "../hooks/getArticle";
import useQueryParam from "../hooks/useQueryParam";
import AuthorBlock from "./blocks/AuthorBlock";
import DataBlock from "./blocks/DataBlock";

interface props {}

const Article: FC<props> = () => {
  let [id, _] = useQueryParam("article", "");
  let data: Article = getArticle(id);

  let { author, content } = data;
  return (
    <div className="flex flex-col gap-9">
      <DataBlock data={data} />
      {/* <img className="overflow-hidden rounded-md bg-cover" src={image_url} /> */}

      <div className="">
        <div className="float-right ml-6 mb-3 w-1/4">
          {/* <AuthorBlock authorID={author} /> */}
        </div>
        <div className="whitespace-pre-wrap text-justify">{content}</div>
      </div>
    </div>
  );
};

export default Article;