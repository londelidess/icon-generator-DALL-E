import { type Icon } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";
import { PrimaryLinkButton } from "~/component/PrimaryLinkButton";

const CommunityPage: NextPage = () => {
  const icons = api.icons.getCommunityIcons.useQuery();
  const BUCKET_NAME = "icon-generator-londelidess";

  return (
    <>
      <Head>
        <title>Community Icons</title>
        <meta name="description" content="Community Icons" />
        <link rel="icon" href="/dall-e-icon-generator-favicon-color.png" />
      </Head>
      <main className="container mx-auto mt-12 mb-12 flex flex-col gap-4 px-8">
        <h1 className="text-4xl">Community Icons</h1>

        {icons.data && icons.data.length > 0 && (
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
