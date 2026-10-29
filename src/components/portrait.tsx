import Image from "next/image";
import { cn } from "@/lib/utils";

type PortraitProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function Portrait({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className,
}: PortraitProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-[1.6rem] ring-1 ring-gold/45",
        className,
      )}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
      />
    </div>
  );
}
