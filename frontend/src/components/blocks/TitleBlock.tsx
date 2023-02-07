import type { FC } from "react";

interface props {
  data: Article;
}

const TitleBlock: FC<props> = ({ data }) => {
  let { title, in_game_date: date } = data;
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-secondary text-2xl font-bold">{title}</h1>
      <h2 className="text-secondary text-lg">{date}</h2>
    </div>
  );
};

export default TitleBlock;
