import classes from "classnames";
import { FC } from "react";
import Image from "next/image";

interface BlogPreviewCardProps {
  title: string;
  uri: string;
}

export const BookCover: FC<BlogPreviewCardProps> = ({ title, uri }) => {
  return (
    <div
      className={classes(
        "transform transition-all",
        "w-full md:w-1/3 bg-gradient-to-r p-1"
      )}
    >
      <div className="relative mx-auto w-[225px] h-[300px] overflow-hidden m-5 hover:scale-[1.05] transition-all hover:shadow-xl shadow-md">
        <Image alt={title} src={uri} className="object-cover" fill />
      </div>
    </div>
  );
};
