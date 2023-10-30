import { PrimaryLink } from "./PrimaryLink";
import { FaLinkedin, FaFacebook,FaGithub } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="dark:bg-gray-900">
      <div className="container mx-auto flex h-24 items-center w-full px-4">
        <ul className="flex justify-between w-full items-center">
          <li>
            <PrimaryLink href="/">icons.makotodoi.com</PrimaryLink>
          </li>
          <li>
          © 2023 | Coded by Makoto Doi
            {/* <PrimaryLink href="/privacy-policy">Privacy Policy</PrimaryLink> */}
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
            {/* <PrimaryLink href="/terms-of-service">Terms of Service</PrimaryLink> */}
          </li>
        </ul>
      </div>
    </footer>
  );
}
