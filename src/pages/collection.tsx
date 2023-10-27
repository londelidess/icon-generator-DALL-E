import { type Icon } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { api } from "~/utils/api";

const CollectionPage: NextPage = () => {
  const icons = api.icons.getIcons.useQuery();
  const BUCKET_NAME = "icon-generator-londelidess";

  return (
    <>
      <Head>
        <title>Your Icons</title>
        <meta name="description" content="Your Icons" />
        <link rel="icon" href="/dall-e-icon-generator-favicon-color.png" />
      </Head>
      {/* <main className="container mx-auto mt-24 flex min-h-screen flex-col gap-4 px-8"> */}
      <main className="container mx-auto mt-24 flex flex-col gap-4 px-8">
        <h1 className="text-4xl">Your Icons</h1>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"> 
        {icons.data?.map((icon: Icon) => (
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
      </main>
    </>
  );
};

export default CollectionPage;
