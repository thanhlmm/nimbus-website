/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import { AiFillExclamationCircle } from "react-icons/ai";
import { configureAbly, useChannel } from "@ably-labs/react-hooks";

const ably = configureAbly({
  key: "YCiL-A.UsUzxQ:5cpM61UhKi-6OuVnoubOR27qMh605ii-7n5J_TTXWj0",
});

const ReactToast = () => {

  const [channel] = useChannel("address", (address) => {
    console.log("channel đã được nhận");
    console.log(address);
    toast(<Toast address={address} />, {
      duration: 3000,
      position: "bottom-left",
      style: {
        borderRadius: "5px",
        minWidth: "300px",
        width: "30%",
        visibility: "visible",
        verticalAlign: "middle",
      },
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  });
  return (
    <div>
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <div style={{ height: "100%" }}>
                    <button
                      style={{
                        fontSize: "14px",
                        backgroundColor: "white",
                        width: "10px",
                        height: "10px",
                        marginTop: "7px",
                      }}
                      onClick={() => toast.dismiss(t.id)}
                    >
                      X
                    </button>
                  </div>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </div>
  );
};

const Toast = ({ address }: any) => {
  const shorterAddress = (string: string) => {
    return string ? string.slice(0, 6) + "..." + string.substr(-4) : string;
  };

  return (
    <p>
      <AiFillExclamationCircle
        style={{
          color: "rgb(159, 159, 159)",
          width: "20px",
          height: "20px",
          margin: "0",
          marginRight: "5px",
          position: "relative",
          top: "1.5px",
          float: "left",
        }}
      />{" "}
      <b>{shorterAddress(address)}</b> has used Nimbus portfolio
    </p>
  );
};

export const QReactToast = qwikify$(ReactToast, { eagerness: "hover" });
