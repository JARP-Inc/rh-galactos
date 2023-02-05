import getArticles from "@/hooks/getArticles";
import type { FC } from "react";
import ArticleCard from "./ArticleCard";

interface props {}

const RecentArticles: FC<props> = () => {
  let articles = getArticles().reverse();

  return (
    <div className="flex flex-row gap-10 overflow-scroll">
      {articles.map((article, i) => {
        return <ArticleCard article={article} key={i} articleID={i + 1} />;
      })}
    </div>
  );
};

export default RecentArticles;
