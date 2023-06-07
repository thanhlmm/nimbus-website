/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import toast, { Toaster, ToastBar } from "react-hot-toast";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const ReactToast = () => {
  const notify = () => {
    let address = "0x8980dbbe60d92b53b08ff95ea1aaaabb7f665bcb";
    toast(<Toast address={address} />, {
      duration: 3000,
      position: "bottom-left",
      style: {
        borderRadius: "5px",
        minWidth: "300px",
        width: "25%",
        visibility: "visible",
        verticalAlign: "middle",
      },
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };
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
                  <div>
                    <button
                      style={{
                        border: "0px",
                        fontSize: "12px",
                        backgroundColor: "white",
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
    <div>
      <div>
        <b>
          <AiOutlineExclamationCircle
            style={{ color: "rgb(159, 159, 159)", width: "20px", margin: 2, position: "relative", top: "2.5px"}}
          />{" "}
          {shorterAddress(address)}
        </b>{" "}
        has used Nimbus portfolio
      </div>
    </div>
  );
};

export const QReactToast = qwikify$(ReactToast, { eagerness: "hover" });