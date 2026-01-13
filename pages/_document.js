// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ===== BASE CSS ===== */}
        <link rel="stylesheet" href="/css/vendors.min.css" />
        <link rel="stylesheet" href="/css/icon.min.css" />
        <link rel="stylesheet" href="/css/style.min.css" />
        <link rel="stylesheet" href="/css/responsive.min.css" />
        <link rel="stylesheet" href="/css/evs.css" />

        <meta
  name="facebook-domain-verification"
  content="sk2r8gyeykmhv0dcojlcbgez8lbbcp"
/>

        {/* ===== GOOGLE TAG MANAGER ===== */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NT2KKJB');
            `,
          }}
        />

          {/* ===== UTM KEEPER SCRIPT ===== */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function () {
        function getUTMParams() {
          const params = new URLSearchParams(window.location.search);
          const utms = {};
          for (const [key, value] of params.entries()) {
            if (key.startsWith('utm_')) {
              utms[key] = value;
            }
          }
          return utms;
        }

        function appendUTMParamsToUrl(url, utms) {
          const urlObj = new URL(url, window.location.origin);
          for (const [key, value] of Object.entries(utms)) {
            urlObj.searchParams.set(key, value);
          }
          return urlObj.toString();
        }

        const utms = getUTMParams();
        if (Object.keys(utms).length > 0) {
          document.querySelectorAll('a[href]').forEach(link => {
            const href = link.getAttribute('href');
            if (
              href &&
              !href.startsWith('#') &&
              !href.startsWith('mailto:') &&
              !href.startsWith('tel:')
            ) {
              if (href.startsWith('/') || href.includes(window.location.hostname)) {
                link.setAttribute('href', appendUTMParamsToUrl(href, utms));
              }
            }
          });
        }
      })();
    `,
  }}
/>


      </Head>

      <body>
        {/* ===== GTM NOSCRIPT (IMMEDIATELY AFTER <body>) ===== */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NT2KKJB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
