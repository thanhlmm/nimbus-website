import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { NotionAPI } from "thanhle-notion-client";

import { QReactNotionBlogPage } from "~/integrations/blog";
import { getAllPosts } from "..";

import styles from "../Blogs.scss?inline";

export const useBlogDetail = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  const posts = await getAllPosts({ locale: "", includeDraft: true });
  const selectedPost = posts.find((t) => t.slug === requestEvent.params.id);
  if (selectedPost) {
    const notion = new NotionAPI();
    return await notion.getPage(selectedPost.id);
  }

  return [];
});

export default component$(() => {
  useStylesScoped$(styles);

  const blockData = useBlogDetail();

  return (
    <div class="blogs_container">
      <QReactNotionBlogPage block={blockData.value} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Nimbus - Blog Detail",
};
