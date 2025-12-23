import Head from "next/head";
import Link from "next/link";


export default function About() {
  return (
    <>
      {/* ================= SEO HEAD ================= */}
      <Head>
        <title>About EVS UAE | Best Electric Vehicle Service Center in Dubai</title>

        <meta
          name="description"
          content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai. We specialize in expert EV maintenance, repair, and software solutions."
        />

        <meta
          name="keywords"
          content="electric vehicle service, EV car service, electric car repair, EV garage Dubai, electric vehicle maintenance, EV software solutions"
        />

        <link rel="canonical" href="https://evsuae.com/about" />

        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />

        <meta name="author" content="Admin" />
        <meta name="publisher" content="Electric Vehicle Services UAE" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta httpEquiv="Content-Language" content="en" />
        <link rel="alternate" hrefLang="en" href="https://evsuae.com/about" />
        <link rel="alternate" hrefLang="ar" href="https://evsuae.com/ar/about" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About EVS UAE | Best Electric Vehicle Service Center in Dubai"
        />
        <meta
          property="og:description"
          content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai."
        />
        <meta property="og:url" content="https://evsuae.com/about" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About EVS UAE | Best Electric Vehicle Service Center in Dubai"
        />
        <meta
          name="twitter:description"
          content="Learn more about EVS UAE, the leading electric vehicle service center in Dubai."
        />
        <meta
          name="twitter:image"
          content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About Electric Vehicle Services UAE",
              description:
                "Learn about Electric Vehicle Services UAE—our mission, expertise in EV maintenance, and commitment to sustainable transportation across the UAE.",
              url: "https://evsuae.com/about",
              mainEntity: {
                "@type": "AutomotiveBusiness",
                name: "Electric Vehicle Services UAE",
                url: "https://evsuae.com/",
                logo:
                  "https://evsuae.com/.netlify/images?url=/img/EVS-logo.svg",
                description:
                  "Electric Vehicle Services UAE provides advanced maintenance, repair, and upgrade services for electric vehicles across the UAE.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "AE",
                },
                telephone: "+971600500387",
                email: "contact@evsuae.com",
                sameAs: [
                  "https://www.instagram.com/evs_uae/",
                  "https://www.linkedin.com/company/eva-electric-vehicle-services/",
                ],
              },
            }),
          }}
        />
      </Head>

      <section className="ipad-top-space-margin bg-black overflow-hidden p-0 page-title-big-typography1 pt-10">
        <div className="container">
          <div className="row justify-content-center small-screen">
            <div
              className="col-md-12 d-flex flex-column align-items-center align-items-md-start text-center text-md-start page-title-extra-small sm-pt-50px sm-pb-50px"
              data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <h1 className="ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                About EVS Electric Vehicle Services
              </h1>
              <h2 className="fw-700 alt-font ls-minus-1px text-white w-80 mb-0 lg-w-100">
                We are Pioneers in Electric Mobility
                <span className="text-base-color">.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section for Mobile & Smaller Screens - Shows text again + full-width image */}
      <section className="bg-black pt-15 pb-5 mobile-about">
        <div className="container about-evs">
          <div className="row">
            {/* Text Block - Repeated for mobile (as per original design) */}
            <div
              className="col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start page-title-extra-small sm-pt-50px sm-pb-50px appear anime-child anime-complete"
              data-anime='{ "el": "childs", "translateX": [-30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <h1 className="ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                About EVS Electric Vehicle Services
              </h1>
              <h2 className="fw-700 alt-font ls-minus-1px text-white w-80 mb-0 lg-w-100">
                We are Pioneers in Electric Mobility
                <span className="text-base-color">.</span>
              </h2>
            </div>

            {/* Full-width Team Image */}
            <div className="col-12 cover-bg mt-4">
              <img
                src="https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=1024"
                className="feather-edge img-fluid"
                srcSet="
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=320 320w,
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=640 640w,
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=1024 1024w,
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=1440 1440w,
                  https://evsuae.com/.netlify/images?url=/img/evs-about-team.png&w=1920 1920w
                "
                sizes="100vw"
                alt="EVS Electric Vehicle Services Team"
              />
            </div>
          </div>
        </div>
      </section>


          
      <section className="position-relative pb-0">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Column - Moves below text on mobile (order-2 on small, order-1 on lg) */}
            <div
              className="col-lg-6 col-xl-6 order-2 order-lg-1 align-self-end position-relative"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <img
                src="https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=1024"
                srcSet="
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=320 320w,
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=640 640w,
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=1024 1024w,
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=1440 1440w,
                  https://evsuae.com/.netlify/images?url=/img/evs-founder.jpg&w=1920 1920w
                "
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                alt="EVS Founder"
                className="feathered-image"
              />
            </div>

            {/* Text Column */}
            <div
              className="col-lg-6 col-xxl-4 col-xl-5 offset-xl-1 order-1 order-lg-2 md-mb-50px sm-mb-30px"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <span className="fs-19 lh-20 ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-30px">
                Our Journey
              </span>
              <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px">
                From Vision to Reality<span className="text-base-color">.</span>
              </h2>
              <p className="mb-30px">
                Founded with a bold vision to revolutionize the automotive world, EVS has grown into a leading force in the electric vehicle service industry. As the first Electric Vehicle Service center in the prestigious GCC, we have expanded our reach and impact globally, driven by our commitment to excellence and sustainability.
              </p>
              <Link
                href="https://evsuae.com/contact"
                className="btn btn-large btn-round-edge btn-dark-gray btn-slide-right me-15px"
              >
                Contact Us<span className="bg-white"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section - What We Do / Why EVS / Join Us */}
      <section className="">
        <div className="container">
          {/* Section Title */}
          <div className="row justify-content-center mb-4">
            <div className="col-xl-8 col-lg-10 text-center">
              <h2
                className="text-white fw-600 ls-minus-1px alt-font"
                data-anime='{ "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                Be Part of the Revolution<span className="text-base-color">.</span>
              </h2>
            </div>
          </div>

          {/* Tabs Layout */}
          <div
            className="row align-items-center"
            data-anime='{ "el": "childs", "translateY": [0, 0], "opacity": [0,1], "duration": 1200, "delay": 150, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            {/* Tab Navigation (Left Side) */}
            <div className="col-xl-3 col-lg-4 col-md-12 tab-style-05 md-mb-30px sm-mb-20px align-items-center justify-content-center">
              <ul className="nav nav-tabs justify-content-center border-0 text-left fw-500 fs-18 alt-font">
                <li className="nav-item">
                  <a
                    data-bs-toggle="tab"
                    href="#tab_four1"
                    className="nav-link d-flex align-items-center active"
                  >
                    <i className="feather icon-feather-briefcase icon-extra-medium text-base-color"></i>
                    <span className="text-white">What We Do</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="tab" href="#tab_four2" className="nav-link d-flex align-items-center">
                    <i className="feather icon-feather-edit icon-extra-medium text-base-color"></i>
                    <span className="text-white">Why EVS</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-bs-toggle="tab" href="#tab_four3" className="nav-link d-flex align-items-center">
                    <i className="feather icon-feather-compass icon-extra-medium text-base-color"></i>
                    <span className="text-white">Join Us</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Tab Content (Right Side) */}
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="tab-content">
                {/* Tab 1: What We Do */}
                <div className="tab-pane fade show active" id="tab_four1">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 offset-xl-1 text-center text-md-start">
                      <h5 className="alt-font text-white mb-20px fw-500 ls-minus-1px">
                        <span className="fw-600 text-base-color">What</span> We Do
                      </h5>
                      <p>
                        Comprehensive EV Solutions At EVS, we offer a one-stop solution for all electric vehicle needs. Our services include advanced software and hardware solutions, specialized body repair, and high-voltage battery services. Our team of certified professionals ensures that every EV we service performs at its peak, with safety and efficiency as our top priorities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab 2: Why EVS */}
                <div className="tab-pane fade" id="tab_four2">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 offset-xl-1 text-center text-md-start">
                      <h5 className="alt-font text-white mb-20px fw-500 ls-minus-1px">
                        <span className="fw-600 text-base-color">Why</span> EVS?
                      </h5>
                      <p>
                        Innovation Meets Sustainability At EVS, sustainability is at the core of our mission. We focus on repairing rather than replacing critical EV components, which helps reduce waste and minimize the environmental impact of our operations. As leaders in electric vehicle services, we're driving the global transition to sustainable energy. Our unique facility, equipped with a specialized high-voltage repair unit, allows us to repair high-voltage batteries—a service that sets us apart and reinforces our commitment to sustainability above all else.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tab 3: Join Us */}
                <div className="tab-pane fade" id="tab_four3">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 offset-xl-1 text-center text-md-start">
                      <h5 className="alt-font text-white mb-20px fw-500 ls-minus-1px">
                        <span className="fw-600 text-base-color">Join</span> Us
                      </h5>
                      <p>
                        Be Part of the Revolution Whether you're seeking top-tier care for your EV or exploring{" "}
                        <a href="/franchise" className="internal text-white-hover text-decoration-underline">
                          franchise opportunities
                        </a>{" "}
                        in a rapidly growing market, EVS offers unparalleled expertise and support. Join us on our journey to drive the future of electric mobility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


          {/* Customer Reviews Section with Swiper Slider */}
      <section className="pt-0 pb-5 md-pb-8 overlap-height overflow-hidden">
        <div className="container overlap-gap-section">
          <div
            className="row align-items-center justify-content-center"
            data-anime='{ "el": "childs", "translateX": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
          >
            {/* Left Side - Title & Navigation */}
            <div className="col-xl-5 col-lg-7 col-md-10 position-relative pe-xl-0 text-center text-xl-start lg-mb-10px">
              <span className="fs-19 lh-20 ls-0px fw-600 text-white d-inline-block text-decoration-line-bottom-medium border-color-base-color mb-25px">
                Customer Reviews
              </span>
              <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-10px w-80 lg-w-100">
                What people say about our service<span className="text-base-color">.</span>
              </h2>
              <div className="d-block mb-25px">
                See our 600+ reviews on{" "}
                <a href="https://g.page/r/your-google-business-link" target="_blank" rel="noreferrer">
                  Google
                </a>
              </div>
              <div className="d-flex justify-content-center justify-content-xl-start">
                {/* Slider Navigation */}
                <div
                  className="slider-one-slide-prev-1 text-white swiper-button-prev slider-navigation-style-04 border border-1 border-color-medium-gray"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="bi bi-arrow-left-short icon-very-medium"></i>
                </div>
                <div
                  className="slider-one-slide-next-1 text-white swiper-button-next slider-navigation-style-04 border border-1 border-color-medium-gray"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-arrow-right-short icon-very-medium"></i>
                </div>
              </div>
            </div>

            {/* Right Side - Swiper Slider */}
            <div className="col-xl-7 col-lg-10 overflow-hidden">
              <div className="outside-box-right-15 xl-outside-box-right-20 sm-outside-box-right-0">
                {/* Swiper Container - Make sure Swiper JS is initialized in your project */}
                <div
                  className="swiper slider-one-slide slider-shadow-right sm-slider-shadow-none magic-cursor overflow-visible ps-25px sm-p-0"
                  data-slider-options='{ "slidesPerView": 1, "spaceBetween": 35, "loop": true, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 6000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 2 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'
                >
                  <div className="swiper-wrapper pt-30px pb-30px">
                    {/* Review 1 */}
                    <div className="swiper-slide review-style-06">
                      <div className="d-flex justify-content-center h-100 flex-column bg-dark-gray box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://evsuae.com/.netlify/images?url=/img/google-logo.svg"
                            loading="lazy"
                            alt="Google Reviews"
                          />
                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="fs-22 alt-font fw-500 text-white">Maryam A</div>
                            <p className="lh-22 d-block">Verified Customer</p>
                          </div>
                          <div className="border-radius-30px bg-base-color ps-15px pe-15px fs-14 fw-700 text-white d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px"></i>5.0
                          </div>
                        </div>
                        <p>
                          I had an amazing experience in my previous visit to EVS Garage. The team was helpful and attentive, ensuring that everything was as I asked for. The outcome was more than perfect. I highly recommend EVS for anyone in need of services and support for their electric vehicle.
                        </p>
                      </div>
                    </div>

                    {/* Review 2 */}
                    <div className="swiper-slide review-style-06">
                      <div className="d-flex justify-content-center h-100 flex-column bg-dark-gray box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://evsuae.com/.netlify/images?url=/img/google-logo.svg"
                            loading="lazy"
                            alt="Google Reviews"
                          />
                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="fs-22 alt-font fw-500 text-white">Kesh Malli</div>
                            <p className="lh-22 d-block">Verified Customer</p>
                          </div>
                          <div className="border-radius-30px bg-base-color ps-15px pe-15px fs-14 fw-700 text-white d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px"></i>5.0
                          </div>
                        </div>
                        <p>
                          Very organized operation. Big clean and bright shop. Very busy and everything flows smoothly. They cater to all EVs (some I never knew were in UAE already) cannot recommend them over the other outfits enough.
                        </p>
                      </div>
                    </div>

                    {/* Review 3 */}
                    <div className="swiper-slide review-style-06">
                      <div className="d-flex justify-content-center h-100 flex-column bg-dark-gray box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://evsuae.com/.netlify/images?url=/img/google-logo.svg"
                            loading="lazy"
                            alt="Google Reviews"
                          />
                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="fs-22 alt-font fw-500 text-white">Patrick B</div>
                            <p className="lh-22 d-block">Verified Customer</p>
                          </div>
                          <div className="border-radius-30px bg-base-color ps-15px pe-15px fs-14 fw-700 text-white d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px"></i>5.0
                          </div>
                        </div>
                        <p>
                          EVS provided exceptional service on my Sienna hybrid. They maintained communication and addressed my issue with the vehicle in a prompt manner of time and they fixed it correctly the first time. I highly recommend them.
                        </p>
                      </div>
                    </div>

                    {/* Review 4 */}
                    <div className="swiper-slide review-style-06">
                      <div className="d-flex justify-content-center h-100 flex-column bg-dark-gray box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://evsuae.com/.netlify/images?url=/img/google-logo.svg"
                            loading="lazy"
                            alt="Google Reviews"
                          />
                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="fs-22 alt-font fw-500 text-white">Sami Ali</div>
                            <p className="lh-22 d-block">Verified Customer</p>
                          </div>
                          <div className="border-radius-30px bg-base-color ps-15px pe-15px fs-14 fw-700 text-white d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px"></i>5.0
                          </div>
                        </div>
                        <p>
                          Professional in every thing, very welcomed and honest in taking you through the real problem of the car and maintenance required. They fixed my car very well and happy that I visited them. Thanks a lot EVS team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Counter Section */}
      <section className="half-section">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 justify-content-center counter-style-07">
            {/* Counter 1 */}
            <div className="col text-center sm-mb-35px">
              <h1
                className="alt-font vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative z-index-0"
                data-to="1"
              >
                #
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </h1>
              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
                1st EV Center in the UAE
              </span>
            </div>

            {/* Counter 2 */}
            <div className="col text-center sm-mb-35px">
              <h1
                className="alt-font vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative"
                data-to="7"
              >
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </h1>
              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">Branches</span>
            </div>

            {/* Counter 3 */}
            <div className="col text-center xs-mb-35px">
              <h1
                className="alt-font vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative"
                data-to="200"
              >
                +
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </h1>
              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
                Experienced Staff
              </span>
            </div>

            {/* Counter 4 */}
            <div className="col text-center">
              <h1
                className="alt-font vertical-counter d-inline-flex text-white fw-700 mb-0 ls-minus-2px md-ls-0px position-relative"
                data-to="21452"
              >
                <span className="text-highlight position-absolute bottom-10px w-100">
                  <span className="bg-base-color h-10px bottom-0px opacity-4"></span>
                </span>
              </h1>
              <span className="d-block fs-15 lh-20 fw-700 text-uppercase text-white">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
      </section>


      
      {/* Branches Section with Tabs */}
      <section className="z-index-0 position-relative overflow-hidden pb-0 md-pb-5">
        {/* Decorative Background Image */}
        <img
          src="https://evsuae.com/.netlify/images?url=/images/home-17.png"
          loading="lazy"
          className="h-190px z-index-minus-1 position-absolute left-0px top-0px lg-h-120px d-none d-md-inline-block"
          data-bottom-top="transform: translate3d(80px, 0px, 0px);"
          data-top-bottom="transform: translate3d(-150px, 0px, 0px);"
          alt="EVS Electric Vehicle Services"
        />

        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Title & Tab Navigation */}
            <div
              className="col-xl-4 col-lg-5 team-style-09 order-1 pb-5 pb-md-0"
              data-anime='{ "el": "childs", "translateX": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
            >
              <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px">
                Our Branches<span className="text-base-color">.</span>
              </h2>

              <ul className="nav nav-tabs alt-font flex-column border-0 justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#tab_nine3">
                    <span className="number text-light-gray fs-22 me-5px">01.</span>
                    <span className="name fs-22 text-white">Abu Dhabi</span>
                    <span className="text-medium-gray ms-auto">Musaffah</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_nine1">
                    <span className="number text-light-gray fs-22 me-5px">02.</span>
                    <span className="name fs-22 text-white">Dubai</span>
                    <span className="text-medium-gray ms-auto">International city</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_nine2">
                    <span className="number text-light-gray fs-22 me-5px">03.</span>
                    <span className="name fs-22 text-white">Ajman</span>
                    <span className="text-medium-gray ms-auto">Al Jerf 2</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_nine4">
                    <span className="number text-light-gray fs-22 me-5px">04.</span>
                    <span className="name fs-22 text-white">Alain</span>
                    <span className="text-medium-gray ms-auto">Industrial Area</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_nine5">
                    <span className="number text-light-gray fs-22 me-5px">05.</span>
                    <span className="name fs-22 text-white">Riyadh</span>
                    <span className="text-medium-gray ms-auto">Al Qirawan</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab_nine6">
                    <span className="number text-light-gray fs-22 me-5px">06.</span>
                    <span className="name fs-22 text-white">Sharjah</span>
                    <span className="text-medium-gray ms-auto">Al Sajaa</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Side - Tab Content with Images */}
            <div className="col-lg-7 offset-xl-1 md-mb-35px order-2">
              <div className="tab-content bg-white box-shadow-extra-large">
                {/* Abu Dhabi */}
                <div className="tab-pane active fade show" id="tab_nine3">
                  <div className="row g-0 row-cols-1 row-cols-md-2">
                    <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                      <h3 className="alt-font fw-600 text-white mb-2">EVS Abu Dhabi</h3>
                      <span className="fs-16 fw-500 text-base-color">
                        6th Street - Musaffah - M14 - Abu Dhabi
                      </span>
                      <br />
                      <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://maps.app.goo.gl/8yhst7aDcJW8mWs59"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Get Directions to EVS Abu Dhabi"
                          >
                            <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-light-gray alt-font">
                          <a
                            href="tel:+971547133313"
                            aria-label="Call EVS Abu Dhabi"
                          >
                            <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://www.instagram.com/evs_uae/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Follow EVS on Instagram"
                          >
                            <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                          </a>
                        </span>
                      </div>
                    </div>

                    <div
                      className="col position-relative cover-background"
                      style={{
                        backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=1024')",
                      }}
                      srcSet="
                        https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=320 320w,
                        https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=640 640w,
                        https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=1024 1024w,
                        https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=1440 1440w,
                        https://evsuae.com/.netlify/images?url=/img/abu-dhabi.png&w=1920 1920w
                      "
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    >
                      <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">
                        01.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dubai */}
                <div className="tab-pane fade" id="tab_nine1">
                  <div className="row g-0 row-cols-1 row-cols-md-2">
                    <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                      <h3 className="alt-font fw-600 text-white mb-2">EVS Dubai</h3>
                      <span className="fs-16 fw-500 text-base-color">
                        International City 1 - Emirati Cluster, Warehouse #39.
                      </span>
                      <br />
                      <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://maps.app.goo.gl/ZqGdaDk6r2vpE5cXA"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Get Directions to EVS Dubai"
                          >
                            <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-light-gray alt-font">
                          <a href="tel:+9710566017771" aria-label="Call EVS Dubai">
                            <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://www.instagram.com/evs_uae/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                          </a>
                        </span>
                      </div>
                    </div>

                    <div
                      className="col position-relative cover-background"
                      style={{
                        backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/dubai.png&w=1024')",
                      }}
                      srcSet="
                        https://evsuae.com/.netlify/images?url=/img/dubai.png&w=320 320w,
                        https://evsuae.com/.netlify/images?url=/img/dubai.png&w=640 640w,
                        https://evsuae.com/.netlify/images?url=/img/dubai.png&w=1024 1024w,
                        https://evsuae.com/.netlify/images?url=/img/dubai.png&w=1440 1440w,
                        https://evsuae.com/.netlify/images?url=/img/dubai.png&w=1920 1920w
                      "
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    >
                      <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">
                        02.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ajman */}
                <div className="tab-pane fade" id="tab_nine2">
                  <div className="row g-0 row-cols-1 row-cols-md-2">
                    <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                      <h3 className="alt-font fw-600 text-white mb-2">EVS Ajman</h3>
                      <span className="fs-16 fw-500 text-base-color">Al Jerf 2 - Ajman</span>
                      <br />
                      <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://maps.app.goo.gl/etWuGuKCFgaQ21ta8"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-light-gray alt-font">
                          <a href="tel:+9710564556555">
                            <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://www.instagram.com/evs_uae/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                          </a>
                        </span>
                      </div>
                    </div>

                    <div
                      className="col position-relative cover-background"
                      style={{
                        backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/ajman.png&w=1024')",
                      }}
                      srcSet="
                        https://evsuae.com/.netlify/images?url=/img/ajman.png&w=320 320w,
                        https://evsuae.com/.netlify/images?url=/img/ajman.png&w=640 640w,
                        https://evsuae.com/.netlify/images?url=/img/ajman.png&w=1024 1024w,
                        https://evsuae.com/.netlify/images?url=/img/ajman.png&w=1440 1440w,
                        https://evsuae.com/.netlify/images?url=/img/ajman.png&w=1920 1920w
                      "
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    >
                      <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">
                        03.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Alain */}
                <div className="tab-pane fade" id="tab_nine4">
                  <div className="row g-0 row-cols-1 row-cols-md-2">
                    <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                      <h3 className="alt-font fw-600 text-white mb-2">EVS Alain</h3>
                      <span className="fs-16 fw-500 text-base-color">
                        Al Beewar 5 St - Industrial Area - Al Ajayyiz
                      </span>
                      <br />
                      <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://maps.app.goo.gl/wUXqKuLDtkWffKPf6"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-light-gray alt-font">
                          <a href="tel:+9710507770360">
                            <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://www.instagram.com/evs_uae/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                          </a>
                        </span>
                      </div>
                    </div>

                    <div
                      className="col position-relative cover-background"
                      style={{
                        backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=1024')",
                      }}
                      srcSet="
                        https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=320 320w,
                        https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=640 640w,
                        https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=1024 1024w,
                        https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=1440 1440w,
                        https://evsuae.com/.netlify/images?url=/img/EVS-alain.jpg&w=1920 1920w
                      "
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    >
                      <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">
                        04.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Riyadh */}
                <div className="tab-pane fade" id="tab_nine5">
                  <div className="row g-0 row-cols-1 row-cols-md-2">
                    <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                      <h3 className="alt-font fw-600 text-white mb-2">EVS Riyadh</h3>
                      <span className="fs-16 fw-500 text-base-color">
                        Al Qirawan, Riyadh, Saudi Arabia
                      </span>
                      <br />
                      <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://maps.app.goo.gl/D9ARQ8Go4Nztf1D89"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-light-gray alt-font">
                          <a href="tel:+966554586777">
                            <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://www.instagram.com/evs_uae/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                          </a>
                        </span>
                      </div>
                    </div>

                    <div
                      className="col position-relative cover-background"
                      style={{
                        backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=1024')",
                      }}
                      srcSet="
                        https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=320 320w,
                        https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=640 640w,
                        https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=1024 1024w,
                        https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=1440 1440w,
                        https://evsuae.com/.netlify/images?url=/img/riyadh.jpeg&w=1920 1920w
                      "
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    >
                      <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">
                        05.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sharjah */}
                <div className="tab-pane fade" id="tab_nine6">
                  <div className="row g-0 row-cols-1 row-cols-md-2">
                    <div className="bg-dark-gray col p-55px xl-p-40px lg-p-30px">
                      <h3 className="alt-font fw-600 text-white mb-2">EVS Sharjah</h3>
                      <span className="fs-16 fw-500 text-base-color">
                        Al Sajaa, Al Jlail, Sharjah, United Arab Emirates
                      </span>
                      <br />
                      <div className="divider-style-03 divider-style-03-01 border-color-medium-gray mt-15px mb-15px"></div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://maps.app.goo.gl/nrLKQJuTK27B7K2i7"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa fa-directions text-base-color mx-2"></i>Get Directions
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-20px">
                        <span className="fw-700 fs-20 text-light-gray alt-font">
                          <a href="tel:+971569863920">
                            <i className="fa fa-phone text-base-color mx-2"></i>Call Us
                          </a>
                        </span>
                      </div>

                      <div className="d-flex align-items-center">
                        <span className="fw-700 fs-20 text-white alt-font">
                          <a
                            href="https://www.instagram.com/evs_uae/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="fa-brands fa-instagram text-base-color mx-2"></i>Follow us
                          </a>
                        </span>
                      </div>
                    </div>

                    <div
                      className="col position-relative cover-background"
                      style={{
                        backgroundImage: "url('https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=1024')",
                      }}
                      srcSet="
                        https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=320 320w,
                        https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=640 640w,
                        https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=1024 1024w,
                        https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=1440 1440w,
                        https://evsuae.com/.netlify/images?url=/img/sharjah.png&w=1920 1920w
                      "
                      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 100vw"
                    >
                      <span className="fs-190 fw-700 alt-font text-white position-absolute left-minus-30px bottom-minus-50px">
                        06.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          
           <div class="scroll-progress d-none d-xxl-block">
            <a href="#" class="scroll-top" aria-label="scroll">
                <span class="scroll-text">Scroll</span><span class="scroll-line"><span class="scroll-point"></span></span>
            </a>
        </div>

    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      useScrollContainer: false,
    },
  };
}
