/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Suspense, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { configureAbly, useChannel } from "@ably-labs/react-hooks";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

function ReactToast() {
  configureAbly({
    key: "YCiL-A.UsUzxQ:5cpM61UhKi-6OuVnoubOR27qMh605ii-7n5J_TTXWj0",
  });

  const [channel] = useChannel("address-sync", (message) => {
    toast.custom(<Toast address={message.data} />, {
      duration: 4000,
      position: "bottom-left",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  });

  useEffect(() => {
    SubscribeWS();
  }, []);

  const SubscribeWS = async () => {
    await channel.subscribe("address");
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
