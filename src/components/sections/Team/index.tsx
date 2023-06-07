import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Team.scss?inline";

import Title from "~/components/Title";

import ThanhLe from "../../../assets/images/Thanh_Le.png";
import ToanNhu from "../../../assets/images/Toan_Nhu.png";
import BinhNguyen from "../../../assets/images/Binh_Nguyen.png";
import DuyNhat from "../../../assets/images/team_member.png";

export const teams = [
  {
    src: ThanhLe,
    quote: '"I believed Web3 is the future, so let\'s BUIDL it. WAGMI!"',
    name: "Thanh Le",
    position: "Founder",
    linkedin: "https://www.linkedin.com/in/thanhlm/",
  },
  {
    src: ToanNhu,
    quote:
      '"A HERO can be built from ZERO. Begin from where you stand with what you have. Nimbus is the best sidekick for your HERO LEGEND."',
    name: "Toan Nhu",
    position: "Co - Founder",
    linkedin: "https://www.linkedin.com/in/toannhu/",
  },
  {
    src: BinhNguyen,
    quote:
      "\"What you create won't be worth anything if you don't try your best to make it. So try my best more and more.\"",
    name: "Binh Nguyen",
    position: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/binh-nguyen-7295b1225/",
  },
  {
    src: DuyNhat,
    quote: '"Try to make the world better via digital product"',
    name: "Duy Nhat",
    position: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/duynhat/",
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
        <div class="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-11">
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
                  <div class="flex items-center justify-center gap-1">
                    <div class="name">{item.name}</div>
                    <a href={item.linkedin} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#1E96FC"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <div class="position">, {item.position}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div class="flex lg:flex-row flex-col lg:items-start items-center justify-center gap-11">
          {teams.slice(2, 4).map((item, index) => {
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
                  <div class="flex items-center justify-center gap-1">
                    <div class="name">{item.name}</div>
                    <a href={item.linkedin} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#1E96FC"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <div class="position">, {item.position}</div>
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
