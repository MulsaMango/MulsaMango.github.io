import { EmailCopyLink, GitHubLink, LinkedInLink } from "./ContactLinks";

export function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 mt-20 border-t border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">© 2026 Tulsa Daley</p>
        <div className="flex gap-6 items-center">
          <GitHubLink />
          <LinkedInLink />
          <EmailCopyLink />
        </div>
      </div>
    </footer>
  );
}
