import { Link } from "react-router";

type NotFoundContentProps = {
  heading?: string;
  message?: string;
};

export function NotFoundContent({
  heading = "Page not found",
  message = "The page you're looking for doesn't exist or may have moved.",
}: NotFoundContentProps) {
  return (
    <div className="max-w-xl mx-auto text-center py-12 md:py-20">
      <p className="font-mono text-sm text-gray-500 mb-3">404</p>
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        {heading}
      </h1>
      <p className="text-gray-600 font-sans leading-relaxed mb-8">{message}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to work
        </Link>
      </div>
    </div>
  );
}
