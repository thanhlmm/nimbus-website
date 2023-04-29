/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { lazy } from "react";
import { NotionRenderer } from "react-notion-x";
import { Tweet } from "react-twitter-widgets";
import { Modal } from "react-notion-x/build/third-party/modal";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

const TweetRender = ({ id }: { id: string }) => {
  return <Tweet tweetId={id} />;
};

const Code = lazy(() =>
  import("react-notion-x/build/third-party/code").then((m) => ({
    default: m.Code,
  }))
);

function ReactNotionBlogPage({ block }: { block: any }) {
  return (
    <NotionRenderer
      components={{
        Code,
        Tweet: TweetRender,
        Modal,
      }}
      recordMap={JSON.parse(block)}
      fullPage={true}
      darkMode={false}
      showTableOfContents
      minTableOfContentsItems={3}
    />
  );
}

// Specify eagerness to hydrate component on hover event.
export const QReactNotionBlogPage = qwikify$(ReactNotionBlogPage, {
  eagerness: "visible",
});
