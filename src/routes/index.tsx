import { component$ } from "@builder.io/qwik";
import Hero from "~/components/sections/Hero";
import Advertisement from "~/components/sections/Advertisement";
// import Evolution from "~/components/sections/Evolution";
import AboutSearch from "~/components/sections/AboutSearch";

export default component$(() => {
  return (
    <>
      <Hero />
      <Advertisement />
      {/* <Evolution /> */}
      <AboutSearch />
    </>
  );
});
