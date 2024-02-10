import { PrimaryLink } from "./PrimaryLink";
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="container mx-auto mt-2 flex h-24 w-full flex-col items-center justify-between px-4 md:flex-row">
        <ul className="flex w-full flex-col items-center justify-between md:flex-row">
          <li className="flex space-x-4">
            <li>
              <PrimaryLink href="/">icons.makotodoi.com</PrimaryLink>
            </li>
            <li>

              <PrimaryLink href="/privacy">Privacy Policy</PrimaryLink>
            </li>
            <li>
              <PrimaryLink href="/service">
                Terms of Service
              </PrimaryLink>
            </li>
          </li>
          <li>© {new Date().getFullYear()} | Coded by Makoto Doi</li>
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
        </ul>
      </div>
    </footer>
  );
}
