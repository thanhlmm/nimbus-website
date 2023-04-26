import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Problem.scss?inline";
import Text from "~/assets/images/advertisement/text.svg";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div class="hidden lg:block word-cloud-wrapper">
        <p
          class="wow fadeInUp word-1 absolute fz-8 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Staking
        </p>
        <p
          class="wow fadeInUp word-3 absolute fz-3 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Staking
        </p>
        <p
          class="wow fadeInUp word-4 absolute fz-4 c-3"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Staking
        </p>
        <p
          class="wow fadeInUp word-5 absolute fz-2 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Staking
        </p>
        <p
          class="wow fadeInUp word-6 absolute fz-6 c-3"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Staking
        </p>
        <p
          class="wow fadeInUp word-7 absolute fz-8 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          (3,3)
        </p>
        <p
          class="wow fadeInUp word-8 absolute fz-5 c-3"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          (3,3)
        </p>
        <p
          class="wow fadeInUp word-9 absolute fz-3 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          (3,3)
        </p>
        <p
          class="wow fadeInUp word-10 absolute fz-4 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          (3,3)
        </p>
        <p
          class="wow fadeInUp word-11 absolute fz-4 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Impermanent loss
        </p>
        <p
          class="wow fadeInUp word-13 absolute fz-8 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Impermanent loss
        </p>
        <p
          class="wow fadeInUp word-14 absolute fz-7 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Seed Phrase
        </p>
        <p
          class="wow fadeInUp word-15 absolute fz-5 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Seed Phrase
        </p>
        <p
          class="wow fadeInUp word-16 absolute fz-2 c-3"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Seed Phrase
        </p>
        <p
          class="wow fadeInUp word-17 absolute fz-1 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Seed Phrase
        </p>
        <p
          class="wow fadeInUp word-18 absolute fz-4 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Seed Phrase
        </p>
        <p
          class="wow fadeInUp word-19 absolute fz-6 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          AMM
        </p>
        <p
          class="wow fadeInUp word-20 absolute fz-4 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          AMM
        </p>
        <p
          class="wow fadeInUp word-21 absolute fz-2 c-3"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          AMM
        </p>
        <p
          class="wow fadeInUp word-22 absolute fz-7 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Liquidity Pool
        </p>
        <p
          class="wow fadeInUp word-23 absolute fz-4 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Liquidity Pool
        </p>
        <p
          class="wow fadeInUp word-24 absolute fz-2 c-3"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Liquidity Pool
        </p>
        <p
          class="wow fadeInUp word-25 absolute fz-7 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          WAGMI
        </p>
        <p
          class="wow fadeInUp word-26 absolute fz-4 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          WAGMI
        </p>
        <p
          class="wow fadeInUp word-27 absolute fz-2 c-3"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          WAGMI
        </p>
        <p
          class="wow fadeInUp word-28 absolute fz-7 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Vesting
        </p>
        <p
          class="wow fadeInUp word-29 absolute fz-4 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Vesting
        </p>
        <p
          class="wow fadeInUp word-30 absolute fz-2 c-3"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Vesting
        </p>
        <p
          class="wow fadeInUp word-31 absolute fz-7 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Yield Farming
        </p>
        <p
          class="wow fadeInUp word-32 absolute fz-4 c-1"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Yield Farming
        </p>
        <p
          class="wow fadeInUp word-33 absolute fz-4 c-2"
          data-wow-offset="400"
          data-wow-iteration="1"
        >
          Yield Farming
        </p>
      </div>
      <div class="block lg:hidden">
        <img
          src={Text}
          alt="Text"
          class="wow fadeInUp"
          data-wow-duration="2s"
          data-wow-offset="400"
          data-wow-iteration="1"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </>
  );
});
