import { useState } from "react";

export default function FranchiseFormAR() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/__netlify-form.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!res.ok) throw new Error("Failed");

      // ✅ SAME thank-you page as English
      window.location.href = "/thank-you";
    } catch (err) {
      alert("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
      setLoading(false);
    }
  };

  return (
    <section className="position-relative pt-100px mb-50px" dir="rtl">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="bg-black pt-7 ps-8 pe-8 pb-5 border-radius-6px">
              <div className="row">
                <div className="col-9">
                  <h2 className="fw-700 alt-font text-white">
                    <span className="text-base-color">مهتم</span> بالانضمام إلينا؟
                  </h2>
                  <p className="mb-40px">
                    املأ النموذج أدناه، وسيتواصل فريقنا معك قريبًا.
                  </p>
                </div>
                <div className="col-3 text-start">
                  <i className="bi bi-send icon-large text-base-color"></i>
                </div>
              </div>

              <form
                name="franchise"          // ✅ SAME NAME
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
                    لا تملأ هذا الحقل <input name="bot-field" />
                  </label>
                </p>

                <div className="col-md-6 mb-30px">
                  <input
                    className="form-control pe-13"
                    name="name"
                    placeholder="اسمك*"
                    required
                  />
                </div>

                <div className="col-md-6 mb-30px">
                  <input
                    className="form-control pe-13 text-end"
                    name="phone"
                    placeholder="رقم هاتفك*"
                    required
                  />
                </div>

                <div className="col-md-6 mb-30px">
                  <input
                    className="form-control pe-13"
                    type="email"
                    name="email"
                    placeholder="بريدك الإلكتروني*"
                    required
                  />
                </div>

                <div className="col-md-6 mb-30px">
                  <input
                    className="form-control pe-13"
                    name="subject"
                    placeholder="الموضوع"
                  />
                </div>

                <div className="col-md-12 mb-30px">
                  <textarea
                    className="form-control"
                    name="comment"
                    placeholder="رسالتك"
                  />
                </div>

                <div className="col-xl-7 col-md-8 pb-30px">
                  <p className="text-md-end fs-15 lh-26">
                    نحن ملتزمون بحماية خصوصيتك.
                  </p>
                </div>

                {/* BUTTON ALIGNMENT SAME */}
                <div className="col-xl-5 col-md-4 text-center text-md-start sm-mt-25px">
                  <button
                    type="submit"
                    className="btn btn-medium btn-round-edge btn-dark-gray"
                    disabled={loading}
                  >
                    {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
                    <span className="bg-white"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
