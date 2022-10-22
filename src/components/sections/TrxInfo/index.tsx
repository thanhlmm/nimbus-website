import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./TrxInfo.scss?inline";

import Image from "../../../assets/images/trx_info/image.png";
import Check from "../../../assets/icons/check.svg";

export const cards = [
  {
    title: "Quick look on any pages",
    content:
      "Nimbus answer the question: ”Is this website safe to use?”; ”Is it a scam website?”",
  },
  {
    title: "Know how value move?",
    content:
      "Help new user understand terms in Web3 and then know more about the concept",
  },
  {
    title: "What's inside an address?",
    content: "How this news correlate with its token price?",
  },
];

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="trx_info_container">
      <div class="main_title lg:hidden block mb-4">
        Address & Transaction Info
      </div>
      <div class="lg:flex-[0.8] flex-1 flex flex-col gap-6 lg:order-1 order-2">
        <div class="main_title lg:block hidden">Address & Transaction Info</div>
        {cards.map((item, index) => {
          return (
            <div class="card" key={index}>
              <div class="w-[19.2px] h-[19.2px]">
                <img
                  src={Check}
                  alt="check"
                  class="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div class="flex flex-col md:gap-2 gap-1 flex-1 -mt-1">
                <div class="title">{item.title}</div>
                <div class="content">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="flex-1 lg:order-2 order-1">
        <img
          src={Image}
          alt="img"
          class="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
});
