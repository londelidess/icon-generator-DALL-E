import { type Icon } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { api } from "~/utils/api";
import { PrimaryLinkButton } from "~/component/PrimaryLinkButton";
import { Button } from "~/component/Button";

const CollectionPage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const icons = api.icons.getIcons.useQuery({ page: currentPage });
  const BUCKET_NAME = "icon-generator-londelidess";

  return (
    <>
      <Head>
        <title>Your Icons</title>
        <meta name="description" content="Your Icons" />
        <link rel="icon" href="/dall-e-icon-generator-favicon-color.png" />
      </Head>
      <main className="container mx-auto mt-12 mb-12 flex flex-col gap-4 px-8">
        <h1 className="text-4xl">Your Icons</h1>

        {icons.data && icons.data.length > 0 && (
          <>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {icons.data.map((icon: Icon) => (
                <li key={icon.id}>
                  <Image
                    className="w-full rounded-lg"
                    width="512"
                    height="512"
                    alt={icon.prompt ?? "an image of an icon"}
                    src={`https://${BUCKET_NAME}.s3.amazonaws.com/${icon.id}`}
                  />
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center mt-6">
        <div>
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
        </div>
        <div className="text-2xl mx-4">
        {currentPage}
      </div>

  <div>
    <Button
      onClick={() => setCurrentPage((prev) => prev + 1)}
      disabled={icons.data && icons.data.length < 24}
    >
      Next
    </Button>
  </div>
</div>
          </>
        )}

        {(!icons.data || icons.data.length === 0) && (
          <div className="flex flex-col items-center justify-center mt-12">
            <p className="text-2xl mb-4">You don't have any icons yet!</p>
            <PrimaryLinkButton href="/generate">Make Your First Icon</PrimaryLinkButton>
          </div>
        )}
      </main>
    </>
  );
};

export default CollectionPage;
