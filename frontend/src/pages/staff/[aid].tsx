/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"client";
import RecentArticles from "@/components/RecentArticles";
import authorInformation from "@/helpers/authors";
import { useRouter } from "next/router";
import { FC } from "react";

let staffPage: FC = () => {
  let { aid } = useRouter().query;
  let author = authorInformation[aid as string];

  if (!author) return <></>;

  let { name, title, description, image_url } = author;

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
      <div className="text-justify">{description}</div>
      <div className="mt-12">
        <h1 className="text-3xl font-semibold">Recent Articles</h1>
        <div className="divider"></div>
      </div>
      <RecentArticles name={name} />
    </>
  );
};
export async function getStaticPaths() {
  return {
    paths: Object.keys(authorInformation).map((e) => {
      return { params: { aid: e } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(_: any) {
  return {
    props: {},
  };
}
export default staffPage;
