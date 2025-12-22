import Head from "next/head";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesHighlight from "@/components/homepage/ServicesHighlight";
import ServicesMarquee from "@/components/homepage/ServicesMarquee";
import BranchesSection from "@/components/common/BranchesSection";
import StatsCounterSection from "@/components/common/StatsCounterSection";
import CustomerReviewsSection from "@/components/common/CustomerReviewsSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>

		<title>Expert EV Service Centers Across The UAE | EVS</title>
		<meta name="description" content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah." />
		<meta name="keywords" content="electric vehicle service, EV car service, electric car repair, EV garage Dubai, electric vehicle maintenance, EV software solutions" />
		
    <link rel="canonical" href="https://evsuae.com/" />
		<meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
		<meta name="author" content="Admin" />
		<meta name="publisher" content="Electric Vehicle Services UAE" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		<meta http-equiv="Content-Language" content="en" /> <link rel="alternate" hreflang="en-ae" href="https://evsuae.com/" />
		
		<meta property="og:title" content="Expert EV Service Centers Across The UAE | EVS" />
		<meta property="og:description" content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah." />
		<meta property="og:url" content="https://evsuae.com/" />
		<meta property="og:type" content="website" />
		<meta property="og:image" content="https://evsuae.com//.netlify/images?url=/img/graph-img.webp" />
		
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="Expert EV Service Centers Across The UAE | EVS" />
		<meta name="twitter:description" content="Trusted EV care since 2020. EVS operates expert electric vehicle service centers across the UAE – Dubai, Abu Dhabi, Ajman, Al Ain & Sharjah." />
		<meta name="twitter:image" content="https://evsuae.com//.netlify/images?url=/img/graph-img.webp" />
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
      </Head>

      <HeroSection />
      <ServicesHighlight />
      <ServicesMarquee />
      <BranchesSection />
      <StatsCounterSection />
      <CustomerReviewsSection />
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
    },
  };
}
