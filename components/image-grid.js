import { cn } from "@/lib/utils";
import Link from "next/link";

export const ImageGrid = ( { images, className, cols } ) => (
  <div className={`grid xl:grid-cols-${cols} ${cols >= 2 && `max-xl:grid-cols-${cols-1}`} ${cols >= 3 && `max-md:grid-cols-${cols-2}`}`}>
    {images.map( ( image, index ) => (
      <div key={index} className="w-full flex flex-col items-center p-2">
        <Link href={image.url ?? "#"}>
          <img
            src={image.src}
            alt={image.alt}
            className={cn(
              "transition-all duration-200 rounded-md shadow-md hover:shadow-xl hover:-translate-y-1.5",
              className
            )}
          />
        </Link>
        <p>{image.title}</p>
      </div>
    ))}
  </div>
);