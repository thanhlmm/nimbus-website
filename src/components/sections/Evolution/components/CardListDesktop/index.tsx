import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./CardListDesktop.scss?inline";
import classNames from "classnames";

import IMG_ROCKET from "~/assets/images/evolution/rocket.svg";

import { cards } from "~/components/sections/Evolution";


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="hidden md:flex md:flex-row">
      {cards.map((card, index) => (
        <div className="item" key={index}>
          <div class="item-group">
            <p className="title">{card.title}</p>
            <div class="image">
              <img
                src={card.image}
                alt={card.title}
                className="w-full object-contain"
              />
            </div>
          </div>
          <span
            className={classNames(`label`, {
              ["label--soon"]: card.year === "Soon"
            })}
          >
            {card.year}
            <div className="line" />
          </span>
          {index === 2 && (
            <img
              src={IMG_ROCKET}
              alt="rocket"
              className="wow bounceInLeft rocket-img w-full object-contain"
              data-wow-duration="4s"
            />
          )}
          <p className="content">{card.content}</p>
        </div>
      ))}
    </div>
  );
});
