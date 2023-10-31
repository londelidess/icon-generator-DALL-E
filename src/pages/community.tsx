import { type Icon } from "@prisma/client";
import { type NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";
import { PrimaryLinkButton } from "~/component/PrimaryLinkButton";
import { Button } from "~/component/Button";

const CommunityPage: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const icons = api.icons.getCommunityIcons.useQuery({ page: currentPage });
  const BUCKET_NAME = "icon-generator-londelidess";

  return (
    <>
      <Head>
        <title>Community Icons</title>
        <meta name="description" content="Community Icons" />
        <link rel="icon" href="/dall-e-icon-generator-favicon-color.png" />
      </Head>
      <main className="container mx-auto mt-14 mb-12 flex flex-col gap-4 px-8">
        <h1 className="text-4xl">Community Icons</h1>

        {icons.data && icons.data.length > 0 && (
          <>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
              {icons.data.map((icon: Icon) => (
                <li key={icon.id}>
                  <Image
                    className="w-full rounded-lg"
                    width="100"
                    height="100"
                    alt={icon.prompt ?? "an image of an icon"}
                    src={`https://${BUCKET_NAME}.s3.amazonaws.com/${icon.id}`}
                  />
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center mt-6">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="text-2xl mx-4">
                {currentPage}
              </div>
              <Button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={icons.data && icons.data.length < 36}
              >
                Next
              </Button>
            </div>
          </>
        )}

        {(!icons.data || icons.data.length === 0) && (
          <div className="flex flex-col items-center justify-center mt-12">
            <p className="text-2xl mb-4">No community icons have been added yet!</p>
            <PrimaryLinkButton href="/generate">Be The First One!</PrimaryLinkButton>
          </div>
        )}
      </main>
    </>
  );
};

export default CommunityPage;
