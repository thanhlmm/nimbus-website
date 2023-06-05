import { component$, useStore } from "@builder.io/qwik";
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
import SignUpForm from "~/components/SignUpForm";
import Toast from "~/components/Toast";

interface StoreType {
  openToast: boolean;
}

export default component$(() => {
  const state = useStore<StoreType>({
    openToast: false,
  });

  const shorterAddress = (string: string) => {
    return string ? string.slice(0, 6) + "..." + string.substr(-4) : string;
  };

  return (
    <>
      {/* <div
        onClick$={() => {
          state.openToast = true;
          setTimeout(() => {
            state.openToast = false;
          }, 2000);
        }}
      >
        hello
      </div> */}
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
      <div class="form_wrapper">
        <SignUpForm />
      </div>

      {state.openToast && (
        <Toast
          message={`User Thanh Le with wallet address ${shorterAddress(
            "0x8980dbbe60d92b53b08ff95ea1aaaabb7f665bcb"
          )} has been added to Nimbus`}
          type="info"
          isShow={state.openToast}
          position="bottom-right"
        />
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "A personalized Web3 portfolio tool - Nimbus",
};
