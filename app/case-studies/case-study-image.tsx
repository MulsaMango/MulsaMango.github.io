interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
}

export const Image = ({ caption, className, ...props }: ImageProps) => {
  return (
    <figure className={className ? undefined : "w-full"}>
      <img
        {...props}
        className={className || "w-full h-auto"}
        alt={props.alt}
      />
      {caption && (
        <figcaption className="mt-2 text-center text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export const SmallCaseStudyImage = ({
  caption,
  ...props
}: ImageProps) => {
  return (
    <Image
      {...props}
      caption={caption}
      className="w-full md:w-1/2 max-w-full h-auto mx-auto rounded-lg"
    />
  );
};
