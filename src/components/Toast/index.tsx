import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Toast.scss?inline";

interface Props {
  isShow: boolean;
  type: "success" | "fail";
  message: string;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);

  return (
    <div class="toast" id={props.isShow ? "show" : "hide"}>
      <div class={`symbol ${props.type}`}>
        {props.type === "success" ? <div>&#x2713;</div> : <div>&#x2613;</div>}
      </div>
      <div class="message">{props.message}</div>
    </div>
  );
});
