import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  );
});
