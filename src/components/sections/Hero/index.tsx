import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Hero.scss?inline";

import Title from "~/components/Title";
import Button from "~/components/Button";

import Hero from "../../../assets/images/hero/hero.webp";
import CoingeckoLogo from "../../../assets/images/hero/coingecko.svg";
// import DebankLogo from "../../../assets/images/hero/debank.svg";
import BlockPI from "../../../assets/images/hero/blockPI.png";
import AnkrLogo from "../../../assets/images/hero/ankr.svg";
import CovalentLogo from "../../../assets/images/hero/covalent.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="hero_wrapper">
      <div class="hero_wrapper_container">
        <div class="flex flex-col gap-8 xl:flex-[0.75] flex-1 lg:order-1 order-2">
          <Title title="A personalized Web3 portfolio tool" />
          <a
            // href="https://forms.gle/9UdAHNbQorYaSmBY8"
            href="https://chrome.google.com/webstore/detail/nimbus/edmjifiafngnpfefmbbaoipelifjgpfg"
            target="_blank"
          >
            <Button text="Join Beta Test" />
          </a>
          <div class="flex flex-col gap-3 md:mt-10 mt-2">
            <div class="title">Quality Data From</div>
            <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-4 md:mt-0 mt-3">
              <div class="grid grid-cols-2 items-center gap-4">
                <img
                  src={CoingeckoLogo}
                  alt="Coingecko"
                  class="object-contain w-full h-full"
                  width={"100%"}
                  height={"100%"}
                />
                <img
                  src={BlockPI}
                  alt="BlockPI"
                  class="object-contain w-full h-full"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div class="grid grid-cols-2 items-center gap-4">
                <img
                  src={CovalentLogo}
                  alt="Covalent"
                  class="object-contain w-full h-full"
                  width={"100%"}
                  height={"100%"}
                />
                <img
                  src={AnkrLogo}
                  alt="Ankr"
                  class="object-contain w-full h-full"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 xl:-mt-10 lg:order-2 order-1 lg:mt-0 -mt-12">
          <img
            src={Hero}
            alt="img"
            class="w-full min-h-[250px] h-auto md:h-[477px] object-contain"
            /*
            // @ts-ignore */
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  );
});
