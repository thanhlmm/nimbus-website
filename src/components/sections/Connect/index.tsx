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
          <div class="title">
            Make better investment decisions with Nimbus now
          </div>
          <a
            // href="https://forms.gle/9UdAHNbQorYaSmBY8"
            // href="https://chrome.google.com/webstore/detail/nimbus/edmjifiafngnpfefmbbaoipelifjgpfg"
            href="https://forms.gle/W8XQAC1SARagaNMd8"
            target="_blank"
            class="z-[2]"
          >
            <Button
              // data-tf-popup="NXRAWquK"
              // data-tf-size="70"
              // data-tf-iframe-props="title=Nimbus waiting list"
              // data-tf-medium="snippet"
              text="Join Beta Test"
              variant="secondary"
            />
          </a>
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
