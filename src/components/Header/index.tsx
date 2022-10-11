import {
  component$,
  useStylesScoped$,
  useStore,
  useClientEffect$,
  useWatch$,
} from "@builder.io/qwik";
import classNames from "classnames";

import styles from "./Header.scss?inline";
import HeaderMobile from "../HeaderMobile";

import Logo from "../../assets/logo.svg";
import MenuBar from "../../assets/icons/menu-bar.svg";

interface HeaderStore {
  isSticky: string;
  isOpen: boolean;
}

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore<HeaderStore>({
    isSticky: "",
    isOpen: false,
  });

  useWatch$(({ track }) => {
    track(state, "isOpen");
    if (typeof window !== "undefined") {
      if (state.isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  });

  useClientEffect$(() => {
    const lastScrollY = window.pageYOffset;
    const handleCheckIsSticky = () => {
      const scrollY = window.pageYOffset;
      state.isSticky = scrollY > lastScrollY ? "sticky" : "";
    };
    window.addEventListener("scroll", handleCheckIsSticky);
    return () => {
      window.removeEventListener("scroll", handleCheckIsSticky);
    };
  });

  const headerWrapperStyle = classNames("header_wrapper", {
    ["header_wrapper_sticky"]: state.isSticky === "sticky",
  });

  const headerStyle = classNames("header_wrapper_container", {
    ["header_sticky"]: state.isSticky === "sticky",
  });

  return (
    <>
      <header class={headerWrapperStyle}>
        <div class={headerStyle}>
          <div class="logo">
            <img src={Logo} alt="logo" class="w-full h-full object-cover" />
          </div>
          <div class="block lg:hidden" onClick$={() => (state.isOpen = true)}>
            <img src={MenuBar} />
          </div>
          <div class="nav_links">
            <div class="link">Home</div>
            <div class="link">Transaction Explain</div>
            <div class="link">Blog</div>
          </div>
        </div>
      </header>
      <HeaderMobile
        active={state.isOpen}
        handleClose$={(value) => {
          state.isOpen = value;
        }}
      />
    </>
  );
});
