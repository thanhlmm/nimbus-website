import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Toast.scss?inline";

interface Props {
  isShow: boolean;
  type: "success" | "fail" | "info";
  position: "top-center" | "bottom-right";
  message: string;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);

  return (
    <div class={`toast ${props.position}`} id={props.isShow ? "show" : "hide"}>
      <div class={`symbol ${props.type}`}>
        {props.type === "success" && <>&#x2713;</>}
        {props.type === "fail" && <>&#x2613;</>}
        {props.type === "info" && <>!</>}
      </div>
      <div class="message">{props.message}</div>
    </div>
  );
});
