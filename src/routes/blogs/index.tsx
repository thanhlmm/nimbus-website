import { component$, useStylesScoped$, $ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import dayjs from "dayjs";

import Title from "~/components/Title";
import Blog from "~/components/Blog";

import styles from "./Blogs.scss?inline";

type PostStatus = "Published" | "Draft";
export type Post = {
  id: string;
  slug: string;
  title: string;
  author: {
    fullName: string;
    profilePhoto: string;
  }[];
  date: string;
  tag: string[];
  status: PostStatus;
  lang: "en" | "vi";
  description?: string;
  linkRelatived?: string;
  series: string[];
  hero_image: {
    url: string;
  }[];
};

export const getAllPosts = $(
  async ({ locale = "", includeDraft = false }): Promise<Post[]> => {
    return await fetch(
      `https://notion.thanhle.workers.dev/v1/table/337fc2b8dc63488b96d629120c8adee6`
    )
      .then((res) => res.json())
      .then((res) =>
        res
          .filter((row: Post) => includeDraft || row.status === "Published")
          .filter((row: Post) => {
            return locale
              ? row.linkRelatived
                ? row.lang === locale
                : true
              : true;
          })
          .sort(
            (a: Post, b: Post) =>
              dayjs(b.date, "YYYY-MM-DD").unix() -
              dayjs(a.date, "YYYY-MM-DD").unix()
          )
      );
  }
);

export const useAllPosts = routeLoader$(async () => {
  return await getAllPosts({ locale: "", includeDraft: true });
});

export default component$(() => {
  useStylesScoped$(styles);
  const allPost = useAllPosts();

  return (
    <div class="blogs_container">
      <Title title="Blog" />
      <div class="grid md:grid-cols-2 grid-cols-1 gap-10">
        {allPost.value.map((item: Post) => {
          return (
            <Blog
              title={item.title}
              sub_title={item.description || ""}
              time={dayjs(item.date).format("MMM DD, YYYY")}
              author={item.author}
              image={
                item.hero_image
                  ? item?.hero_image[0].url
                  : "https://assets.coingecko.com/article-images/869342.jpg"
              }
              slug={item.slug}
            />
          );
        })}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Nimbus - Blogs",
};
