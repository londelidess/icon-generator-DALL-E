import { PrimaryLink } from "./PrimaryLink";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="container mx-auto mt-2 flex flex-col items-center px-4 lg:grid lg:grid-cols-3 lg:items-center lg:px-4">
        <div className="mb-4 flex justify-center space-x-4 lg:mb-0 lg:justify-start">
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
        <div className="mb-4 text-center lg:mb-0">
          © {new Date().getFullYear()} | Coded by Makoto Doi
        </div>
        <ul className="flex justify-center space-x-4">
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
        </ul>
      </div>
    </footer>
  );
}
