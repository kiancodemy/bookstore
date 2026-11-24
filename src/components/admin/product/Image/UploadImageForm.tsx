import LoadingUploadImage from "./LoadingUploadImage ";
import { FiUploadCloud } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { useUPloadBookImage } from "@/hooks/product/admin/UploadBookImage";
import { useState } from "react";
export default function UploadImageForm({
  Image,
}: {
  Image: string | undefined | null;
}) {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { mutate, isPending } = useUPloadBookImage();
  console.log(Image);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("لطفاً یک تصویر انتخاب کنید");
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setError("حجم تصویر نباید بیشتر از ۳ مگابایت باشد");
      return;
    }

    setSelectedImage(file);
    setError(null);
  };

  const handleImage = () => {
    const formData = new FormData();
    mutate({ id: Number(id), formData: formData });

    if (selectedImage) {
      formData.append("file", selectedImage);
    } else {
      setError("هنوز تصویری انتخاب نکردید");
    }
  };
  return (
    <div className="flex flex-col gap-y-2 max-w-full">
      {/* image section */}
      {Image && (
        <div className="flex  justify-center items-center gap-3 p-2">
          <div className="border-2 border-dashed border-gray-400 rounded-md p-2">
            
            <img
              className="w-22 h-22 sm:w-24 sm:h-24 md:w-35 md:h-35 object-cover rounded-md"
              src={Image}
              alt="Current book image"
            />
          </div>
        </div>
      )}

      <div className="flex items-center flex-col gap-y-4 border-2 border-blue-500 border-dashed rounded-md p-4">
        <FiUploadCloud className="text-blue-500  md:h-8 h-5 w-5 md:w-8"></FiUploadCloud>
        <div className="flex flex-col items-center gap-y-4">
          <h1 className="md:text-sm text-xs">تصویر جدید را انتخاب کنید</h1>
          <input
            accept="image/png,image/jpeg,image/webp"
            onChange={handleImageChange}
            type="file"
            className="hidden"
            id="upload-image"
          />
          {!selectedImage ? (
            <label
              htmlFor="upload-image"
              className="bg-blue-500  md:text-sm text-xs text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600 transition-colors duration-300"
            >
              انتخاب تصویر
            </label>
          ) : (
            <button
              disabled={isPending}
              onClick={handleImage}
              className="bg-black md:text-sm text-xs text-white rounded-md px-8 py-2 cursor-pointer"
            >
              ارسال
            </button>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {!selectedImage && (
            <p className="text-sm text-gray-500">
              حجم تصاویر حداکثر ۳ مگابایت{" "}
            </p>
          )}
          {selectedImage && (
            <label className="border border-gray-400 justify-between rounded-md gap-x-3 border-dashed flex items-center py-1 px-6">
              <TiDeleteOutline
                onClick={() => setSelectedImage(null)}
                className="w-6 h-6 cursor-pointer"
              ></TiDeleteOutline>
              <p>{selectedImage?.name}</p>
            </label>
          )}
          {isPending && <LoadingUploadImage></LoadingUploadImage>}
        </div>
      </div>
    </div>
  );
}
