"client";
import AuthorPage from "@/components/AuthorPage";
import authorInformation from "@/helpers/authors";
import { useRouter } from "next/router";
import { FC } from "react";

let staffPage: FC = () => {
  let { aid } = useRouter().query;
  let author = authorInformation[aid as string];

  if (!author) return <></>;

  return (
    <>
      <AuthorPage author={author} />
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
    props: {}, // will be passed to the page component as props
  };
}
export default staffPage;
