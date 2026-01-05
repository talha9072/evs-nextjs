export default function FranchiseForm() {
  return (
    <form
      name="franchise"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="row contact-form-style-02"
    >
      {/* REQUIRED for Netlify */}
      <input type="hidden" name="form-name" value="franchise" />

      {/* Honeypot (anti-spam) */}
      <p hidden>
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control required"
          type="text"
          name="name"
          placeholder="Your name*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control required"
          type="tel"
          name="phone"
          placeholder="Your phone*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control required"
          type="email"
          name="email"
          placeholder="Your email address*"
          required
        />
      </div>

      <div className="col-md-6 mb-30px">
        <input
          className="form-control"
          type="text"
          name="subject"
          placeholder="Your subject"
        />
      </div>

      <div className="col-md-12 mb-30px">
        <textarea
          className="form-control"
          rows="4"
          name="comment"
          placeholder="Your message"
        />
      </div>

      <div className="col-xl-7 col-md-8 pb-30px">
        <p className="fs-15 lh-26">
          We respect your privacy. Your information will never be shared.
        </p>
      </div>

      <div className="col-xl-5 col-md-4 text-center text-md-end sm-mt-25px">
        <button
          type="submit"
          className="btn btn-medium btn-round-edge btn-dark-gray"
        >
          Send message
          <span className="bg-white"></span>
        </button>
      </div>
    </form>
  );
}
