/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Suspense } from "react";
import toast, { Toaster } from "react-hot-toast";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

function ReactToast() {
  const notify = () => {
    toast.custom(
      <Toast address="0x8980dbbe60d92b53b08ff95ea1aaaabb7f665bcb" />,
      {
        duration: 4000,
        position: "bottom-left",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      }
    );
  };

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Toaster />
    </Suspense>
  );
}

function Toast({ address }: any) {
  const shorterAddress = (string: string) => {
    return string ? string.slice(0, 6) + "..." + string.substr(-4) : string;
  };

  return (
    <div className="flex items-center gap-2 bg-white py-[10px] px-[12px] rounded-lg">
      <div className="text-lg text-white rounded-full flex justify-center items-center w-[22px] h-[22px] bg-[#b9bcc5]">
        !
      </div>
      <div>
        <b>{shorterAddress(address)}</b> has used Nimbus portfolio
      </div>
    </div>
  );
}

// Specify eagerness to hydrate component on hover event.
export const QReactToast = qwikify$(ReactToast, {
  eagerness: "visible",
});
