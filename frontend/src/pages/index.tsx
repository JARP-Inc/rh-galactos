import LatestArticle from "@/components/LatestArticle";
import RecentArticles from "@/components/RecentArticles";
import type { FC } from "react";

let index: FC = () => {
  let myArticle: Article = {
    title: "My Article",
    author: "John",
    content: "Hello world, I am the content of the article",
    in_game_date: "2015-98-22",
    image_url: "/cool-photo.jpg",
    publication_date: "",
  };
  return (
    <>
      <div className="flex flex-col py-5">
        <div className="text-3xl">Latest Article</div>
        <div className="divider"></div>
      </div>
      <LatestArticle article={myArticle} />
      <div className="mt-20 flex flex-col py-5">
        <div className="text-3xl">Latest Articles about the War</div>
        <div className="divider"></div>
      </div>
      <RecentArticles />
      <div className="mt-20 flex flex-col py-5">
        <div className="text-3xl">Latest Articles about the Economy</div>
        <div className="divider"></div>
      </div>
      <RecentArticles />
      <div className="mt-20 flex flex-col py-5">
        <div className="text-3xl">
          Latest Articles about the Trout population
        </div>
        <div className="divider"></div>
      </div>
      <RecentArticles />
    </>
  );
};

export default index;
