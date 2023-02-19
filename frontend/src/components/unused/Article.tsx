import type { FC } from "react";
import useArticleByID from "../../hooks/useArticleByID";
import AuthorBlock from "../blocks/AuthorBlock";
import TitleBlock from "../blocks/TitleBlock";

interface props {
  id: string;
}

const Article: FC<props> = ({ id }) => {
  let data: Article = useArticleByID(id);

  let { author, content, image_url } = data;
  return (
    <div className="flex flex-col gap-9">
      <TitleBlock data={data} />
      {/* <img className="overflow-hidden rounded-md bg-cover" src={image_url} /> */}

      <div className="">
        <div className="float-right ml-6 mb-3 w-1/4">
          <AuthorBlock authorID={author} />
        </div>
        <div className="whitespace-pre-wrap text-justify">{content}</div>
      </div>
    </div>
  );
};

export default Article;
