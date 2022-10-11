import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./SupportedChain.scss?inline";

import Ethereum from "../../../assets/images/supported_chain/Ethereum.svg";
import Binance from "../../../assets/images/supported_chain/Binance.svg";
import Polygon from "../../../assets/images/supported_chain/Polygon.svg";
import Avalanche from "../../../assets/images/supported_chain/Avalanche.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="supported_chain_container">
      <div class="flex justify-center">
        <div class="main_title">Supported Chain</div>
      </div>
      <div class="flex justify-evenly mt-9">
        <img src={Ethereum} alt="Ethereum" />
        <img src={Binance} alt="Binance" />
        <img src={Polygon} alt="Polygon" />
        <img src={Avalanche} alt="Avalanche" />
      </div>
    </div>
  );
});
