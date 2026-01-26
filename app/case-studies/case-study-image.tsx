export const SmallCaseStudyImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) => {
  return (
    <img
      {...props}
      className="w-full md:w-1/2 max-w-full h-auto mx-auto rounded-lg"
      alt={props.alt}
    />
  );
};
