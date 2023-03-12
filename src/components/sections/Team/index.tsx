import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Team.scss?inline";

import Title from "~/components/Title";

import ThanhLe from "../../../assets/images/Thanh_Le2.png";
import ToanNhu from "../../../assets/images/Toan_Nhu.png";
import BinhNguyen from "../../../assets/images/Binh_Nguyen.png";

export const teams = [
  {
    src: ThanhLe,
    quote: '"I believed Web3 is the future, so let\'s buidl it. WAGMI!"',
    name: "Thanh Le, Founder",
  },
  {
    src: ToanNhu,
    quote:
      '"A HERO can be built from ZERO. Begin from where you stand with what you have. Nimbus is best sidekick for your HERO LEGEND."',
    name: "Toan Nhu, Co - Founder",
  },
  {
    src: BinhNguyen,
    quote:
      "\"What you create won't be worth anything if you don't try your best to make it. So try my best more and more.\"",
    name: "Binh Nguyen, Software Engineer",
  },
];

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="team_container">
      <div class="flex flex-col items-center gap-6 lg:mb-16 mb-10">
        <Title title="Team" />
        <div class="sub-title">Meet our soldiers that make this happens</div>
      </div>
      <div class="flex flex-col gap-16">
        <div class="flex lg:flex-row flex-col items-center gap-11">
          {teams.slice(0, 3).map((item, index) => {
            return (
              <div class="card" key={index}>
                <div class="avatar">
                  <div class="image_container">
                    <img
                      src={item.src}
                      class="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                  </div>
                </div>
                <div class="about_container">
                  <div class="quote">{item.quote}</div>
                  <div class="name">{item.name}</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div class="flex lg:flex-row flex-col items-center justify-center gap-11">
          {teams.slice(0, 2).map((item, index) => {
            return (
              <div class="card" key={index}>
                <div class="avatar">
                  <div class="image_container">
                    <img
                      src={item.src}
                      class="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                  </div>
                </div>
                <div class="about_container">
                  <div class="quote">{item.quote}</div>
                  <div class="name">{item.name}</div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
});
