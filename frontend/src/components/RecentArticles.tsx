import getArticlesByAuthor from "@/hooks/getArticlesByAuthor";
import type { FC } from "react";
import ArticleCard from "./ArticleCard";

interface props {
  name: string;
}

const RecentArticles: FC<props> = ({ name }) => {
  let articles = getArticlesByAuthor(name).reverse();

  return (
    <div className="flex flex-row gap-10 overflow-scroll">
      {articles.map((article, i) => {
        return <ArticleCard article={article} key={i} articleID={i + 1} />;
      })}
    </div>
  );
};

export default RecentArticles;
