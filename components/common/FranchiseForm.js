import { useRouter } from "next/router";
import { useState } from "react";

export default function FranchiseForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/__netlify-form.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      // ✅ SIMPLE REDIRECT (Next.js page)
      router.push("/thank-you");
    } catch (err) {
      alert("Submission failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form
      name="franchise"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="row contact-form-style-02"
    >
      <input type="hidden" name="form-name" value="franchise" />

      {/* Honeypot */}
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="col-md-6 mb-30px">
        <input className="form-control" name="name" required placeholder="Your name*" />
      </div>

      <div className="col-md-6 mb-30px">
        <input className="form-control" name="phone" required placeholder="Your phone*" />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control"
          type="email"
          name="email"
          required
          placeholder="Your email address*"
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input className="form-control" name="subject" placeholder="Your subject" />
      </div>

      <div className="col-md-12 mb-30px">
        <textarea className="form-control" name="comment" placeholder="Your message" />
      </div>

      <div className="col-xl-5 col-md-4 text-center text-md-end">
        <button
          type="submit"
          className="btn btn-dark-gray"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
