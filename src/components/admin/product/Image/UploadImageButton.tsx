import * as Progress from "@radix-ui/react-progress";

import React, { useState } from "react";

 const UploadImageButton = () => {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setTimeout(
      () => (progress <= 88 ? setProgress((prev) => prev + 11) : setProgress(0)),
      1000,
    );
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div>
      <h1>dfdf</h1>
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

export default UploadImageButton;
