/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import getArticles from "@/hooks/getArticles";

const LatestArticle: FC = () => {
  let article = getArticles(0)[0];

  if (!article) return <></>;

  let { title, content, image_url, id } = article;
  let snippet = content.split(".").slice(0, 1) + " . . .";
  return (
    <div className="card card-side bg-base-300 h-max shadow-xl">
      <div className="w-2/3">
        <img className="bg-clip" src={image_url} alt="" />
      </div>
      <div className="card-body w-1/3">
        <h2 className="card-title">{title}</h2>
        <p>{snippet}</p>
        <div className="card-actions justify-end">
          <a href={`/article/${id}`} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
export default LatestArticle;
