import uploadImagebutton from "@/components/admin/product/Image/UploadImageButton";
import { FiUploadCloud } from "react-icons/fi";
import { useState } from "react";
export default function UploadImageForm() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Validate image type
    if (!file.type.startsWith("image/")) {
      alert("لطفاً یک تصویر انتخاب کنید");
      return;
    }

    // Validate image size (5MB)
    if (file.size > 3 * 1024 * 1024) {
      alert("حجم تصویر نباید بیشتر از ۵ مگابایت باشد");
      return;
    }

    setSelectedImage(file);
  };
  return (
    <div className="flex flex-col gap-y-2">
      {/* image section */}
      <div></div>

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
          <label
            htmlFor="upload-image"
            className="bg-blue-500 md:text-sm text-xs text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600 transition-colors duration-300"
          >
            انتخاب تصویر
          </label>
          <p></p>
        </div>
      </div>
    </div>
  );
}
