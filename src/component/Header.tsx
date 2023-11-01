import { signIn, signOut, useSession } from "next-auth/react";
import { useBuyCredits } from "~/hooks/useBuyCredits";
import { api } from "~/utils/api";
import { Button } from "./Button";
import { PrimaryLink } from "./PrimaryLink";
import Image from 'next/image';

export function Header() {
  const session = useSession();
  const { buyCredits } = useBuyCredits();

  const isLoggedIn = !!session.data;

  const credits = api.user.getCredits.useQuery(undefined, {
    enabled: isLoggedIn,
  });

  return (
    <header className="dark:bg-gray-900">
       <div className="container mx-auto mt-2 flex flex-row h-16 items-center justify-between px-4">
        {/* <PrimaryLink href="/">DALL-E icon generator</PrimaryLink> */}
        <PrimaryLink href="/">
        <Image
            src="/dall-e-icon-generator-high-resolution-logo-transparent.png"
            alt="DALL-E Icon Generator"
            width={200}
            height={50}
            priority
        />
          </PrimaryLink>
          <ul className="flex flex-row gap-4">
          {isLoggedIn && (
            <li>
            <PrimaryLink href="/generate">Generate</PrimaryLink>
          </li>
          )}
          <li>
            <PrimaryLink href="/community">Community</PrimaryLink>
          </li>
          {isLoggedIn && (
            <li>
              <PrimaryLink href="/collection">Your Collection</PrimaryLink>
            </li>
          )}
        </ul>
        <ul className="flex flex-row">
          {isLoggedIn && (
            <>
              <div className="flex items-center">
                Credits remaining {credits.data}
              </div>
              <li>
                <Button
                  onClick={() => {
                    buyCredits().catch(console.error);
                  }}
                >
                  Buy Credits
                </Button>
              </li>
              <li>
              <Button
                variant="secondary"
                onClick={() => {
                  signOut({ callbackUrl: '/' }).catch(console.error);
                }}
              >
                  Logout
                </Button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <li>
              <Button
                onClick={() => {
                  signIn().catch(console.error);
                }}
              >
                Login
              </Button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
