import React, { FC, useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { TwitterFooter, DiscordFooter } from "@/components";
import { motion } from "framer-motion";
import { enterAnimation } from "@/constants/framer.config";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: FC<Props> = ({ open, setOpen }) => {
  const [numCloses, setNumCloses] = useState(0);

  const { push, pathname } = useRouter();

  const handleRouter = (path: string) => {
    if (pathname !== path) {
      push(path);
    }
  };

  return (
    <div
      className={`flex items-start overflow-y-auto overflow-x-hidden fixed top-0
        right-0 left-0 -translate-y-full z-50 w-screen h-screen
        ${open && "transition translate-y-0 ease-in-out duration-500"}
        ${
          !open &&
          numCloses > 0 &&
          "transition -translate-y-full ease-in-out duration-500"
        }`}
    >
      <div
        className={`text-tertiary bg-primary
          absolute flex flex-col justify-between min-h-screen w-screen
          3xl:w-[40%] top-0 right-0 py-4 px-6 shadow-2xl`}
      >
        {/* header - laptop/monitor */}
        <div className="flex justify-end">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/fries_logo.png`}
            width={40}
            height={40}
            alt="fries logo"
            className="md:hidden absolute left-1/2 -translate-x-1/2"
          />
          <div
            className="cursor-pointer p-2 transition ease-in-out duration-300
                sm:hover:-translate-y-1 sm:hover:scale-110 mt-2"
            onClick={() => {
              setOpen(false);
              setNumCloses(numCloses + 1);
            }}
          >
            {/* close menu icon */}
            <svg
              className="fill-black"
              width="14"
              height="14"
              viewBox="0 0 14 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.76256 7.5L0.256282 1.60041L1.49372 0.274588L7 6.17418L12.5063 0.274588L13.7437 1.60041L8.23744 7.5L13.7437 13.3996L12.5063 14.7254L7 8.82582L1.49372 14.7254L0.256282 13.3996L5.76256 7.5Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.256282 0.274587C0.59799 -0.0915292 1.15201 -0.091529 1.49372 0.274588L7 6.17418L12.5063 0.274588C12.848 -0.091529 13.402 -0.0915292 13.7437 0.274587C14.0854 0.640704 14.0854 1.2343 13.7437 1.60041L8.23744 7.5L13.7437 13.3996C14.0854 13.7657 14.0854 14.3593 13.7437 14.7254C13.402 15.0915 12.848 15.0915 12.5063 14.7254L7 8.82582L1.49372 14.7254C1.15201 15.0915 0.59799 15.0915 0.256282 14.7254C-0.0854273 14.3593 -0.0854271 13.7657 0.256282 13.3996L5.76256 7.5L0.256282 1.60041C-0.0854271 1.2343 -0.0854273 0.640704 0.256282 0.274587Z"
              />
            </svg>
          </div>
        </div>
        {open && (
          <motion.div
            {...enterAnimation}
            className="flex flex-col items-center gap-10 text-3xl"
          >
            <p
              className={`${
                pathname === "/" && "font-primaryBold"
              } cursor-pointer`}
              onClick={() => handleRouter("/")}
            >
              About
            </p>
            <p
              className={`${
                pathname === "/staking" && "font-primaryBold"
              } cursor-pointer text-center`}
              onClick={() =>
                window.open(
                  "https://anybodies.com/c/mickeydegods",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              Staking
            </p>
            <p
              className={`${
                pathname === "/merch" && "font-primaryBold"
              } cursor-pointer`}
              onClick={() =>
                window.open(
                  "https://aten.app/mickeymerch",
                  "_blank",
                  "noopener noreferrer"
                )
              }
            >
              Merch
            </p>
            {/* <a
              href="https://www.subber.xyz/mickeydegods"
              rel="noreferrer noopener"
            >
              Giveaways
            </a> */}
            <div className="flex items-center gap-3 text-primary">
              <a
                href="https://twitter.com/MickeyDeGods"
                rel="noreferrer noopener"
              >
                <TwitterFooter />
              </a>
              <a href="https://discord.gg/3qJtqzQJ" rel="noreferrer noopener">
                <DiscordFooter />
              </a>
            </div>
          </motion.div>
        )}

        {/* empty div */}
        <div />
      </div>
    </div>
  );
};

export default MobileMenu;
