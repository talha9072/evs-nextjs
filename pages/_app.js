// pages/_app.js

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Script from "next/script";

// ===== Dynamic Header / Footer =====
const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const HeaderAr = dynamic(() => import("../components/HeaderAr"), { ssr: false });
const FooterAr = dynamic(() => import("../components/FooterAr"), { ssr: false });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isArabic = router.pathname.startsWith("/ar");

  /* =====================================================
     🌍 HTML + BODY DIRECTION (RTL / LTR)
  ===================================================== */
  useEffect(() => {
    if (isArabic) {
      document.documentElement.setAttribute("lang", "ar");
      document.body.setAttribute("dir", "rtl");
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.body.setAttribute("dir", "ltr");
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }, [isArabic]);

  /* =====================================================
     🔁 GLOBAL LEGACY JS RE-INITIALIZATION (CRITICAL)
     - Fixes swiper freeze
     - Fixes refresh issues
     - Fixes route change bugs
  ===================================================== */
  useEffect(() => {
    const reInitLegacy = () => {
      if (typeof window === "undefined") return;

      // Prevent double execution
      if (window.__LEGACY_REINIT_RUNNING__) return;
      window.__LEGACY_REINIT_RUNNING__ = true;

      // Litho / legacy init
      if (window.litho && typeof window.litho.init === "function") {
        window.litho.init();
      }

      // Force layout recalculation (swiper / marquee / counters)
      window.dispatchEvent(new Event("resize"));

      // Small delay to allow DOM settle
      setTimeout(() => {
        window.__LEGACY_REINIT_RUNNING__ = false;
      }, 300);
    };

    // Run once on first load
    setTimeout(reInitLegacy, 400);

    // Run on every route change
    router.events.on("routeChangeComplete", reInitLegacy);

    return () => {
      router.events.off("routeChangeComplete", reInitLegacy);
    };
  }, [router.events]);

  /* =====================================================
     🔑 HEADER / FOOTER OVERRIDE LOGIC
  ===================================================== */
  const showHeader = pageProps?.noHeader !== true;
  const showFooter = pageProps?.noFooter !== true;

  const forceArabicHeader = pageProps?.useArabicHeader === true;
  const forceEnglishHeader = pageProps?.useEnglishHeader === true;

  const useArabicLayout =
    forceArabicHeader || (isArabic && !forceEnglishHeader);

  const loadLegacy = pageProps?.noLegacy !== true;

  return (
    <>
      {/* ===== LEGACY JS (ORDER IS CRITICAL) ===== */}
      {loadLegacy && (
        <>
          <Script src="/legacy/js/jquery.js" strategy="beforeInteractive" />
          <Script src="/legacy/js/vendors.js" strategy="beforeInteractive" />
          <Script src="/legacy/js/main.js" strategy="afterInteractive" />
          <Script src="/legacy/js/converter.js" strategy="afterInteractive" />
        </>
      )}

      {/* ===== RTL CSS (ONLY FOR ARABIC) ===== */}
      {isArabic && (
        <link rel="stylesheet" href="/legacy/ar/css/ar.css" />
      )}

      {/* ===== PAGE LAYOUT ===== */}
      <div className="scroll-container">
        {/* HEADER */}
        {showHeader && (useArabicLayout ? <HeaderAr /> : <Header />)}

        {/* PAGE CONTENT */}
        <Component {...pageProps} />

        {/* FOOTER */}
        {showFooter && (useArabicLayout ? <FooterAr /> : <Footer />)}
      </div>
    </>
  );
}
