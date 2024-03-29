import { component$, useStylesScoped$, useStore, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import classNames from "classnames";
import dayjs from "dayjs";

import Title from "~/components/Title";
import Button from "~/components/Button";
import Toast from "~/components/Toast";

import styles from "./Uninstall.scss?inline";

import Meme from "../../assets/images/delete.gif";

interface StoreType {
  feedback: string;
  email: string;
  isLoading: boolean;
  openToast: boolean;
  validateEmail: boolean;
  validateFeedback: boolean;
  isSuccess: boolean;
}

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore<StoreType>({
    feedback: "",
    email: "",
    isLoading: false,
    openToast: false,
    validateEmail: false,
    validateFeedback: false,
    isSuccess: false,
  });

  const handleSubmit = $(async () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const form = {
      date: dayjs(new Date()).format("DD/MM/YYYY - HH:mm"),
      email: state.email,
      feedback: state.feedback,
    };

    if (form.feedback === "") {
      state.validateFeedback = true;
      return;
    }

    if (form.email && !regexEmail.test(form.email)) {
      state.validateEmail = true;
      return;
    }

    state.isLoading = true;
    try {
      const res = fetch("https://api.getnimbus.io/feedback", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const dataRes = await res;

      if (dataRes.status === 200) {
        state.isSuccess = true;
        state.openToast = true;
        setTimeout(() => {
          state.openToast = false;
        }, 3000);
        state.email = "";
        state.feedback = "";
      } else {
        state.isSuccess = false;
        state.openToast = true;
        setTimeout(() => {
          state.openToast = false;
        }, 3000);
      }
    } catch (e) {
      console.log("e: ", e);
      state.isSuccess = false;
      state.openToast = true;
      setTimeout(() => {
        state.openToast = false;
      }, 3000);
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
          onSubmit$={handleSubmit}
          class="flex flex-col items-end"
        >
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <div
                class={classNames(
                  "flex flex-col gap-1 border border-[#00000014] placeholder-[#666666] text-[#666666] rounded-[5px] py-[6px] px-3 w-full text-base",
                  {
                    ["border-red-500"]: state.validateEmail,
                    ["bg-[#F0F2F7]"]: state.email,
                  }
                )}
              >
                <div class="text-[#333333]">Email (Optional)</div>
                <input
                  placeholder="We might notify you when we have a better version"
                  value={state.email}
                  onInput$={(ev) => {
                    state.email = (ev.target as HTMLTextAreaElement).value;
                    if ((ev.target as HTMLTextAreaElement).value) {
                      state.validateEmail = false;
                    }
                  }}
                  class={classNames(
                    "border-none focus:outline-none focus:ring-0",
                    {
                      ["bg-[#F0F2F7]"]: state.email,
                    }
                  )}
                />
              </div>
              <div
                class={classNames("text-red-500", {
                  ["opacity-0"]: !state.validateEmail,
                })}
              >
                Email invalid
              </div>
            </div>
            <div
              class={classNames({
                ["transform -translate-y-3"]: !state.validateEmail,
              })}
            >
              <div
                class={classNames(
                  "flex flex-col gap-1 border border-[#00000014] placeholder-[#666666] text-[#666666] rounded-[5px] py-[6px] px-3 w-full text-base",
                  {
                    ["border-red-500"]: state.validateFeedback,
                    ["bg-[#F0F2F7]"]: state.feedback,
                  }
                )}
              >
                <div class="text-[#333333]">Feedback</div>
                <textarea
                  rows={10}
                  cols={80}
                  placeholder="Anything that bored you? We will improve it"
                  value={state.feedback}
                  onInput$={(ev) => {
                    state.feedback = (ev.target as HTMLTextAreaElement).value;
                    if ((ev.target as HTMLTextAreaElement).value) {
                      state.validateFeedback = false;
                    }
                  }}
                  class={classNames(
                    "border-none focus:outline-none focus:ring-0",
                    {
                      ["bg-[#F0F2F7]"]: state.feedback,
                    }
                  )}
                />
              </div>
              <div
                class={classNames("text-red-500", {
                  ["opacity-0"]: !state.validateFeedback,
                })}
              >
                Feedback is required
              </div>
            </div>
          </div>
          <Button
            text="Send"
            type="submit"
            isLoading={state.isLoading || false}
            className="-mt-3"
          />
        </form>
      </div>
      {state.openToast && (
        <Toast
          message={`${
            state.isSuccess
              ? "Thank you for your feedback!"
              : "It seems like we have trouble with out server. Please try again"
          }`}
          type={`${state.isSuccess ? "success" : "fail"}`}
          isShow={state.openToast}
          position="top-center"
        />
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Nimbus - Uninstall",
};
