import type { FC } from "react";
import CoolPhoto from "../../assets/cool-photo.jpg";

interface props {
  article: Article;
}

const ArticleCard: FC<props> = ({ article }) => {
  const { title, content, date, author } = article;

  let snippet = content.split(".")[0];

  return (
    <>
      <div className="card bg-base-300 min-w-[20rem] shadow-xl">
        <figure>
          <img src={CoolPhoto} alt="..." />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{snippet}</p>
          <div className="card-actions justify-end pt-2">
            <button className="btn btn-primary rounded-lg">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
