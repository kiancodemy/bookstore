import * as Slider from "@radix-ui/react-slider";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
export default function PageNumber() {
  const [range, setRange] = useState([10]);
  const [, setSearchParams] = useSearchParams();

  const handleCommit = (values: number[]) => {
    const [min] = values;
    setSearchParams((prev) => {
       const next = new URLSearchParams(prev);
      next.set("pages", String(min));
      next.delete("page");
    
      return prev;
    });
  };
  return (
    <div className="collapse *:md:text-sm *:text-xs collapse-arrow bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">صفحات</div>

      <div className="collapse-content flex flex-col gap-y-2 text-sm">
        <div className="flex px-3 justify-between">
          <span>{new Intl.NumberFormat("fa-IR").format(2000)}</span>
          <span>{new Intl.NumberFormat("fa-IR").format(range[0])}</span>
        </div>
        <Slider.Root
          className="relative flex items-center w-full h-5"
          value={range}
          onValueCommit={handleCommit} // r
          onValueChange={(values) => {
            // values is [min, max], e.g., [20, 80]
            setRange(values);
          }}
          min={10}
          max={2000}
        >
          <Slider.Track className="relative h-1.5 grow rounded bg-base-300">
            <Slider.Range className="absolute h-full rounded bg-blue-900" />
          </Slider.Track>
          <Slider.Thumb className="block cursor-pointer w-4 h-4 shadow-lg rounded-full bg-blue-600" />
        
        </Slider.Root>
      </div>
    </div>
  );
}
