"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fading } from "@/components/fading";

export const ImageGrid = ( { images, className, colsClasses, fadeDirection } ) =>
{
  return (
    <div className={cn( "grid", colsClasses )}>
      {/*
         Maybe TODO: Fix issue where if top images are already loaded, delay still accounts for those images, delaying fading of new ones
         NOTE: Just keeping track of amount of images loaded (
          const [ imagesLoaded, setImagesLoaded ] = useState( 0 );
          ...
          <ImageItem
            ...
            delay={(index-imagesLoaded) * ( 1 / images.length )}
            onVisible(() => setImagesLoaded( imagesLoaded + 1 ))
            onHide(() => setImagesLoaded( imagesLoaded - 1 ))
            ...
          />
          ...
         )
         Will PARTIALLY fix the issue, but introduce issue where delay is:
          a) inconsistent
          b) cut for every image, effectively making the `( 1 / images.length )` multiplier always 1
       */}
      {images.map( ( image, index ) => (
        <ImageItem
          key={index}
          image={image}
          className={className}
          delay={index * ( 1 / images.length )}
          direction={fadeDirection}
        />
      ) )}
    </div>
  );
};

const ImageItem = ( { image, className, ...props } ) => (
  <Fading {...props}>
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
);