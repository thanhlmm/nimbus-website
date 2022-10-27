import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Connect.scss?inline";

import Button from "~/components/Button";

import DotOne from "../../../assets/images/connect/Dot_One.svg";
import DotTwo from "../../../assets/images/connect/Dot_Two.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="connect_container">
      <div class="card_wrapper">
        <div class="card_wrapper_container">
          <div class="title">Be the early pioneers in the new era now</div>
          <Button
            data-tf-popup="NXRAWquK"
            data-tf-size="70"
            data-tf-iframe-props="title=Nimbus waiting list"
            data-tf-medium="snippet"
            text="Join Beta Test"
            is_main_btn={false}
          />
          <div class="dot_one">
            <img src={DotOne} loading="lazy" />
          </div>
          <div class="dot_two">
            <img src={DotTwo} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
});
