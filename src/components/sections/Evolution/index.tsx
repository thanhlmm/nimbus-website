import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Evolution.scss?inline";

import IMG_2013 from "~/assets/images/evolution/2013.png";
import IMG_2017 from "~/assets/images/evolution/2017.png";
import IMG_2021 from "~/assets/images/evolution/2021.png";
import IMG_NOW from "~/assets/images/evolution/now.png";

import Title from "~/components/Title";
import CardListDesktop from "~/components/sections/Evolution/components/CardListDesktop";
import CardListMobile from "~/components/sections/Evolution/components/CardListMobile";

export const cards = [
  {
    title: "What is  blockchain?",
    image: IMG_2013,
    year: 2013,
    content: "Bitcoin start viral",
  },
  {
    title: "This is the future!",
    image: IMG_2017,
    year: 2017,
    content: "ICO, blockchain become a new funding method",
  },
  {
    title: "Web3 utilities",
    image: IMG_2021,
    year: 2021,
    content: "Defi, GameFi, more scalable platform",
  },
  {
    title: "Mass adoption",
    image: IMG_NOW,
    year: "Soon",
    content: "A friendly way to use Web3",
  },
];

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="evolution_wrapper">
      <div class="evolution_wrapper_container">
        <div class="text-center">
          <Title title="Web3 evolution" />
        </div>
        <div class="mt-[78px]">
          <CardListDesktop />
          <CardListMobile />
        </div>
      </div>
    </div>
  );
});
