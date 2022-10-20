import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./CardListDesktop.scss?inline";
import classNames from "classnames";

import { cards } from "~/components/sections/Evolution";

import IMG_ROCKET from "~/assets/images/evolution/rocket.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="hidden md:flex md:flex-row">
      {cards.map((card, index) => (
        <div class="item" key={index}>
          <div class="item-group">
            <p class="title">{card.title}</p>
            <div class="image">
              <img
                src={card.image}
                alt={card.title}
                class="w-full object-contain"
              />
            </div>
          </div>
          <span
            class={classNames(`label`, {
              ["label--soon"]: card.year === "Soon",
            })}
          >
            {card.year}
            <div
              class="line"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay={index === 0 ? "0" : index === 1 ? "500" : "1000"}
            />
          </span>
          {index === 2 && (
            <img
              src={IMG_ROCKET}
              alt="rocket"
              class="rocket-img w-full object-contain"
              data-aos="fade-right"
              data-aos-delay="1800"
              data-aos-duration="1500"
            />
          )}
          <p class="content">{card.content}</p>
        </div>
      ))}
    </div>
  );
});
