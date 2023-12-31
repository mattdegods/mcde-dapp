import { FC } from "react";
import Image from "next/image";
import useMouseMoveEffect from "@/hooks/useMouseMoveEffect";

const ScratchOff: FC = () => {
  useMouseMoveEffect();

  return (
    <div
      className={`z-0 landing flex flex-1 flex-col items-center justify-center gap-10`}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/fries_logo.png`}
        width={366}
        height={366}
        alt="fries logo"
        onDragStart={(e) => e.preventDefault()}
      />
      <div className="flex items-center justify-center">
        <p className="hidden md:block md:text-lg font-primaryBold text-custom-red uppercase">
          Scratch to reveal
        </p>
      </div>
    </div>
  );
};

export default ScratchOff;
