import type { FC } from "react";
import ArticleCard from "./ArticleCard";

interface props {}

const RecentArticles: FC<props> = () => {
  return (
    <div className="flex flex-row gap-10 overflow-scroll">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
};

export default RecentArticles;
