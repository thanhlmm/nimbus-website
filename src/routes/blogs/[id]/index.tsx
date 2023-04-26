import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Title from "~/components/Title";
import styles from "../Blogs.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="blogs_container">
      <Title title="Blog detail" />
      <div class="content_wrapper">detail</div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Nimbus - Blog Detail",
};
