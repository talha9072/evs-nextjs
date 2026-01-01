import { useState } from "react";
import Head from "next/head";

export default function TestPage() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/__netlify-form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully");
        e.target.reset();
      } else {
        setStatus("❌ Submission failed");
      }
    } catch {
      setStatus("❌ Network error");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Netlify Test Form</title>
      </Head>

      <form
        name="my-new-contact-form"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="my-new-contact-form" />

        <p hidden>
          <label>
            Don’t fill this out:
            <input name="bot-field" />
          </label>
        </p>

        <input name="name" required placeholder="Name" />
        <input name="email" type="email" required placeholder="Email" />
        <textarea name="message" required placeholder="Message" />

        <button disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>

        {status && <p>{status}</p>}
      </form>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
      useScrollContainer: false,
      
    },
    
  };
}