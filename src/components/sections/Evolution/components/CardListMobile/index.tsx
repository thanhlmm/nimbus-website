import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./CardListMobile.scss?inline";
import classNames from "classnames";

import IMG_ROCKET from "~/assets/images/evolution/rocket-rotate.svg";

import { cards } from "~/components/sections/Evolution";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="flex flex-col md:hidden">
      {cards.map((card, index) => (
        <div class="item" key={index}>
          <span
            class={classNames(`label`, {
              ["label--soon"]: card.year === "Soon",
            })}
          >
            {card.year}
            <div class="line" />
          </span>
          <div class="card-content">
            <p class="title">{card.title}</p>
            <div class="image">
              <img
                src={card.image}
                alt={card.title}
                class="w-full object-contain"
              />
            </div>
            {index === 2 && (
              <img
                src={IMG_ROCKET}
                alt="rocket"
                class="wow bounceInDown rocket-img w-full object-contain"
                data-wow-duration="2s"
              />
            )}
            <p class="content">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
});
