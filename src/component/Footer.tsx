import { PrimaryLink } from "./PrimaryLink";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="container mx-auto mt-2 flex h-24 w-full flex-col items-center justify-between px-4 md:flex-row">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div className="flex space-x-4">
            <span>
              <PrimaryLink href="/">icons.makotodoi.com</PrimaryLink>
            </span>
            <span>
              <PrimaryLink href="/privacy">Privacy Policy</PrimaryLink>
            </span>
            <span>
              <PrimaryLink href="/service">Terms of Service</PrimaryLink>
            </span>
          </div>
          <div>© {new Date().getFullYear()} | Coded by Makoto Doi</div>
          <li className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/makoto-doi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100004164127853"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/londelidess"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
}
