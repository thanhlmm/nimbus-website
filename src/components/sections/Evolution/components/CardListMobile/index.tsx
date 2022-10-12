import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./CardListMobile.scss?inline";
import classNames from "classnames";

import IMG_ROCKET from "~/assets/images/evolution/rocket.svg";

import { cards } from "~/components/sections/Evolution";


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="flex flex-col md:hidden">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <span
            className={classNames(`label label-${index}`, {
              ["label--soon"]: card.year === "Soon"
            })}
          >
            {card.year}
          </span>
          <div class="card-content">
            <p className="title">{card.title}</p>
            <div class="image">
              <img
                src={card.image}
                alt={card.title}
                className="w-full object-contain"
              />
            </div>
            {index === 2 && (
              <img
                src={IMG_ROCKET}
                alt="rocket"
                className="rocket-img w-full object-contain"
              />
            )}
            <p className="content">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
});