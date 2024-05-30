import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fading } from "@/components/fading";

export const ImageGrid = ( { images, className, colsClasses } ) =>
{
  return (
    <div className={cn( "grid", colsClasses )}>
      {images.map( ( image, index ) => (
        <ImageItem key={index} image={image} className={className} />
      ) )}
    </div>
  );
};

const ImageItem = ( { image, className } ) => (
  <Fading>
    <div className="w-full flex flex-col items-center p-2">
      <Link href={image.url ?? "#"}>
        <img
          src={image.src}
          alt={image.alt}
          className={cn(
            "transition-all duration-200 transform rounded-md shadow-md hover:shadow-xl hover:-translate-y-1.5",
            className
          )}
        />
      </Link>
      <p>{image.title}</p>
    </div>
  </Fading>
)