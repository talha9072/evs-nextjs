// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* ===== BASE CSS ===== */}
        <link rel="stylesheet" href="/legacy/css/vendors.min.css" />
        <link rel="stylesheet" href="/legacy/css/icon.min.css" />
        <link rel="stylesheet" href="/legacy/css/style.min.css" />
        <link rel="stylesheet" href="/legacy/css/responsive.min.css" />
        <link rel="stylesheet" href="/legacy/css/evs.css" />

        
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
