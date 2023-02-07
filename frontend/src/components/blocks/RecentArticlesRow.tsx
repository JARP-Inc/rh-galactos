import getTopicByAuthor from "@/helpers/getTopicByAuthor";
import useArticlesByAuthor from "@/hooks/useArticleByAuthor";
import useArticlesByTopic from "@/hooks/useArticlesByTopic";
import type { FC } from "react";
import ArticleCard from "../ArticleCard";

interface props {
  something: string;
}

const RecentArticlesBlock: FC<props> = ({ something }) => {
  let articles = useArticlesByAuthor(something);
  let topic = getTopicByAuthor(something);

  console.log(something);
  return (
    <>
      <div className="mt-20 flex flex-col py-5">
        <div className="text-secondary text-2xl font-bold">{topic}</div>
        <div className="divider"></div>
      </div>
      <div className="flex flex-row gap-10 overflow-scroll">
        {articles.map((article, i) => {
          return (
            <ArticleCard article={article} key={i} articleID={article.id} />
          );
        })}
      </div>
    </>
  );
};

export default RecentArticlesBlock;
