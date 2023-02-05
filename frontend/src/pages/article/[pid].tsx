/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"client";
import AuthorBlock from "@/components/blocks/AuthorBlock";
import DataBlock from "@/components/blocks/DataBlock";
import getArticle from "@/hooks/getArticle";
import { useRouter } from "next/router";
import { FC } from "react";

interface props {}

const Article: FC<props> = () => {
  let { pid } = useRouter().query;
  if (typeof pid !== "string") return <></>;

  let article: Article = getArticle(pid);

  if (!article) return <>loading...</>;

  let { author, content, image_url } = article;
  return (
    <div className="flex flex-col gap-9">
      <DataBlock data={article} />
      <img className="overflow-hidden rounded-md bg-cover" src={image_url} />

      <div className="">
        <div className="float-right ml-6 mb-3 w-1/4">
          <AuthorBlock authorID={author} />
        </div>
        <div className="whitespace-pre-wrap text-justify">{content}</div>
      </div>
    </div>
  );
};

export default Article;
