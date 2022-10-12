import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Team.scss?inline";

import Title from "~/components/Title";

import User from "../../../assets/images/teamate.svg";

export const teams = [
  {
    src: User,
    quote: "”The biggest risk of all is not taking one”",
    name: "Wade Warren, Co - Founder",
    position: "CTO of Google",
  },
  {
    src: User,
    quote: "”The biggest risk of all is not taking one”",
    name: "Wade Warren, Co - Founder",
    position: "CTO of Google",
  },
  {
    src: User,
    quote: "”The biggest risk of all is not taking one”",
    name: "Wade Warren, Co - Founder",
    position: "CTO of Google",
  },
  {
    src: User,
    quote: "”The biggest risk of all is not taking one”",
    name: "Wade Warren, Co - Founder",
    position: "CTO of Google",
  },
  {
    src: User,
    quote: "”The biggest risk of all is not taking one”",
    name: "Wade Warren, Co - Founder",
    position: "CTO of Google",
  },
];

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="team_container">
      <div class="flex flex-col items-center gap-6 lg:mb-16 mb-10">
        <Title title="Team" />
        <div class="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor amet
          mauris, scelerisque maecenas viverra vitae turpis bibendum.
        </div>
      </div>
      <div class="flex flex-col gap-16">
        <div class="flex lg:flex-row flex-col items-center gap-11">
          {teams.slice(0, 3).map((item, index) => {
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
                  <div class="position">
                    Past <span class="highlight">{item.position}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div class="flex lg:flex-row flex-col items-center justify-center gap-11">
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
                  <div class="position">
                    Past <span class="highlight">{item.position}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
