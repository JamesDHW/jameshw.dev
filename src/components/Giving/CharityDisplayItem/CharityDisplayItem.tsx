import classes from "classnames";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface CharityDisplayItemProps {
  name: string;
  logoUri: string;
  donation: string;
  siteUrl: string;
}

export const CharityDisplayItem: FC<CharityDisplayItemProps> = ({
  name,
  logoUri,
  donation,
  siteUrl,
}) => {
  return (
    <Link href={siteUrl}>
      <div
        className={classes(
          "flex justify-between my-2 py-2",
          "shadow-md hover:shadow-lg dark:shadow-gray-700",
          "hover:scale-[1.01] transition-all"
        )}
      >
        <div className="flex px-2">
          <div className="relative min-w-[50px] w-[50px] h-[50px]">
            <Image alt={name} src={logoUri} className="object-fit" fill />
          </div>
          <p className="text-base sm:text-lg font-thin px-4 my-auto">{name}</p>
        </div>
        <p className="font-thin px-4 my-auto">{donation}</p>
      </div>
    </Link>
  );
};
