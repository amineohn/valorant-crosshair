import { NextPage } from "next";
import FadeIn from "react-fade-in";
import useSWR from "swr";
import fetcher from "../libs/fetcher";

const Crosshairs: NextPage = () => {
  type Crosshair = {
    id: string;
    name: string;
    createdAt: string;
    code: string;
    url: string;
  }[];

  const { data, error } = useSWR<Crosshair>("/api/list", fetcher);

  return (
    <>
      <FadeIn className="container my-10 mx-auto">
        <section className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
          {error && (
            <div className="z-50 w-full bg-red-500 px-2 py-2">
              <div className="flex h-full items-center justify-center">
                <div className="text-xl text-white">{error}</div>
              </div>
            </div>
          )}
          {!data ? (
            <div className="z-50 w-full bg-red-500 px-2 py-2">
              <div className="flex h-full items-center justify-center">
                <div className="text-xl text-white">Loading...</div>
              </div>
            </div>
          ) : (
            data.map((crosshair) => (
              <>
                <div className="w-full bg-red-500 px-2 py-2">
                  <img
                    className="mx-auto h-40 w-40"
                    src={crosshair.url}
                    alt={crosshair.name}
                  />
                  <span className="text-xl text-white">{crosshair.name}</span>
                  <span className="text-sm text-white">
                    Created At: {crosshair.createdAt}
                  </span>
                </div>
              </>
            ))
          )}
        </section>
      </FadeIn>
    </>
  );
};
export default Crosshairs;
