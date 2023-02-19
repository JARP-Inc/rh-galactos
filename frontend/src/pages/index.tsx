import LatestArticleBlock from "@/components/LatestArticle";
import RecentArticlesBlock from "@/components/blocks/RecentArticlesRow";
import type { FC } from "react";

const Index: FC = () => {
  return (
    <>
      <div className="my-10">
        <div className="text-4xl font-bold">
          Read all the latest news from all over the Galaxy . . .
        </div>
        <div className="text-xl font-semibold text-zinc-600">
          (or something)
        </div>
      </div>
      <LatestArticleBlock />

      <RecentArticlesBlock something="senator-marcus" />
    </>
  );
};

export default Index;
