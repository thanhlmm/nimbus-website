import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./SignUpForm.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div
      class="border border-[#0000001a] rounded-[20px] md:pt-6 md:px-6 overflow-hidden"
      style="
          max-width: 680px;
          margin: 20px auto 120px auto;
          width: 90%;"
    >
      <div class="title">
        Manage your portfolio more effective by get updates from us
      </div>
      <iframe
        data-w-type="embedded"
        src="https://08m2q.mjt.lu/wgt/08m2q/g7z/form?c=13dad1e6"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        style="width: 100%;"
      ></iframe>
    </div>
  );
});
