import { useSearchParams } from "react-router-dom";
import { allAvailabilityOptions } from "@/constant/data/filter";
export default function Availability() {
  const [, setSearchParams] = useSearchParams();

  const onclick = (value: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value.trim() !== "") {
        next.set("inStock", value);
        next.delete("page"); // set for any defined value, even ""
      } else {
        next.delete("inStock");
        next.delete("page"); // only undefined removes it
      }
      return next;
    });
  };
  return (
    <div className="collapse  *:md:text-sm *:text-xs collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">موجودی</div>
      <div className="collapse-content flex flex-col gap-y-2 text-sm">
        {allAvailabilityOptions.map((item) => (
          <label
            key={item.label}
            className="flex cursor-pointer items-center gap-x-3 "
          >
            <span>{item.label}</span>
            <input
              onChange={(e) => onclick(e.target.value)}
              value={item.value}
              type="radio"
              name="availibility"
              className="radio radio-xs"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
