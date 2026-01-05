export default function FranchiseFormAR() {
  return (
    <section className="position-relative pt-100px mb-50px" dir="rtl">
      <div className="container">
        <div className="row row-cols-md-1 justify-content-center">
          <div className="col-lg-10">
            <div className="bg-black pt-7 ps-8 pe-8 pb-5 border-radius-6px">
              <div className="row">
                <div className="col-9">
                  <h2 className="fw-700 ls-minus-1px alt-font text-white">
                    <span className="text-base-color">مهتم</span> بالانضمام إلينا؟
                  </h2>
                  <p className="mb-40px">
                    املأ النموذج أدناه، وسيتواصل فريقنا معك لمناقشة كيف يمكنك
                    إحضار حلول إي في إس المبتكرة إلى مجتمعك.
                  </p>
                </div>
                <div className="col-3 text-start">
                  <i className="bi bi-send icon-large text-base-color"></i>
                </div>
              </div>

              {/* ✅ NATIVE NETLIFY FORM (SAME AS ENGLISH) */}
              <form
                name="franchise"                  // SAME form
                method="POST"
                action="/ar/thank-you"            // Arabic thank-you
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="row contact-form-style-02"
              >
                {/* REQUIRED */}
                <input type="hidden" name="form-name" value="franchise" />

                {/* Honeypot */}
                <p hidden>
                  <label>
                    لا تملأ هذا الحقل:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="col-md-6 mb-30px">
                  <input
                    className="input-name form-control pe-13"
                    type="text"
                    name="name"
                    placeholder="اسمك*"
                    required
                  />
                </div>

                <div className="col-md-6 mb-30px">
                  <input
                    className="form-control pe-13 text-end"
                    type="tel"
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
                    type="text"
                    name="subject"
                    placeholder="الموضوع"
                  />
                </div>

                <div className="col-md-12 mb-30px">
                  <textarea
                    className="form-control"
                    rows="4"
                    name="comment"
                    placeholder="رسالتك"
                  />
                </div>

                <div className="col-xl-7 col-md-8 pb-30px">
                  <p className="text-center text-md-end fs-15 lh-26">
                    نحن ملتزمون بحماية خصوصيتك. لن نجمع معلومات عنك دون موافقتك
                    الصريحة.
                  </p>
                </div>

                {/* 🔒 BUTTON — SAME ALIGNMENT */}
                <div className="col-xl-5 col-md-4 text-center text-md-start sm-mt-25px">
                  <button
                    type="submit"
                    className="btn btn-medium btn-round-edge btn-dark-gray btn-slide-right"
                  >
                    إرسال الرسالة
                    <span className="bg-white"></span>
                  </button>
                </div>
              </form>
              {/* END FORM */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
