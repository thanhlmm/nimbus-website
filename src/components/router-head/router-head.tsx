import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* <meta property="og:site_name" content="Qwik" />
      <meta name="twitter:site" content="@QwikDev" />
      <meta name="twitter:title" content="Qwik" /> */}

      {/* <meta
        property="og:image"
        content="https://tribes-be.s3.ap-southeast-1.amazonaws.com/files/40973d84e40ff6708a59af1287047293.png"
      /> */}

      <meta name="description" content="Make web3 simple for everyone" />
      <meta
        property="og:title"
        content="Nimbus - Make web3 simple for everyone"
      />
      <meta property="og:description" content="Nimubs is a lifestyle app that help everyone understand & take profit in Web3 space." />
      <meta
        property="twitter:title"
        content="Nimbus - Make web3 simple for everyone"
      />
      <meta
        property="twitter:description"
        content="Nimubs is a lifestyle app that help everyone understand & take profit in Web3 space."
      />
      <meta property="og:title" content="Nimbus - Make web3 simple for everyone" />
      <meta property="og:description" content="Nimubs is a lifestyle app that help everyone understand & take profit in Web3 space." />
      <meta property="og:image" content="/hero.png" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
