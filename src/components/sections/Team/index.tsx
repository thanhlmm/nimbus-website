import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Team.scss?inline";

import Title from "~/components/Title";

import ThanhLe from "../../../assets/images/Thanh_Le.png";
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
      "\"Drop down all those imaginations and feelings that 'Success is built on Success'. A HERO can be built from ZERO. Begin from where you stand with what you have! Nimbus is the best sidekick for your HERO LEGEND.\"",
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
        <div class="sub-title">Meet our solider that makes this happens</div>
      </div>
      <div class="flex flex-col gap-16">
        <div class="flex lg:flex-row flex-col items-center gap-11">
          {teams.slice(0, 3).map((item, index) => {
            return (
              <div class="card" key={index}>
                <div class="w-[184px] h-[184px] overflow-hidden rounded-full p-2 hover:p-0 transition-all border-4 border-[#90e6e6] hover:border-[#41d0d0]">
                  <div class="w-full h-full bg-[#90e6e6] relative overflow-hidden rounded-full scale-100 hover:scale-110 transition-all">
                    <img
                      src={item.src}
                      class="w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                  </div>
                </div>
                <div class="about_container">
                  <div class="quote font-[400]">{item.quote}</div>
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
                <div class="w-[184px] h-[184px] overflow-hidden rounded-full p-2 hover:p-0 transition-all border-4 border-[#5DC5C5] hover:border-[#41d0d0]">
                  <img
                    src={item.src}
                    class="w-full h-full object-contain scale-100 hover:scale-110 transition-all"
                  />
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
