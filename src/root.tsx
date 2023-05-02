import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
          integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link rel="stylesheet" href="/animate.css" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="//embed.typeform.com/next/embed.js"></script>
        <RouterHead />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V1Z13C1LRM"
        ></script>
        <script
          dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V1Z13C1LRM');
        `}
        ></script>
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <script>new WOW().init(); AOS.init();</script>
      </body>
    </QwikCityProvider>
  );
});
