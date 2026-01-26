export const Heading2 = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={`font-semibold ${props.className ?? ""}`} {...props}>
      {children}
    </h2>
  );
};

export const Heading3 = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className={`font-semibold ${props.className ?? ""}`} {...props}>
      {children}
    </h3>
  );
};

export const Heading4 = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4 className={`font-semibold ${props.className ?? ""}`} {...props}>
      {children}
    </h4>
  );
};
