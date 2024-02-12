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
          <p>
            Thank you very much for using the services provided by Makoto Doi.
            Users are kindly requested to follow the Terms of Use when using the
            Service.
          </p>

          <section className="mb-4">
            <h2 className="text-2xl font-bold">User Registration</h2>
            <p>
              User registration will be completed when we approve an application
              for registration by an applicant. We may not approve an
              application for registration if we judge it inappropriate; for
              example, the applicant violated the Terms of Use in the past. We
              will not disclose reasons for rejection.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold">Management of User Name</h2>
            <p>
              Users should manage their user names and passwords for the Service
              under their responsibility. Do not let others know your password
              to protect your user name. Users must not assign or lend their
              user names or passwords to a third party. If a combination of a
              user name with a password corresponds to the registered data in
              logging in, we will regard it as being used by the user who
              registered the user name. If you find unauthorized use of your
              user name, promptly report to us.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold">Use of the Service</h2>
            <p>
              Users must not commit wrongdoing in use of the Service, for
              example, destroying or disturbing functions of our
              servers/networks. If we judge any act of a user a wrongdoing, we
              may restrict the user&quot;s use of the Service or terminate the
              user&quot;s registration without prior notice. In this case, we
              shall bear no liability for any damages the user incurs arising
              from the restricted use and the like.
            </p>
          </section>

          {/* Repeat for each section provided in your Terms of Use */}

          <section className="mb-4">
            <h2 className="text-2xl font-bold">
              Governing Law and Jurisdiction
            </h2>
            <p>
              The interpretation of the terms is governed by the laws of Japan.
              In the event of any disputes arising from the Service, Tokyo
              District Court or Tokyo Summary Court shall have an agreed
              exclusive jurisdiction.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold">Established on</h2>
            <p>October 2023</p> {/* Replace ＊＊ with the actual date */}
          </section>

          <section className="mb-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
              Please send your feedback, comments, requests for technical
              support by email:
              <a href="mailto:makoto.doi0701@gmail.com" className="">
                makoto.doi0701@gmail.com
              </a>
              .
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default TermsOfServicePage;
