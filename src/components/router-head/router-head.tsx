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

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <meta name="description" content="A personalized Web3 portfolio tool" />
      <meta
        property="og:title"
        content="Nimbus - A personalized Web3 portfolio tool"
      />
      <meta
        property="og:description"
        content="Nimubs is a lifestyle app that help everyone understand & take profit in Web3 space."
      />
      <meta
        property="twitter:title"
        content="Nimbus - A personalized Web3 portfolio tool"
      />
      <meta
        property="twitter:description"
        content="Nimubs is a lifestyle app that help everyone understand & take profit in Web3 space."
      />
      <meta
        property="og:title"
        content="Nimbus - A personalized Web3 portfolio tool"
      />
      <meta
        property="og:description"
        content="Nimubs is a lifestyle app that help everyone understand & take profit in Web3 space."
      />
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
