import classes from "classnames";
import { FC } from "react";
import Image from "next/image";

interface BlogPreviewCardProps {
  subHeading: string;
  imageUri: string;
}

export const CharityDisplayItem: FC<BlogPreviewCardProps> = ({
  subHeading,
  imageUri,
}) => {
  return (
    <div className={classes("md:w-1/3 bg-gradient-to-r m-4 max-w-[200px]")}>
      <div className="relative mx-auto w-[200px] h-[200px]">
        <Image alt={subHeading} src={imageUri} className="object-fit" fill />
      </div>
      <p className="py-2 text-center font-semibold break-words whitespace-normal">
        {subHeading}
      </p>
    </div>
  );
};
