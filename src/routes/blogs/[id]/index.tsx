import {
  useStore,
  component$,
  useStylesScoped$,
  useTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { NotionAPI } from "notion-client";

import { QReactNotionBlogPage } from "~/integrations/react";
import { getAllPosts } from "..";

import styles from "../Blogs.scss?inline";

interface StoreType {
  block: any;
}

export default component$(() => {
  useStylesScoped$(styles);
  const location = useLocation();
  const state = useStore<StoreType>({
    block: {},
  });

  useTask$(async () => {
    const posts = await getAllPosts({ locale: "", includeDraft: true });
    const selectedPost = posts.find((t) => t.slug === location.params.id);
    if (selectedPost) {
      const notion = new NotionAPI();
      state.block = await notion.getPage(selectedPost.id);
    }
  });

  return (
    <div class="blogs_container">
      <QReactNotionBlogPage block={JSON.stringify(state.block)} />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Nimbus - Blog Detail",
};
