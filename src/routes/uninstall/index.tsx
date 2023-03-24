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
    isLoading: true,
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
      const res = fetch(
        "https://aej6ifjhkj.execute-api.us-east-1.amazonaws.com/feedback",
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
              <input
                placeholder="Your email (Optional), we might notify you when we have a better version"
                value={state.email}
                onInput$={(ev) => {
                  state.email = (ev.target as HTMLTextAreaElement).value;
                  if ((ev.target as HTMLTextAreaElement).value) {
                    state.validateEmail = false;
                  }
                }}
                class={classNames(
                  "border border-[#E0E0E0] placeholder-[#676e81] text-[#676e81] rounded-[4px] focus:border-[#27326F] focus:border focus:outline-none py-3 px-4 w-full",
                  {
                    ["border-red-500"]: state.validateEmail,
                  }
                )}
              />
              <div
                class={classNames("text-red-500", {
                  ["opacity-0"]: !state.validateEmail,
                })}
              >
                Email invalid
              </div>
            </div>
            <div
              class={classNames("flex flex-col gap-1", {
                ["transform -translate-y-3"]: !state.validateEmail,
              })}
            >
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
                  "border border-[#E0E0E0] placeholder-[#676e81] text-[#676e81] rounded-[4px] focus:border-[#27326F] focus:border focus:outline-none py-3 px-4 w-full",
                  {
                    ["border-red-500"]: state.validateFeedback,
                  }
                )}
              />
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
        />
      )}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Nimbus - Uninstall",
};
