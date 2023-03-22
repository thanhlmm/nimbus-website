import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Title from "~/components/Title";
import Button from "~/components/Button";

import styles from "./Uninstall.scss?inline";

import Meme from "../../assets/images/delete.gif";

interface HeaderStore {
  text: string;
  isLoading: boolean;
}

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore<HeaderStore>({
    text: "",
    isLoading: false,
  });

  return (
    <div class="uninstall_container">
      <div class="content_wrapper">
        <div class="flex flex-col items-center gap-2">
          <img src={Meme} alt="" class="w-[190px] h-[190px] mb-1" />
          <Title title="Sorry to let you go" />
          <div class="sub_title">
            Thank you for giving our extension a try. Your feedback or
            suggestions are helpful for us to make our extension better.
          </div>
        </div>
        <form
          onSubmit$={async (ev) => {
            (ev as FormDataEvent).preventDefault();
            console.log("text: ", state.text);
          }}
          class="flex flex-col items-end gap-5"
        >
          <textarea
            rows={10}
            cols={80}
            placeholder="Leave some feedback here"
            onInput$={(ev) =>
              (state.text = (ev.target as HTMLTextAreaElement).value)
            }
            class="border border-[#27326F] placeholder-[#676e81] text-[#676e81] rounded-[4px] focus:outline-none p-4"
          />
          <Button text="Send" type="submit" />
        </form>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Nimbus - Uninstall",
};
