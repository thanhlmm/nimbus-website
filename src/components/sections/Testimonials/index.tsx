import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Testimonials.scss?inline";

import User from "../../../assets/images/user.svg";
import Title from "~/components/Title";

export const testimonials = [
  {
    src: User,
    name: "Jurgeni",
    email: "@monstermash",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum dolor in in sed semper dignissim sagittis pharetr. Nam nunc posuere vitae, vitae tincidunt. Eu risus amet volutpat est urna, erat.",
    time: "23 April · 8:13 AM",
  },
  {
    src: User,
    name: "Esther",
    email: "@monstermash",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum  in in sed semper dignissim sagittis pharetra tempus.",
    time: "23 April · 8:13 AM",
  },
  {
    src: User,
    name: "Eleanor Pena",
    email: "@monstermash",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum  in in sed semper dignissim sagittis pharetra tempus.",
    time: "23 April · 8:13 AM",
  },
  {
    src: User,
    name: "Kathryn Murphy",
    email: "@monstermash",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum dolor in in sed semper dignissim sagittis pharetr. Nam nunc posuere vitae, vitae tincidunt. Eu risus amet volutpat est urna, erat.",
    time: "23 April · 8:13 AM",
  },
  {
    src: User,
    name: "Albert Flores",
    email: "@monstermash",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum dolor in in sed semper dignissim sagittis pharetra tempus. Eu risus amet volutpat est urna, erat. In parturient mattis mattis varius facilisis quis morbi facilisis.",
    time: "23 April · 8:13 AM",
  },
  {
    src: User,
    name: "Marjorie",
    email: "@monstermash",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum do. In parturient mattis mattis varius facilisis quis morbi facilisis.",
    time: "23 April · 8:13 AM",
  },
];

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="testimonials_container">
      <div class="flex justify-center lg:mb-16 mb-10">
        <Title title="Testimonials" />
      </div>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-7">
        <div class="flex flex-col gap-7">
          {testimonials.slice(0, 2).map((item, index) => {
            return (
              <div class="card" key={index}>
                <div class="flex gap-3">
                  <div class="w-[46px] h-[46px] overflow-hidden rounded-full">
                    <img src={item.src} class="w-full h-full object-contain" />
                  </div>
                  <div class="flex flex-col">
                    <div class="name">{item.name}</div>
                    <div class="email">{item.email}</div>
                  </div>
                </div>
                <div class="content">{item.content}</div>
                <div class="time">{item.time}</div>
              </div>
            );
          })}
        </div>
        <div class="flex flex-col gap-7">
          {testimonials.slice(2, 4).map((item, index) => {
            return (
              <div class="card" key={index}>
                <div class="flex gap-3">
                  <div class="w-[46px] h-[46px] overflow-hidden rounded-full">
                    <img src={item.src} class="w-full h-full object-contain" />
                  </div>
                  <div class="flex flex-col">
                    <div class="name">{item.name}</div>
                    <div class="email">{item.email}</div>
                  </div>
                </div>
                <div class="content">{item.content}</div>
                <div class="time">{item.time}</div>
              </div>
            );
          })}
        </div>
        <div class="flex flex-col gap-7">
          {testimonials.slice(4, 6).map((item, index) => {
            return (
              <div class="card" key={index}>
                <div class="flex gap-3">
                  <div class="w-[46px] h-[46px] overflow-hidden rounded-full">
                    <img src={item.src} class="w-full h-full object-contain" />
                  </div>
                  <div class="flex flex-col">
                    <div class="name">{item.name}</div>
                    <div class="email">{item.email}</div>
                  </div>
                </div>
                <div class="content">{item.content}</div>
                <div class="time">{item.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
