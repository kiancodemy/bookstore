import { useSearchParams } from "react-router-dom";
import { allActivityOptions } from "@/constant/data/filter";
export default function Activity() {
  const [, setSearchParams] = useSearchParams();

  const onclick = (value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value.trim() !== "") {
        next.set("active", value); // set for any defined value, even ""
      } else {
        next.delete("active"); // only undefined removes it
      }
      return next;
    });
  };
  return (
    <div className="collapse  *:md:text-sm *:text-xs collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">فعال</div>
      <div className="collapse-content flex flex-col gap-y-2 text-sm">
        {allActivityOptions.map((item) => (
          <label
            key={item.label}
            className="flex cursor-pointer items-center gap-x-3 "
          >
            <span>{item.label}</span>
            <input
              onChange={(e) => onclick(e.target.value)}
              value={item.value}
              type="radio"
              name="activity"
              className="radio radio-xs"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
