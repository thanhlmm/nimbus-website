import { component$ } from "@builder.io/qwik";

interface Props {
  title: string;
  sub_title: string;
  time: string;
  author: string;
  image: string;
  id: string;
}

export default component$((props: Props) => {
  return (
    <div class="flex xl:flex-row flex-col gap-6 flex-1">
      <a href={`/blogs/${props.id}`}>
        <img
          src={props.image}
          class="xl:w-[250px] w-full xl:h-[180px] h-[200px] overflow-hidden rounded-[10px]"
        />
      </a>
      <div class="flex flex-col gap-1 flex-1">
        <div class="text-xs font-light text-gray-500">
          <span class="font-medium text-black">{props.author}</span>{" "}
          <span class="text-[10px]">●</span> {props.time}
        </div>
        <div class="flex flex-col gap-2">
          <a
            href={`/blogs/${props.id}`}
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
