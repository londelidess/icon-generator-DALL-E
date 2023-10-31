import { PrimaryLink } from "./PrimaryLink";
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="container mt-2 mx-auto flex flex-col md:flex-row h-24 items-center justify-between w-full px-4">
        <ul className="flex flex-col md:flex-row justify-between w-full items-center">
          <li>
            <PrimaryLink href="/">icons.makotodoi.com</PrimaryLink>
          </li>
          <li>
            © 2023 | Coded by Makoto Doi
          </li>
          <li className="flex space-x-4">
            <a href="https://www.linkedin.com/in/makoto-doi/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004164127853" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://github.com/londelidess" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
