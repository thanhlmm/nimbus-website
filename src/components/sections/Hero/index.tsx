import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Hero.scss?inline";

import Title from "~/components/Title";
import Button from "~/components/Button";

import Hero from "../../../assets/images/hero/hero.webp";
import CoinMarketCap from "../../../assets/images/hero/coinmarketcap.svg";
import BlockPI from "../../../assets/images/hero/blockPI.png";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="hero_wrapper">
      <div class="hero_wrapper_container">
        <div class="flex flex-col gap-8 xl:flex-[0.75] flex-1 lg:order-1 order-2">
          <Title title="A personalized Web3 portfolio tool" />

          <div class="flex md:items-center md:flex-row flex-col gap-8">
            <a
              // href="https://forms.gle/9UdAHNbQorYaSmBY8"
              href="https://chrome.google.com/webstore/detail/nimbus/edmjifiafngnpfefmbbaoipelifjgpfg"
              target="_blank"
            >
              <Button text="Join Beta Test" />
            </a>
            <a
              href="https://app.getnimbus.io/?address=0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
              target="_blank"
              class="font-medium text-xl text-center link after:content-[''] after:block after:bottom-[-4px] after:h-[2px] after:left-[50%] after:absolute after:bg-[#27326F] after:w-0 after:transition-all md:hover:after:w-full md:hover:after:left-0"
            >
              Get a demo 🚀
            </a>
          </div>

          <div class="flex flex-col gap-3 mt-10">
            <div class="title">Quality Data From</div>
            <div class="flex items-center gap-8">
              <img
                src={CoinMarketCap}
                alt="CoinMarketCap"
                class="object-contain"
                width={"40%"}
                height={"40%"}
              />
              <img
                src={BlockPI}
                alt="BlockPI"
                class="object-contain"
                width={"25%"}
                height={"25%"}
              />
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
