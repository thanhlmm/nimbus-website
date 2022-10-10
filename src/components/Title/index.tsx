import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Title.scss?inline";

interface Props {
  title: string;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);

  return <div class="title">{props.title}</div>;
});
