import { NextPage } from "next";
import Head from "next/head";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for DALL-E icon generator"
        />
        <link rel="icon" href="/dall-e-icon-generator-favicon-color.png" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col p-4">
        <h1 className="my-4 text-3xl font-bold">Privacy Policy</h1>
        <article>
          {/* ... rest of your article content ... */}
          <section className="mb-4">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              Thank you for choosing to be part of our community at Makoto Doi.
              We are committed to protecting your personal information and your
              right to privacy. If you have any questions or concerns about this
              privacy notice, or our practices with regards to your personal
              information, please contact us at makoto.doi0701@gmail.com.
            </p>
            <p>
              When you visit our website http://icons.makotodoi.com/ (the
              "DALL-E icon generator"), and more generally, use any of our
              services, we appreciate that you are trusting us with your
              personal information. We take your privacy very seriously. In this
              privacy notice, we seek to explain to you in the clearest way
              possible what information we collect, how we use it and what
              rights you have in relation to it. We hope you take some time to
              read through it carefully, as it is important.
            </p>
            {/* ... more sections ... */}
          </section>
          <section className="mb-4">
            <h2 className="text-2xl font-bold">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about our policy, or our
              practices with regards to your personal information, please
              contact us at makoto.doi0701@gmail.com.
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default PrivacyPolicyPage;
