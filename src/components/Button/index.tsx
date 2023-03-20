import { component$, useStylesScoped$, PropFunction } from "@builder.io/qwik";
import classNames from "classnames";

import Loading from "../Loading";

import styles from "./Button.scss?inline";

interface Props {
  text: string;
  className?: string;
  onClick$?: PropFunction<() => void>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  variant?: "primary" | "secondary";
}

export default component$(
  ({
    text,
    className,
    type,
    disabled,
    isLoading,
    variant = "primary",
    ...props
  }: Props) => {
    useStylesScoped$(styles);
    const btnContainer = classNames(
      { ["disabled"]: disabled },
      { ["primary"]: variant === "primary" },
      { ["secondary"]: variant === "secondary" },
      { ["loading"]: isLoading },
      className
    );

    return (
      <button
        {...props}
        type={type}
        disabled={disabled || isLoading}
        class={btnContainer}
      >
        {isLoading && <Loading />}
        {text}
      </button>
    );
  }
);
