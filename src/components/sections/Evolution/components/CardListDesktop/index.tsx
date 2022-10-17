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

  // useClientEffect$(() => {
  //   // Get a reference to the <path>
  //   var path = document.querySelector(".line");
  //   console.log("✅", {path});
  //
  //   if (!path) return;
  //
  //   // Get length of path... ~577px in this case
  //   var pathLength = path.clientWidth;
  //   console.log({ pathLength });
  //
  //   // Make very long dashes (the length of the path itself)
  //   path.style.width = pathLength + " " + pathLength;
  //
  //   // Offset the dashes so the it appears hidden entirely
  //   path.style.width = pathLength;
  //
  //   // Jake Archibald says so
  //   // https://jakearchibald.com/2013/animated-line-drawing-svg/
  //   path.getBoundingClientRect();
  //
  //   // When the page scrolls...
  //   window.addEventListener("scroll", function (e) {
  //     // What % down is it?
  //     // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  //     // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  //     var scrollPercentage =
  //       (document.documentElement.scrollTop + document.body.scrollTop) /
  //       (document.documentElement.scrollHeight -
  //         document.documentElement.clientHeight);
  //
  //     // Length to offset the dashes
  //     var drawLength = pathLength * scrollPercentage;
  //
  //     // Draw in reverse
  //     path.style.width = pathLength - drawLength;
  //
  //     // When complete, remove the dash array, otherwise shape isn't quite sharp
  //     // Accounts for fuzzy math
  //     if (scrollPercentage >= 0.99) {
  //       path.style.width = "none";
  //     } else {
  //       path.style.width = pathLength + " " + pathLength;
  //     }
  //   });
  // });

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
