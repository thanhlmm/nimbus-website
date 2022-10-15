import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./AboutSearch.scss?inline";

import Image from "../../../assets/images/about_search/image.png";
import Check from "../../../assets/icons/check.svg";

export const cards = [
  {
    title: "Security Check",
    content:
      "Nimbus answer the question: ”Is this website safe to use?”; ”Is it a scam website?”",
  },
  {
    title: "Term Explain",
    content:
      "Help new user understand terms in Web3 and then know more about the concept",
  },
  {
    title: "In - Page Token Info",
    content: "How this news correlate with its token price?",
  },
  {
    title: "Search Thousand of Tokens",
    content: "Indeep analysis to explore new investment opportunities",
  },
];

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="about_search_container">
      <div class="main_title lg:hidden block -mb-4">
        In browser info & search
      </div>
      <div class="lg:flex-[0.8] flex-1 flex flex-col gap-6 lg:order-1 order-2">
        <div class="main_title lg:block hidden">In browser info & search</div>
        {cards.map((item, index) => {
          return (
            <div class="card" key={index}>
              <div class="w-[19.2px] h-[19.2px]">
                <img
                  src={Check}
                  alt="check"
                  class="w-full h-full object-contain "
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
        <img src={Image} alt="img" class="w-full h-full object-contain " />
      </div>
    </div>
  );
});
