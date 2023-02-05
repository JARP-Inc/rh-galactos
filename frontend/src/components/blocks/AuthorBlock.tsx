/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import stringify from "@/helpers/stringify";
import authorInformation from "@/helpers/authors";

interface props {
  authorID: string;
}

const AuthorBlock: FC<props> = ({ authorID }) => {
  if (authorID === "loading...") return <></>;
  if (authorID === "me") authorID = "Ambassador Olivia";
  console.log(authorID);
  let { name, title, image_url, description } =
    authorInformation[stringify(authorID)]; // { name: "Loading...", description: "", title: "", image_url: "" };
  console.log(name);
  return (
    <div className="bg-primary flex flex-col items-center gap-3 rounded-md py-6 px-7">
      <div className="avatar">
        <div className="w-32 rounded-full">
          <img src={image_url} />
        </div>
      </div>
      <a href={`/staff/${stringify(name)}`} className="text-2xl font-semibold">
        {name}
      </a>
      <h2 className="text-secondary text-center text-xl">{title}</h2>

      <p className="text-justify">{description}</p>
    </div>
  );
};

export default AuthorBlock;
