import { useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Input } from "~/component/Input";
import { FormGroup } from "~/component/FormGroup";
import { Button } from "~/component/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const GeneratePage: NextPage = () => {
  const [form, setForm] = useState({
    prompt: "",
  });
  const [imageUrl, setImageUrl] = useState('')

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess(data) {
      // console.log("mutation finished", data.imageUrl);
      if (!data.imageUrl) return;
      setImageUrl(data.imageUrl);
    },
  });

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    //TODO: submit the form data to the backend
    generateIcon.mutate({
      prompt: form.prompt,
    });
    setForm({prompt:""});
  }

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };
  }

  const session = useSession();

  const isLoggedIn = !!session.data;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {!isLoggedIn && (
          <Button
            onClick={() => {
              signIn().catch(console.error);
            }}
          >
            Login
          </Button>
        )}
        {isLoggedIn && (
          <Button
            onClick={() => {
              signOut().catch(console.error);
            }}
          >
            Logout
          </Button>
        )}

        {/* {session.data?.user.name} */}
        <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
          <FormGroup>
            <label>Prompt</label>
            <Input value={form.prompt} onChange={updateForm("prompt")}></Input>
            <Button className="rounded bg-blue-400 px-4 py-2 hover:bg-blue-500">
              Submit
            </Button>
          </FormGroup>
        </form>
        <img
        src={`data:image/png;base64,${imageUrl}`}
        alt="an imageof your generated prompt"
        width="100"
        height="100"
        />
      </main>
    </>
  );
};

export default GeneratePage;
