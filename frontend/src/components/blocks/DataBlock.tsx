import type { FC } from "react";

interface props {
  data: Article;
}

let DataBlock: FC<props> = ({ data }) => {
  let { title, in_game_date: date } = data;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{date}</h2>
    </div>
  );
};

export default DataBlock;
