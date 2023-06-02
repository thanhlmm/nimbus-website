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
import Team from "~/components/sections/Team";

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
      {/* <Testimonials /> */}
      <Team />
      <div
        class="border border-[#0000001a] rounded-[20px] md:p-6 overflow-hidden"
        style="
          max-width: 1200px;
          margin: 0 auto 120px auto;
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
    </>
  );
});

export const head: DocumentHead = {
  title: "A personalized Web3 portfolio tool - Nimbus",
};
