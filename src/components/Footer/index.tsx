import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Footer.scss?inline";

import TwitterLogo from "../../assets/icons/twitter.svg";
import GithubLogo from "../../assets/icons/github.svg";
import DiscordLogo from "../../assets/icons/discord.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div class="footer-container">
        <div class="copyright">© 2023 Nimbus, Inc. All rights reserved.</div>
        <div class="flex items-center justify-center md:gap-14 gap-7 lg:order-2 order-1">
          <a href="https://nimbus.sleekplan.app/" class="link">
            Feedback
          </a>
          <a href="/privacy" class="link">
            Privacy
          </a>
          {/* <a href="#" class="link">
            Blog
          </a> */}
          <div class="flex items-center md:gap-7 gap-6">
            <a href="https://github.com/getnimbus">
              <img src={GithubLogo} alt="github" loading="lazy" />
            </a>
            <a href="https://twitter.com/nimbus_ext">
              <img src={TwitterLogo} alt="twitter" loading="lazy" />
            </a>
            <a href="https://discord.gg/u5b9dTrSTr">
              <img src={DiscordLogo} alt="discord" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
