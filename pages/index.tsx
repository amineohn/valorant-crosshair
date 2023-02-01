import { NextPage } from "next";
import FadeIn from "react-fade-in";
const Page: NextPage = () => {
  return (
    <>
      <FadeIn className="container my-10 mx-auto">
        <div className="z-50 w-full bg-red-500 px-2 py-2.5">
          <div className="flex h-full items-center justify-center">
            <div className="text-xl font-medium uppercase text-white">
              Bro, you're not supposed to be here. contact me for more info.
              Amine#0002
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};
export default Page;
