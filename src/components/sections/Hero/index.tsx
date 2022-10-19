import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Hero.scss?inline";

import Title from "~/components/Title";
import Button from "~/components/Button";

import Hero from "../../../assets/images/hero/hero.svg";
import CoingeckoLogo from "../../../assets/images/hero/coingecko.svg";
import DebankLogo from "../../../assets/images/hero/debank.svg";
import AnkrLogo from "../../../assets/images/hero/ankr.svg";
import CovalentLogo from "../../../assets/images/hero/covalent.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="hero_wrapper">
      <div class="hero_wrapper_container">
        <div class="flex flex-col gap-8 xl:flex-[0.75] flex-1 lg:order-1 order-2">
          <Title title="Make Web3 simple for everyone" />
          <Button
            data-tf-popup="DN8uU1gz"
            data-tf-size="70"
            data-tf-iframe-props="title=Nimbus waiting list"
            data-tf-medium="snippet"
            text="Join Beta Test"
            is_main_btn={true}
            onClick$={() => console.log("HELLO")}
          />
          <div class="flex flex-col gap-3 md:mt-10 mt-2">
            <div class="title">Quality Data From</div>
            <div class="grid grid-cols-4 items-center gap-4">
              <img src={CoingeckoLogo} alt="Coingecko" />
              <img src={DebankLogo} alt="Debank" />
              <img src={AnkrLogo} alt="Ankr" />
              <img src={CovalentLogo} alt="Covalent" />
            </div>
          </div>
        </div>
        <div class="flex-1 xl:-mt-10 lg:order-2 order-1 lg:mt-0 -mt-12">
          <img src={Hero} alt="img" class="w-full h-full md:h-[477px] object-contain " />
        </div>
      </div>
    </div>
  );
});
