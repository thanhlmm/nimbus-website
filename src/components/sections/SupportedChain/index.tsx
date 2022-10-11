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
      <div class="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-6 items-center mt-9">
        <div class="flex justify-center">
          <img src={Ethereum} alt="Ethereum" />
        </div>
        <div class="flex justify-center">
          <img src={Binance} alt="Binance" />
        </div>
        <div class="flex justify-center">
          <img src={Polygon} alt="Polygon" />
        </div>
        <div class="flex justify-center">
          <img src={Avalanche} alt="Avalanche" />
        </div>
      </div>
      <div class="flex justify-center my-8">
        <div class="sub_title">And many more soon...</div>
      </div>
      <div class="grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-6 items-center">
        <div class="flex justify-center">
          <img src={Solona} alt="Solona" />
        </div>
        <div class="flex justify-center">
          <img src={Optimism} alt="Optimism" />
        </div>
        <div class="flex justify-center">
          <img src={Arbitrum} alt="Arbitrum" />
        </div>
        <div class="flex justify-center">
          <img src={Near} alt="Near" />
        </div>
      </div>
    </div>
  );
});
