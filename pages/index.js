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
        <title>EVS UAE | Electric Vehicle Services</title>
        <meta
          name="description"
          content="EVS UAE provides expert electric vehicle servicing, diagnostics, programming, and warranty solutions across the UAE."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
