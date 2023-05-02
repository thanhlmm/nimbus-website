import {
  component$,
  useStylesScoped$,
  useStore,
  useTask$,
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

  useTask$(({ track }) => {
    track(() => state.isOpen);
    if (typeof window !== "undefined") {
      if (state.isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  });

  useTask$(() => {
    if (typeof window !== "undefined") {
      const lastScrollY = window.pageYOffset;
      const handleCheckIsSticky = () => {
        const scrollY = window.pageYOffset;
        state.isSticky = scrollY > lastScrollY ? "sticky" : "";
      };
      window.addEventListener("scroll", handleCheckIsSticky);
      return () => {
        window.removeEventListener("scroll", handleCheckIsSticky);
      };
    }
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
          <a href="/" class="logo">
            <img
              src={Logo}
              alt="logo"
              class="w-full h-full object-cover"
              width={"100%"}
              height={"100%"}
            />
          </a>
          <div class="block lg:hidden" onClick$={() => (state.isOpen = true)}>
            <img src={MenuBar} alt="menu" width={35} height={35} />
          </div>
          <div class="nav_links">
            <a
              href="/"
              class="link after:content-[''] after:block after:bottom-[-4px] after:h-[2px] after:left-[50%] after:absolute after:bg-[#27326F] after:w-0 after:transition-all hover:after:w-full hover:after:left-0"
            >
              Home
            </a>
            {/* <div class="link">Transaction Explain</div> */}
            <a
              href="/blogs"
              class="link after:content-[''] after:block after:bottom-[-4px] after:h-[2px] after:left-[50%] after:absolute after:bg-[#27326F] after:w-0 after:transition-all hover:after:w-full hover:after:left-0"
            >
              Blogs
            </a>
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
