import Head from "next/head";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesHighlight from "@/components/homepage/ServicesHighlight";
import ServicesMarquee from "@/components/homepage/ServicesMarquee";
import BranchesSection from "@/components/common/BranchesSection";
import StatsCounterSection from "@/components/common/StatsCounterSection";
import CustomerReviewsSection from "@/components/common/CustomerReviewsSection";
import Script from "next/script";


export default function Home() {
  return (
    <>


<Head>
  <title>Expert EV Service Centers Across The UAE | EVS</title>

  <meta
    name="description"
    content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah."
  />

  <meta
    name="keywords"
    content="electric vehicle service, EV car service, electric car repair, EV garage Dubai, electric vehicle maintenance, EV software solutions"
  />

  <link rel="canonical" href="https://evsuae.com/" />

  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
  />

  <meta name="author" content="Admin" />
  <meta name="publisher" content="Electric Vehicle Services UAE" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* ✅ FIXED JSX ATTRIBUTES */}
  <meta httpEquiv="Content-Language" content="en" />
  <link rel="alternate" hrefLang="en-ae" href="https://evsuae.com/" />

  {/* Open Graph */}
  <meta property="og:title" content="Expert EV Service Centers Across The UAE | EVS" />
  <meta
    property="og:description"
    content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah."
  />
  <meta property="og:url" content="https://evsuae.com/" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Expert EV Service Centers Across The UAE | EVS" />
  <meta
    name="twitter:description"
    content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah."
  />
  <meta
    name="twitter:image"
    content="https://evsuae.com/.netlify/images?url=/img/graph-img.webp"
  />

  {/* ✅ FIXED */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
</Head>

      <HeroSection />
      <ServicesHighlight />
      <ServicesMarquee />
      <BranchesSection />
      <StatsCounterSection />
      <CustomerReviewsSection />

      <section className="snap-section pt-0 ps-7 pe-7 xl-ps-2 xl-pe-2 xs-px-0">
  <h2 className="h1 alt-font fw-700 ls-minus-1px text-white mb-15px mb-4 text-center">
    Latest Blog Posts<span className="text-base-color">.</span>
  </h2>

  <div className="container-fluid">
    <div className="row">
      <div className="col-12">

        {/* Loader */}
        <div
          id="loader"
          className="loader mx-auto d-flex justify-content-center"
        ></div>

        {/* Blog Grid (REQUIRED by blog.js) */}
        <div
          id="blog-container"
          className="row blog-simple blog-wrapper grid-loading grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large"
        ></div>

        {/* Pagination (REQUIRED by blog.js) */}
        <div
          id="pagination"
          className="mt-5 d-flex justify-content-center"
        ></div>

      </div>
    </div>
  </div>
</section>




    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
      extraScripts: ["/js/blog.js"],
    },
    
  };
}
