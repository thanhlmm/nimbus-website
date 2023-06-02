import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import SignUpForm from "~/components/SignUpForm";

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
      <SignUpForm />
      <Footer />
    </>
  );
});
