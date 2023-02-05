import type { FC } from "react";

interface props {
  article: Article;
}

const LatestArticle: FC<props> = ({ article }) => {
  let { title, author, content, in_game_date, image_url } = article;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="latestArticle" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};
export default LatestArticle;
