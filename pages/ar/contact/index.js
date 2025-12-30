import Head from "next/head";
import ScrollProgress from "@/components/ar/common/ScrollProgress";



export default function ArabicHome() {
  return (
    <>
       
    <Head>
      {/* Title */}
      <title>تواصل مع إي في إس الإمارات | احجز خدمة مركبتك الكهربائية اليوم</title>

      {/* Basic SEO */}
      <meta
        name="description"
        content="تواصل مع إي في إس الإمارات لخدمات المركبات الكهربائية المتخصصة. احجز مواعيد، اطرح أسئلة، أو حدد أقرب مركز خدمة في الإمارات."
      />
      <meta
        name="keywords"
        content="تواصل مع إي في إس الإمارات, حجز خدمة المركبات الكهربائية الإمارات, دعم المركبات الكهربائية دبي, التواصل مع إي في إس, جدولة صيانة المركبات الكهربائية, تواصل مع مركز المركبات الكهربائية الإمارات, الوصول إلى متخصصي المركبات الكهربائية الإمارات"
      />
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      <meta name="author" content="الإدارة" />
      <meta name="publisher" content="خدمات المركبات الكهربائية الإمارات" />

      {/* Canonical */}
      <link rel="canonical" href="https://evsuae.com/ar/contact" />

      {/* Viewport & Charset */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Language / Hreflang */}
      <meta httpEquiv="Content-Language" content="ar" />
      <link rel="alternate" hrefLang="en" href="https://evsuae.com/contact" />
      <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/contact" />

      {/* Open Graph */}
      <meta property="og:title" content="تواصل مع إي في إس الإمارات | احجز خدمة مركبتك الكهربائية اليوم" />
      <meta
        property="og:description"
        content="تواصل مع إي في إس الإمارات لخدمات المركبات الكهربائية المتخصصة. احجز مواعيد، اطرح أسئلة، أو حدد أقرب مركز خدمة في الإمارات."
      />
      <meta property="og:url" content="https://evsuae.com/ar/contact" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="تواصل مع إي في إس الإمارات | احجز خدمة مركبتك الكهربائية اليوم" />
      <meta
        name="twitter:description"
        content="تواصل مع إي في إس الإمارات لخدمات المركبات الكهربائية المتخصصة. احجز مواعيد، اطرح أسئلة، أو حدد أقرب مركز خدمة في الإمارات."
      />
      <meta name="twitter:image" content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp" />

      {/* Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Fonts preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>

      {/* RTL WRAPPER */}
      <div dir="rtl" className="arabic-page">
        {/* ✅ YAHAN SE BODY KA CONTENT AAYEGA */}
        {/* header/footer automatic via _app.js */}

{/* start page title */}
<section className="ipad-top-space-margin bg-black overflow-hidden p-0 page-title-big-typography pt-5">
  <div className="container">
    <div className="row justify-content-center">
      <div
        className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start page-title-extra-small sm-pt-50px sm-pb-50px"
        data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
      >
        <h2 className="fw-700 alt-font ls-minus-1px text-white w-80 mb-0 lg-w-100 text-end">
          تواصلوا معنا<span className="text-base-color">.</span>
        </h2>

        <div className="d-flex align-items-center gap-3 flex-wrap">
          <a
            href="tel:600500387"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
          >
            600 500 387
            <i className="fa fa-phone-alt"></i>
            <span className="bg-white"></span>
          </a>

          <a
            href="http://wa.me/+971566017771"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
          >
            تواصلوا معنا عبر واتساب
            <i className="fa-brands fa-whatsapp"></i>
            <span className="bg-white"></span>
          </a>
        </div>
      </div>

      <div className="col-md-6">
        <div className="py-5">
          <div className="row">
            <div className="col-9">
              <h2 className="fw-700 ls-minus-1px alt-font text-white">
                أرسلوا لنا <span className="text-base-color">رسالة</span>
              </h2>
            </div>
            <div className="col-3 text-start">
              <i className="bi bi-send icon-large text-base-color"></i>
            </div>
          </div>

          {/* start contact form */}
          <form
            method="POST"
            action="/ar/thank-you"
            data-netlify="true"
            name="contact-form"
            className="row contact-form-style-02"
          >
            {/* Required for Netlify + Next.js */}
            <input type="hidden" name="form-name" value="contact-form" />

            <div className="col-md-6 mb-30px">
              <input
                className="input-name form-control required pe-15"
                type="text"
                name="name"
                placeholder="اسمك*"
              />
            </div>

            <div className="col-md-6 mb-30px">
              <input
                className="form-control required text-end pe-15"
                type="tel"
                name="phone"
                placeholder="رقم هاتفك*"
              />
            </div>

            <div className="col-md-6 mb-30px">
              <input
                className="form-control required pe-15"
                type="email"
                name="email"
                placeholder="بريدك الإلكتروني*"
              />
            </div>

            <div className="col-md-6 mb-30px">
              <select
                className="form-control required pe-15"
                name="location"
                defaultValue=""
              >
                <option value="" disabled>
                  اختر موقع إي في إس*
                </option>
                <option value="EVS Dubai">إي في إس دبي</option>
                <option value="EVS Abu Dhabi">إي في إس أبوظبي</option>
                <option value="EVS Ajman">إي في إس عجمان</option>
                <option value="EVS Alain">إي في إس العين</option>
              </select>
            </div>

            <div className="col-md-12 mb-30px">
              <textarea
                className="form-control"
                cols={40}
                rows={2}
                name="comment"
                placeholder="رسالتك"
              ></textarea>
            </div>

            <div className="col-xl-5 col-md-4 sm-mt-25px">
              <input type="hidden" name="redirect" value="" />
              <button
                className="btn btn-medium btn-round-edge btn-dark-gray btn-slide-right submit"
                type="submit"
              >
                إرسال الرسالة<span className="bg-base-color"></span>
              </button>
            </div>

            <div className="col-12">
              <div className="form-results mt-20px d-none text-center"></div>
            </div>
          </form>
          {/* end contact form */}
        </div>
      </div>
    </div>
  </div>
</section>
{/* end page title */}

{/* start section */}
<section className="position-relative">
  <div
    className="background-position-center-top position-absolute top-0 left-0px w-100 h-100"
    style={{ backgroundImage: "url('images/vertical-line-bg-medium-gray.svg')" }}
  ></div>

  <div className="container position-relative">
    <div
      className="row row-cols-1 row-cols-lg-4 row-cols-sm-1 justify-content-center"
      data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'
    >

      {/* Abu Dhabi */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14536.141623796122!2d54.4866373!3d24.3800717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4123c214e723%3A0xc54ea8fd417956bf!2sEVS%20Abu%20Dhabi%20(%20Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1746018527836!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="https://evsuae.com/ar/evs-abu-dhabi.html" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              إي في إس أبوظبي
            </a>

            <span className="d-block">
              <span className="text-white fw-600">هـ:</span>{" "}
              <a href="tel:+971547133313">+971 54 713 3313</a>
            </span>

            <span className="d-block">
              <span className="text-white fw-600">بـ:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">info@evsuae.com</a>
            </span>

            <a
              href="https://maps.app.goo.gl/8yhst7aDcJW8mWs59"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              احصل على الاتجاهات
              <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Dubai */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.14588427663!2d55.4240151!3d25.164551499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6be92144ffef%3A0xccfadb5aedd3afcc!2sEVS%20Electric%20Vehicle%20Services.!5e0!3m2!1sen!2s!4v1746018584133!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="https://evsuae.com/ar/evs-dubai.html" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              إي في إس دبي
            </a>

            <span className="d-block">
              <span className="text-white fw-600">هـ:</span>{" "}
              <a href="tel:+971566017771">+971 56 60 17771</a>
            </span>

            <span className="d-block">
              <span className="text-white fw-600">بـ:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">info@evsuae.com</a>
            </span>

            <a
              href="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              احصل على الاتجاهات
              <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Ajman */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3604.046910276685!2d55.4894439!3d25.4032403!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7b96050de41%3A0xf6df6eaa4de010e7!2sElectric%20Vehicle%20Services!5e0!3m2!1sen!2s!4v1746018607361!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="https://evsuae.com/ar/evs-ajman.html" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              إي في إس عجمان
            </a>

            <span className="d-block">
              <span className="text-white fw-600">هـ:</span>{" "}
              <a href="tel:+971564556555">+971 56 455 6555</a>
            </span>

            <span className="d-block">
              <span className="text-white fw-600">بـ:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">info@evsuae.com</a>
            </span>

            <a
              href="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              احصل على الاتجاهات
              <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Al Ain */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29117.325836012453!2d55.7142672!3d24.1834532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8ab18dfb71bbcd%3A0xc7c1a217cb0c401c!2sEVS%20Al%20Ain%20(Electric%20Vehicle%20Services)!5e0!3m2!1sen!2s!4v1746018625396!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="https://evsuae.com/ar/evs-alain.html" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              إي في إس العين
            </a>

            <span className="d-block">
              <span className="text-white fw-600">هـ:</span>{" "}
              <a href="tel:600500387">600 500 387</a>
            </span>

            <span className="d-block">
              <span className="text-white fw-600">بـ:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">info@evsuae.com</a>
            </span>

            <a
              href="https://maps.app.goo.gl/wUXqKuLDtkWffKPf6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              احصل على الاتجاهات
              <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Sharjah */}
      <div className="col icon-with-text-style-03">
        <div className="feature-box p-8">
          <iframe
            className="mb-3 border-radius-15px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.334979669202!2d55.650397999999996!3d25.360087399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f3002c630b0b%3A0x10a29e496b6bbf28!2sEVS%20Electric%20Vehicle%20Services%20-%20Sharjah!5e0!3m2!1sar!2s!4v1764054203991!5m2!1sar!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="feature-box-content last-paragraph-no-margin">
            <a href="https://evsuae.com/ar/evs-sharjah.html" className="d-inline-block fw-700 text-white mb-5px alt-font fs-32 mt-3">
              إي في إس الشارقة
            </a>

            <span className="d-block">
              <span className="text-white fw-600">هـ:</span>{" "}
              <a href="tel:+971569863920" dir="ltr">+971 56 986 3920</a>
            </span>

            <span className="d-block">
              <span className="text-white fw-600">بـ:</span>{" "}
              <a href="mailto:info@evsuae.com" className="text-white fw-600">info@evsuae.com</a>
            </span>

            <a
              href="https://maps.app.goo.gl/nrLKQJuTK27B7K2i7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-large btn-round-edge btn-base-color btn-slide-right mt-15px xs-mt-25px"
            >
              احصل على الاتجاهات
              <i className="fa fa-location-arrow"></i>
              <span className="bg-white"></span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* end section */}


        
 <ScrollProgress />



      </div>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
      useScrollContainer: false,
      extraScripts: ["/js/blog.js"],
    },
    
  };
}