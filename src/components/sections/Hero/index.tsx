import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Hero.scss?inline";

import Title from "~/components/Title";
import Button from "~/components/Button";

import CoingeckoLogo from "../../../assets/images/hero/coingecko.svg";
import DebankLogo from "../../../assets/images/hero/debank.svg";
import AnkrLogo from "../../../assets/images/hero/ankr.svg";
import CovalentLogo from "../../../assets/images/hero/covalent.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="hero_wrapper">
      <div class="hero_wrapper_container">
        <div class="flex flex-col gap-8 xl:w-[530px] flex-1 md:order-1 order-2">
          <Title title="Make Web3 simple for everyone" />
          <Button
            text="Join beta test"
            is_main_btn={true}
            onClick$={() => console.log("HELLO")}
          />
          <div class="flex flex-col gap-3 md:mt-10 mt-2">
            <div class="title">Quality Data From</div>
            <div class="flex xl:flex-row flex-col xl:gap-20 gap-4">
              <div class="flex gap-4">
                <img src={CoingeckoLogo} alt="Coingecko" />
                <img src={DebankLogo} alt="Debank" />
              </div>
              <div class="flex gap-4 xl:ml-0 -ml-[7px]">
                <img src={AnkrLogo} alt="Ankr" />
                <img src={CovalentLogo} alt="Covalent" />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-red-500 flex-1 md:order-2 order-1">hello</div>
      </div>
    </div>
  );
});
