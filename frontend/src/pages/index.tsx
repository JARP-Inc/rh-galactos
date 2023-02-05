import LatestArticle from "@/components/LatestArticle";
import RecentArticles from "@/components/RecentArticles";
import type { FC } from "react";

let index: FC = () => {
  return (
    <>
      <div className="my-10">
        <div className="text-primary text-4xl font-bold">
          Read all the latest news from all over the Galaxy ...
        </div>
        <div className="text-secondary text-xl font-semibold">or something</div>
      </div>
      <div className="flex flex-col py-5">
        <div className="text-info text-3xl font-bold">Latest Article</div>
        <div className="divider"></div>
      </div>
      <LatestArticle />
      <div className="mt-20 flex flex-col py-5">
        <div className="text-info text-2xl font-bold">War</div>
        <div className="divider"></div>
      </div>
      <RecentArticles name="senator-marcus" />
    </>
  );
};

export default index;
