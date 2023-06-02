import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "~/components/Footer";
import Header from "~/components/Header";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <div
        class="border border-[#0000001a] rounded-[20px] md:p-6 overflow-hidden"
        style="
          max-width: 920px;
          margin: 20px auto 120px auto;
          width: 90%;"
      >
        <iframe
          data-w-type="embedded"
          src="https://08m2q.mjt.lu/wgt/08m2q/g7z/form?c=13dad1e6"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          style="width: 100%; margin-bottom: 50px;"
        ></iframe>
      </div>
      <Footer />
    </>
  );
});
