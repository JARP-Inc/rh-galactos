import type { FC } from "react";

interface props {
  article: Article;
  articleID: number;
}

const ArticleCard: FC<props> = ({ article, articleID }) => {
  const { title, content } = article;

  let snippet = content.split(".")[0] + " ...";

  return (
    <>
      <div className="card bg-base-300 min-w-[20rem] shadow-xl">
        <figure>
          <img src="/cool-photo.jpg" alt="..." />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-4">{title}</h2>
          <p>{snippet}</p>
          <div className="card-actions justify-end pt-2">
            <a
              href={`/article/${articleID}`}
              className="btn btn-primary rounded-lg"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
