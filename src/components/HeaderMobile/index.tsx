import { component$, useStylesScoped$, PropFunction } from "@builder.io/qwik";
import styles from "./HeaderMobile.scss?inline";

import Logo from "../../assets/logo.svg";
import Close from "../../assets/icons/close.svg";

interface Props {
  active: boolean;
  handleClose$: PropFunction<(value: boolean) => void>;
}

export default component$((props: Props) => {
  useStylesScoped$(styles);

  return (
    <div>
      <div class={`mobile_header_container ${props.active ? "show" : ""}`}>
        <div class="header">
          <a href="/" class="logo">
            <img src={Logo} alt="logo" width={"100%"} height={"100%"} />
          </a>
          <div class="mt-3" onClick$={() => props.handleClose$(false)}>
            <img src={Close} alt="close" width={35} height={35} />
          </div>
        </div>
        <div class="mt-2 flex flex-col justify-between h-[90%]">
          <div class="nav_links">
            <a href="/" class="link">
              Home
            </a>
            <a href="https://nimbus.sleekplan.app/" class="link">
              Feedback
            </a>
            {/* <div class="link">Transaction Explain</div>
            <div class="link">Blog</div> */}
          </div>
        </div>
      </div>
    </div>
  );
});
