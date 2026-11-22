import { languageOptions } from "@/type/Product";
import { useSearchParams } from "react-router-dom";
export default function LanguageFilter() {
  const [,setSearchParams] = useSearchParams();

  const onclick = (value: string) => {
    setSearchParams((prev) => {
      prev.set("language", value);   // updates or adds ?language=...
      return prev;
    });
  };
  return (
    <div className="collapse  *:md:text-sm *:text-xs collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">زبان</div>
      <div className="collapse-content flex flex-col gap-y-2 text-sm">
        {languageOptions.map((item) => (
          <label key={item.label} className="flex cursor-pointer items-center gap-x-3 ">
            <span>{item.label}</span>
            <input
              onChange={(e) => onclick(e.target.value)}
              
              value={item.value}
              type="radio"
              name="languge"
              className="radio radio-xs"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
