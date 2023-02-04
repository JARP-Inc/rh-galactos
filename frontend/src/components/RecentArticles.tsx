import type { FC } from "react";
import ArticleCard from "./ArticleCard";

interface props {
  name: string;
}

const RecentArticles: FC<props> = ({ name }) => {
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
