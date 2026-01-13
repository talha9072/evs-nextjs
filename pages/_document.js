// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
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
        
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
