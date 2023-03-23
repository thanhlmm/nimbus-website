import { component$, useStylesScoped$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import classNames from "classnames";
import dayjs from "dayjs";

import Title from "~/components/Title";
import Button from "~/components/Button";

import styles from "./Uninstall.scss?inline";

import Meme from "../../assets/images/delete.gif";

interface HeaderStore {
  feedback: string;
  email: string;
  isLoading: boolean;
  errors: {
    email: {
      required: boolean;
      msg: string;
    };
    feedback: {
      required: boolean;
      msg: string;
    };
  };
}

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore<HeaderStore>({
    feedback: "",
    email: "",
    isLoading: false,
    errors: {
      email: {
        required: false,
        msg: "",
      },
      feedback: {
        required: false,
        msg: "",
      },
    },
  });

  const Submit = $(async () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const form = {
      date: dayjs(new Date()).format("DD/MM/YYYY - HH:mm"),
      email: state.email,
      feedback: state.feedback,
    };

    console.log("form: ", form);

    if (form.feedback === "") {
      state.errors.feedback = {
        required: true,
        msg: "Feedback is required",
      };
      return;
    }

    if (form.email && !regexEmail.test(form.email)) {
      state.errors.email = {
        required: true,
        msg: "Email is not valid",
      };
      return;
    }

    state.isLoading = true;
    try {
      const res = fetch(
        "https://aej6ifjhkj.execute-api.us-east-1.amazonaws.com/feedbacks",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const dataRes = await res;
      console.log("dataRes: ", dataRes);

      state.email = "";
      state.feedback = "";
    } catch (e) {
      console.log("e: ", e);
    } finally {
      state.isLoading = false;
    }
  });

  return (
    <div class="uninstall_container">
      <div class="content_wrapper">
        <div class="flex flex-col items-center gap-2">
          <img
            src={Meme}
            alt=""
            class="w-[190px] h-[190px] mb-1 rounded-[4px]"
          />
          <Title title="Sorry to let you go" />
          <div class="sub_title">
            Thank you for giving our extension a try. Your feedback or
            suggestions are helpful for us to make our extension better.
          </div>
        </div>
        <form
          preventdefault:submit
          onSubmit$={Submit}
          class="flex flex-col items-end gap-5"
        >
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <input
                placeholder="Let us know your email (optional)"
                value={state.email}
                onInput$={(ev) =>
                  (state.email = (ev.target as HTMLTextAreaElement).value)
                }
                onBlur$={(ev) => {
                  if ((ev.target as HTMLTextAreaElement).value) {
                    state.errors.email = {
                      required: false,
                      msg: "",
                    };
                  }
                }}
                class={classNames(
                  "border border-[#27326F] placeholder-[#676e81] text-[#676e81] rounded-[4px] focus:outline-none p-4 w-full",
                  {
                    ["border-red-500"]: state.errors.email.required,
                  }
                )}
              />
              {state.errors.email.required && (
                <div class="text-red-500 font-medium">
                  {state.errors.email.msg}
                </div>
              )}
            </div>
            <div class="flex flex-col gap-1">
              <textarea
                rows={10}
                cols={80}
                placeholder="Leave some feedback here"
                value={state.feedback}
                onInput$={(ev) =>
                  (state.feedback = (ev.target as HTMLTextAreaElement).value)
                }
                onBlur$={(ev) => {
                  if ((ev.target as HTMLTextAreaElement).value) {
                    state.errors.feedback = {
                      required: false,
                      msg: "",
                    };
                  }
                }}
                class={classNames(
                  "border border-[#27326F] placeholder-[#676e81] text-[#676e81] rounded-[4px] focus:outline-none p-4 w-full",
                  {
                    ["border-red-500"]: state.errors.feedback.required,
                  }
                )}
              />
              {state.errors.feedback.required && (
                <div class="text-red-500 font-medium">
                  {state.errors.feedback.msg}
                </div>
              )}
            </div>
          </div>
          <Button text="Send" type="submit" />
        </form>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Nimbus - Uninstall",
};
