import RecentArticles from "@/components/RecentArticles";
import type { FC } from "react";

interface props {
  author: Author;
}

let AuthorPage: FC<props> = ({ author }) => {
  let { name, title, image_url } = author;
  return (
    <>
      <div className="flex flex-row items-center justify-start gap-5">
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img src={image_url} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-info text-3xl font-semibold">{name}</h1>
          <h2 className="text-secondary">{title}</h2>
        </div>
      </div>
      <div className="divider"></div>
      <div className="text-justify">
        <slot />
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-semibold">Recent Articles</h1>
        <div className="divider"></div>
      </div>
      <RecentArticles />
    </>
  );
};

export default AuthorPage;
