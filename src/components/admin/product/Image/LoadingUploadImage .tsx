import * as Progress from "@radix-ui/react-progress";

import React, { useState } from "react";

const LoadingUploadImage = () => {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(
      () =>
        progress <= 88 ? setProgress((prev) => prev + 11) : setProgress(0),
      1000,
    );
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="container flex p-2 flex-col items-center gap-y-3">
      <label className="text-sm text-gray-500 text-center">
        در حال بارگزاری
      </label>

      <Progress.Root
        value={progress}
        max={100}
        aria-label="Image upload progress"
        className="relative overflow-hidden bg-gray-200 rounded-full w-full h-2"
      >
        <Progress.Indicator
          className="bg-blue-500 h-full rounded-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${progress - 100}%)`,
          }}
        />
      </Progress.Root>
    </div>
  );
};

export default LoadingUploadImage;
