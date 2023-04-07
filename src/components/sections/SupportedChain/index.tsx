import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./SupportedChain.scss?inline";

import Ethereum from "../../../assets/images/supported_chain/Ethereum.svg";
import Binance from "../../../assets/images/supported_chain/Binance.svg";
import Polygon from "../../../assets/images/supported_chain/Polygon.svg";
import Avalanche from "../../../assets/images/supported_chain/Avalanche.svg";
import Solona from "../../../assets/images/supported_chain/Solona.svg";
import Optimism from "../../../assets/images/supported_chain/Optimism.svg";
import Arbitrum from "../../../assets/images/supported_chain/Arbitrum.svg";
import Near from "../../../assets/images/supported_chain/Near.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="supported_chain_container">
      <div class="flex justify-center">
        <div class="main_title">Supported Chain</div>
      </div>
      {/* <div class="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-6 items-center mt-9">
        <div class="flex justify-center scale-100 hover:scale-110 transition-all">
          <img src={Ethereum} alt="Ethereum" loading="lazy" />
        </div>
        <div class="flex justify-center scale-100 hover:scale-110 transition-all">
          <img src={Binance} alt="Binance" loading="lazy" />
        </div>
        <div class="flex justify-center scale-100 hover:scale-110 transition-all">
          <img
            src={Polygon}
            alt="Polygon"
            class="w-[163px] h-[34px] md:my-0 my-4"
          />
        </div>
        <div class="flex justify-center scale-100 hover:scale-110 transition-all">
          <img
            src={Avalanche}
            alt="Avalanche"
            class="w-[242px] h-[46px]"
            loading="lazy"
          />
        </div>
      </div> */}
      <div class="flex justify-center scale-100 hover:scale-110 transition-all mt-9">
        <img src={Ethereum} alt="Ethereum" loading="lazy" />
      </div>
      <div class="flex justify-center my-8">
        <div class="sub_title">And many more soon...</div>
      </div>
      {/* <div class="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-6 items-center">
        <div class="flex justify-center scale-100 hover:scale-110 transition-all">
          <img src={Solona} alt="Solona" loading="lazy" />
        </div>
        <div class="flex justify-center scale-100 hover:scale-110 transition-all">
          <img
            src={Optimism}
            alt="Optimism"
            class="w-[177px] h-[46px] md:mt-0 mt-4"
            loading="lazy"
          />
        </div>
        <div class="flex justify-center scale-100 hover:scale-110 transition-all">
          <img src={Arbitrum} alt="Arbitrum" loading="lazy" />
        </div>
        <div class="flex justify-center scale-100 hover:scale-110 transition-all">
          <img src={Near} alt="Near" loading="lazy" />
        </div>
      </div> */}
    </div>
  );
});
