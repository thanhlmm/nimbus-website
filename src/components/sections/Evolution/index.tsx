import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Evolution.scss?inline";

import Title from "~/components/Title";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="evolution_wrapper">
      <div class="evolution_wrapper_container">
        <div class="flex flex-col gap-8">
          <div class="my-0 mx-auto">
            <Title title="Web3 evolution" />
          </div>
          <div class="">hello</div>
        </div>
      </div>
    </div>
  );
});
