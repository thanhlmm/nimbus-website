import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { NotionAPI } from "thanhle-notion-client";

import { QReactNotionBlogPage } from "~/integrations/blog";
import { getAllPosts } from "..";
import SignUpForm from "~/components/SignUpForm";

import styles from "../Blog.scss?inline";

export const useBlogDetail = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const posts = await getAllPosts({ locale: "", includeDraft: true });
  const selectedPost = posts.find((t) => t.slug === requestEvent.params.id);
  if (selectedPost) {
    const notion = new NotionAPI();
    return {
      data: await notion.getPage(selectedPost.id),
      selectedPost,
    };
  }
  return {
    data: {},
    selectedPost: {},
  };
});

export default component$(() => {
  useStylesScoped$(styles);

  const blockData = useBlogDetail();

  return (
    <div class="blogs_container">
      <QReactNotionBlogPage block={blockData.value} />
      <SignUpForm />
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const blockData = resolveValue(useBlogDetail);

  if (blockData) {
    return {
      title: `Nimbus - ${blockData.selectedPost.title}`,
      meta: [
        {
          name: "description",
          content: blockData.selectedPost.description,
        },
        {
          property: "og:title",
          content: `Nimbus - ${blockData.selectedPost.title}`,
        },
        {
          property: "og:description",
          content: blockData.selectedPost.description,
        },
        {
          property: "twitter:title",
          content: `Nimbus - ${blockData.selectedPost.title}`,
        },
        {
          property: "twitter:description",
          content: blockData.selectedPost.description,
        },
      ],
    };
  }

  return {};
};
