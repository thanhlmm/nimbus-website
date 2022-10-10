import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Footer.scss?inline";

import TwitterLogo from "../../assets/icons/twitter.svg";
import DiscordLogo from "../../assets/icons/discord.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div class="footer-container">
        <div class="copyright">© 2023 Nimbus, Inc. All rights reserved.</div>
        <div class="flex items-center justify-center md:gap-14 gap-7 lg:order-2 order-1">
          <a href="#" class="link">
            Feedback
          </a>
          <a href="#" class="link">
            Privacy
          </a>
          <a href="#" class="link">
            Blog
          </a>
          <div class="flex md:gap-7 gap-6">
            <a href="#">
              <img src={TwitterLogo} alt="twitter" />
            </a>
            <a href="#">
              <img src={DiscordLogo} alt="discord" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
