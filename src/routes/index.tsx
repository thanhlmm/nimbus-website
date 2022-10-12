import { component$ } from "@builder.io/qwik";
import Hero from "~/components/sections/Hero";
import Advertisement from "~/components/sections/Advertisement";
import Evolution from "~/components/sections/Evolution";
import AboutSearch from "~/components/sections/AboutSearch";
import UserDashboard from "~/components/sections/UserDashboard";
import TrxInfo from "~/components/sections/TrxInfo";
import SupportedChain from "~/components/sections/SupportedChain";
import Connect from "~/components/sections/Connect";

export default component$(() => {
  return (
    <>
      <Hero />
      <Advertisement />
      <Evolution />
      <AboutSearch />
      <UserDashboard />
      <TrxInfo />
      <SupportedChain />
      <Connect />
    </>
  );
});
