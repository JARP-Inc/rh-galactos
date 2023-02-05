import StaffCard from "@/components/StaffCard";
import authorInformation from "@/helpers/authors";
import type { FC } from "react";

let index: FC = () => {
  return (
    <div className="mx-auto grid w-max grid-cols-3 justify-items-center gap-10">
      {Object.keys(authorInformation).map((e, i) => {
        let author = authorInformation[e];
        return (
          <div key={i} className="col-span-1">
            <StaffCard author={author} />
          </div>
        );
      })}
    </div>
  );
};

export default index;
