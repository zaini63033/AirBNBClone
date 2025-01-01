"use client";

import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const defaultImage = "http://pix4.agoda.net/hotelimages/6/6/6_1112201742005261861.jpg?s=312x";

  return (
    <div
      className="
        relative
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        gap-4
        border-2
        border-dashed
        border-neutral-300
        p-20
        text-neutral-600
        transition
        hover:opacity-70
      "
    >
      <TbPhotoPlus size={50} />
      <div className="text-lg font-semibold">Click to upload</div>

      {/* Display the default image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          alt="Default Image"
          fill
          style={{ objectFit: "cover" }}
          src={defaultImage}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
