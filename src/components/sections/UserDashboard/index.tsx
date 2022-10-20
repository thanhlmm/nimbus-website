import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./UserDashboard.scss?inline";

import Image from "../../../assets/images/user_dashboard/image.svg";
import Check from "../../../assets/icons/check.svg";

export const cards = [
  {
    title: "Current Performance",
    content: "How is my investment performance? Show cash-flow position",
  },
  {
    title: "Transaction History",
    content: "Historical data on how users use blockchain",
  },
  {
    title: "Personalize News",
    content: "News tailors for you. Spend time on what matter",
  },
  {
    title: "Suggest Farming Opportunities",
    content:
      "Nimbus suggests farming opportunities based on your portfolio. Let's put tokens to work for you",
  },
];

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="user_dashboard_container">
      <div class="main_title lg:hidden block">User Dashboard</div>
      <div class="flex-1">
        <img
          src={Image}
          alt="img"
          class="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div class="lg:flex-[0.8] flex-1 flex flex-col gap-6">
        <div class="main_title lg:block hidden">User Dashboard</div>
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
                <div class="title_container">
                  <div class="title">{item.title}</div>
                  {index === 3 && <div class="highlight">Coming soon</div>}
                </div>
                <div class="content">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
