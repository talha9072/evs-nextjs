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
     🔁 GLOBAL LEGACY JS RE-INITIALIZATION
     (Litho / Swiper / Counters / Marquee safe)
  ===================================================== */
  useEffect(() => {
    const reInitLegacy = () => {
      if (typeof window === "undefined") return;

      if (window.__LEGACY_REINIT_RUNNING__) return;
      window.__LEGACY_REINIT_RUNNING__ = true;

      if (window.litho && typeof window.litho.init === "function") {
        window.litho.init();
      }

      // force layout recalculation
      window.dispatchEvent(new Event("resize"));

      setTimeout(() => {
        window.__LEGACY_REINIT_RUNNING__ = false;
      }, 300);
    };

    // first load
    setTimeout(reInitLegacy, 400);

    // route change
    router.events.on("routeChangeComplete", reInitLegacy);

    return () => {
      router.events.off("routeChangeComplete", reInitLegacy);
    };
  }, [router.events]);

  /* =====================================================
     🔑 LAYOUT CONTROL (THIS IS THE KEY PART)
  ===================================================== */

  // Header / Footer visibility
  const showHeader = pageProps?.noHeader !== true;
  const showFooter = pageProps?.noFooter !== true;

  // Language override
  const forceArabicHeader = pageProps?.useArabicHeader === true;
  const forceEnglishHeader = pageProps?.useEnglishHeader === true;

  const useArabicLayout =
    forceArabicHeader || (isArabic && !forceEnglishHeader);

  // Legacy JS control
  const loadLegacy = pageProps?.noLegacy !== true;

  // 🔥 SCROLL CONTAINER CONTROL (YOUR MARZI)
  // Default = true
  // Page can disable by: useScrollContainer: false
  const useScrollContainer = pageProps?.useScrollContainer !== false;

  /* =====================================================
     🧱 SHARED PAGE CONTENT
  ===================================================== */
  const PageContent = (
    <>
      {showHeader && (useArabicLayout ? <HeaderAr /> : <Header />)}
      <Component {...pageProps} />
      {showFooter && (useArabicLayout ? <FooterAr /> : <Footer />)}
    </>
  );

  return (
    <>
      {/* ===== LEGACY JS (ORDER MATTERS) ===== */}
      {loadLegacy && (
        <>
          <Script src="/js/jquery.js" strategy="beforeInteractive" />
          <Script src="/js/vendors.js" strategy="beforeInteractive" />
          <Script src="/js/main.js" strategy="afterInteractive" />
          <Script src="/js/converter.js" strategy="afterInteractive" />
          <Script src="/js/blog.js" strategy="afterInteractive" />
        </>
      )}

      {/* ===== RTL CSS (ONLY FOR ARABIC) ===== */}
      {isArabic && (
        <link rel="stylesheet" href="/ar/css/ar.css" />
      )}

      {/* ===== PAGE LAYOUT (CONDITIONAL) ===== */}
      {useScrollContainer ? (
        <div className="scroll-container">{PageContent}</div>
      ) : (
        PageContent
      )}
    </>
  );
}
