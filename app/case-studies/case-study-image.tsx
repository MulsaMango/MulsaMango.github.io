import { useState, useEffect, useRef } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
  lightbox?: boolean;
  noBorder?: boolean;
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    dialog.addEventListener("cancel", handleCancel);
    return () => dialog.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  useEffect(() => {
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, []);

  return (
    <dialog
      ref={ref}
      aria-label={`Enlarged view: ${alt}`}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className="m-auto bg-transparent p-0 shadow-none backdrop:bg-gray-900/75"
    >
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="block max-h-[90vh] max-w-[90vw] w-auto h-auto rounded-lg shadow-2xl"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute right-2 top-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/80 text-gray-500 shadow-sm transition-colors hover:bg-white hover:text-gray-900"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <title>Close</title>
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </dialog>
  );
}

export const Image = ({ caption, lightbox, noBorder, className, ...props }: ImageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className={className ? undefined : "w-full"}>
        <img
          {...props}
          className={[className || "w-full h-auto", !noBorder && "border border-gray-200", lightbox && "cursor-zoom-in"].filter(Boolean).join(" ")}
          alt={props.alt}
          onClick={lightbox ? () => setOpen(true) : undefined}
        />
        {caption && (
          <figcaption className="mt-2 text-center text-neutral-400">
            {caption}
          </figcaption>
        )}
      </figure>
      {open && props.src && (
        <Lightbox
          src={props.src as string}
          alt={props.alt || ""}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

interface AnnotatedImageProps {
  src: string;
  alt: string;
  annotation: React.ReactNode;
  caption?: string;
}

export const AnnotatedImage = ({ src, alt, annotation, caption }: AnnotatedImageProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure className="not-prose w-full">
        <div className="relative">
          <div className="absolute left-4 right-4 top-4 z-10 rounded border border-gray-200 bg-white p-4 shadow-sm">
            <p className="text-sm leading-relaxed text-gray-700">{annotation}</p>
          </div>
          <img
            src={src}
            alt={alt}
            className="w-full h-auto border border-gray-200 cursor-zoom-in"
            onClick={() => setOpen(true)}
          />
        </div>
        {caption && (
          <figcaption className="mt-2 text-center text-neutral-400 text-sm">{caption}</figcaption>
        )}
      </figure>
      {open && (
        <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export const SmallCaseStudyImage = ({ caption, lightbox, ...props }: ImageProps) => {
  return (
    <Image
      {...props}
      lightbox={lightbox}
      caption={caption}
      className="w-full md:w-1/2 max-w-full h-auto mx-auto rounded-md"
    />
  );
};
