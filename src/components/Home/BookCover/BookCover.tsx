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
        "w-full md:w-1/3 shadow-lg bg-gradient-to-r m-2 grayscale hover:grayscale-0"
      )}
    >
      <div className="relative mx-auto w-[225px] h-[300px] hover:scale-[1.05] transition-all hover:shadow-lg shadow-md">
        <Image alt={title} src={uri} className="object-fit" fill />
      </div>
    </div>
  );
};
