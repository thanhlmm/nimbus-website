import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/sections/Hero";
import Problem from "~/components/sections/Problem";
import Evolution from "~/components/sections/Evolution";
import AboutSearch from "~/components/sections/AboutSearch";
import UserDashboard from "~/components/sections/UserDashboard";
import TrxInfo from "~/components/sections/TrxInfo";
import SupportedChain from "~/components/sections/SupportedChain";
import Connect from "~/components/sections/Connect";
// import Testimonials from "~/components/sections/Testimonials";
// import Team from "~/components/sections/Team";

export default component$(() => {
  return (
    <>
      <Hero />
      <Problem />
      <Evolution />
      <AboutSearch />
      <UserDashboard />
      <TrxInfo />
      <SupportedChain />
      <Connect />
      {/* <Testimonials />
      <Team /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Make Web3 simple for everyone - Nimbus",
};
