import type { FC } from "react";
import RecentArticles from "./RecentArticles";

interface props {}

const Home: FC<props> = () => {
  return (
    <>
      <RecentArticles name={""} />
    </>
  );
};

export default Home;
