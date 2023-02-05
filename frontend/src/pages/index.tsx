import LatestArticle from "@/components/LatestArticle";
import RecentArticles from "@/components/RecentArticles";
import type { FC } from "react";

let index: FC = () => {
  return (
    <>
      <div className="flex flex-col py-5">
        <div className="text-3xl">Latest Article</div>
        <div className="divider"></div>
      </div>
      <LatestArticle />
      <div className="mt-20 flex flex-col py-5">
        <div className="text-3xl">War</div>
        <div className="divider"></div>
      </div>
      <RecentArticles name="senator-marcus" />
      <div className="mt-20 flex flex-col py-5">
        <div className="text-3xl">The Economy</div>
        <div className="divider"></div>
      </div>
      <RecentArticles name="Sir Humphrey Appleby" />
      <div className="mt-20 flex flex-col py-5">
        <div className="text-3xl">The Trout population</div>
        <div className="divider"></div>
      </div>
      <RecentArticles name="Governor Felicity" />
    </>
  );
};

export default index;
