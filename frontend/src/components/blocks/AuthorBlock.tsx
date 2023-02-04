import type { FC } from "react";

interface props {
  author: string;
}

let Author: FC<props> = ({ author }) => {
  return <>content,{author}</>;
};

export default Author;
