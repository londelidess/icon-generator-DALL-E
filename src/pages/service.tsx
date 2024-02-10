import { NextPage } from "next";
import Head from "next/head";

const TermsOfServicePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
        <meta
          name="description"
          content="Terms of Service for [Your Company Name]"
        />
        <link rel="icon" href="/dall-e-icon-generator-favicon-color.png" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col p-4">
        <h1 className="my-4 text-3xl font-bold">Terms of Service</h1>
        <article>
          {/* ... rest of your article content ... */}
          <section className="mb-4">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              Welcome to DALL-E icon generator. These Terms of Service govern
              your use of our website located at https://icons.makotodoi.com
              operated by Makoto Doi.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy
              ("Agreements"). You acknowledge that you have read and understood
              Agreements, and agree to be bound of them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then
              you may not use the Service, but please let us know by emailing at
              makoto.doi0701@gmail.com so we can try to find a solution. These
              Terms apply to all visitors, users and others who wish to access
              or use Service.
            </p>
            {/* ... more sections ... */}
          </section>
          <section className="mb-4">
            <h2 className="text-2xl font-bold">10. Acknowledgement</h2>
            <p>
              By using our Service, you acknowledge that you have read and
              understood these Terms of Service and agree to be bound by them.
            </p>
          </section>
          <section className="mb-4">
            <h2 className="text-2xl font-bold">11. Contact Us</h2>
            <p>
              Please send your feedback, comments, requests for technical
              support by email: makoto.doi0701@gmail.com.
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default TermsOfServicePage;
