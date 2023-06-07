import { component$ } from "@builder.io/qwik";

interface Props {
  title: string;
  sub_title: string;
  time: string;
  author: {
    fullName: string;
    profilePhoto: string;
  }[];
  image: string;
  slug: string;
}

export default component$((props: Props) => {
  return (
    <div class="flex xl:flex-row flex-col gap-6 flex-1">
      <a href={`/blog/${props.slug}`}>
        <img
          src={props.image}
          class="xl:w-[250px] w-full xl:h-[170px] h-[200px] overflow-hidden object-cover border border-gray-100 rounded-md"
        />
      </a>
      <div class="flex flex-col gap-1 flex-1">
        <div class="text-xs font-light text-gray-500 flex items-center gap-1">
          {props.author &&
            props.author.length &&
            props.author.map((item) => (
              <span class="font-medium text-black">{item.fullName}</span>
            ))}{" "}
          <span class="text-[8px]">●</span> {props.time}
        </div>
        <div class="flex flex-col gap-2">
          <a
            href={`/blog/${props.slug}`}
            class="text-lg font-bold cursor-pointer"
          >
            {props.title}
          </a>
          <div class="text-sm font-normal text-gray-600">{props.sub_title}</div>
        </div>
      </div>
    </div>
  );
});
