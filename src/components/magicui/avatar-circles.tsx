"use client";

import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
  id: number;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-10 rtl:space-x-reverse", className)}>
      {avatarUrls.map((item) => (
        
        <img
        key={item.id}
        className="h-[80px] w-[80px] "
        src={item.imageUrl}
        width={100}
        height={100}
        alt={`Avatar ${item.id}`}
      />
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-13 w-13 items-center justify-center rounded-full border-2 border-white bg-[#A4074D] text-center text-xs font-medium text-white hover:bg-gray-600 mt-2 dark:border-gray-800 dark:bg-[#A4074D] dark:text-black"
         
        >
          {numPeople}+
        </a>
      )}
    </div>
  );
};
