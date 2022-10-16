import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Problem.scss?inline";

import Text from "../../../assets/images/advertisement/text.svg";
import Chart from "../../../assets/images/advertisement/chart.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="problem_wrapper">
      <div class="problem_wrapper_container">
        <img src={Text} alt="Text" class="wow fadeInUp" data-wow-duration="2s" data-wow-offset="400"/>
        <div class="flex items-center md:gap-5 md:flex-row flex-col gap-1">
          <div class="flex-1">
            <img src={Chart} alt="Chart" class="w-full h-full object-cover" />
          </div>
          <div class="title">
            Do you know that you can make Passive Income while investing?
          </div>
        </div>
      </div>
    </div>
  );
});
