import getArticles from "@hooks/getArticles";
import type { FC } from "react";
import ArticleCard from "./ArticleCard";

interface props {}

const RecentArticles: FC<props> = () => {
  let articles = getArticles();

  return (
    <div className="flex flex-row gap-10 overflow-scroll">
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </div>
  );
};

export default RecentArticles;
