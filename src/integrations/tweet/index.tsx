/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Suspense } from "react";
import { Tweet } from "react-twitter-widgets";

function ReactTweet({ id }: { id: string }) {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Tweet tweetId={id} />
    </Suspense>
  );
}

export const QReactTweet = qwikify$(ReactTweet, {
  eagerness: "visible",
});
