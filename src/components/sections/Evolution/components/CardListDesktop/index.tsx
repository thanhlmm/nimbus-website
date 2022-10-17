import {
  component$,
  useStylesScoped$,
  useClientEffect$,
} from "@builder.io/qwik";
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
              ["label--soon"]: card.year === "Soon",
            })}
          >
            {card.year}
            <div
              className="line"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay={index === 0 ? "0" : index === 1 ? "500" : "1000"}
            />
          </span>
          {index === 2 && (
            <img
              src={IMG_ROCKET}
              alt="rocket"
              className="rocket-img w-full object-contain"
              data-aos="fade-right"
              data-aos-delay="1800"
              data-aos-duration="1500"
            />
          )}
          <p className="content">{card.content}</p>
        </div>
      ))}
    </div>
  );
});
