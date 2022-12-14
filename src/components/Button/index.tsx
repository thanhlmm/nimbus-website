import { component$, useStylesScoped$, PropFunction } from "@builder.io/qwik";
import classNames from "classnames";

import styles from "./Button.scss?inline";

interface Props {
  text: string;
  is_main_btn: boolean;
  className?: string;
  onClick$?: PropFunction<() => void>;
  disabled?: boolean;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);
  const btnContainer = classNames(
    { ["main_btn_container"]: props.is_main_btn },
    { ["second_btn_container"]: !props.is_main_btn },
    props.className
  );

  return (
    <button
      {...props}
      class={btnContainer}
    >
      {props.text}
    </button>
  );
});
