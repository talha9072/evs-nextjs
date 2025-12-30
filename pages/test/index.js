import Head from "next/head";

export default function TestFormPage() {
  return (
    <>
      <Head>
        <title>Netlify Form Test</title>
      </Head>

      <main style={{ padding: "40px" }}>
        <h1>Netlify Form Test</h1>

        <form
          name="test-form"
          method="POST"
          data-netlify="true"
        >
          {/* REQUIRED */}
          <input type="hidden" name="form-name" value="test-form" />

          <p>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </p>

          <p>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </p>

          <p>
            <button type="submit">Send Test</button>
          </p>
        </form>
      </main>
    </>
  );
}
