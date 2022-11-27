"use client";

import { useRouter } from "next/navigation";

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  const router = useRouter();

  return (
    <div className="relative border-2 border-red-400 dark:border-red-500 rounded-lg p-10 h-72">
      <p className="font-bold text-xl md:text-3xl">
        Sorry, it looks like something went wrong!
      </p>
      <p className="text-xs md:text-base pt-8">Message: {error.message}</p>
      <button
        className="absolute right-8 bottom-8 hover:scale-[1.05] bg-red-500 text-base rounded-lg p-2"
        type="button"
        onClick={() => router.refresh()}
        // onClick={() => console.log({ router })}
      >
        Try again
      </button>
    </div>
  );
}
