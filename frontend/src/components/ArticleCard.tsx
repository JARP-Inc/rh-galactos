import type { FC } from "react";
import CoolPhoto from "../../assets/cool-photo.jpg";

interface props {}

const ArticleCard: FC<props> = () => {
  return (
    <>
      <div className="card bg-base-300 min-w-[20rem] shadow-xl">
        <figure>
          <img src={CoolPhoto} alt="..." />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Are xombies coming for you?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="card-actions justify-end pt-2">
            <button className="btn btn-primary rounded-lg">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
