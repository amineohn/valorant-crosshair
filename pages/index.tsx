import { NextPage } from "next";
import useSWR from "swr";
import fetcher from "../libs/fetcher";

const Page: NextPage = () => {
  type Crosshair = {
    id: string;
    name: string;
    createdAt: string;
    code: string;
    url: string;
  }[];

  const { data, error } = useSWR<Crosshair>("/api/list", fetcher);
  if (!data) {
    return (
      <div className="z-50 h-screen w-full bg-red-500">
        <div className="flex h-full items-center justify-center">
          <div className="text-4xl text-white">Loading...</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        {error && (
          <div className="h-16 w-full bg-red-500">
            <div className="flex h-full items-center justify-center">
              <div className="text-xl text-white">{error}</div>
            </div>
          </div>
        )}
        <main className="flex min-h-screen flex-col place-content-center space-y-6">
          <section className="grid grid-cols-8 gap-2">
            {data.map((crosshair) => (
              <>
                <div className="rounded-md bg-red-500">
                  <img
                    className="h-40 w-40"
                    src={crosshair.url}
                    alt={crosshair.name}
                  />
                  <span className="text-xl text-white">{crosshair.name}</span>
                  <span className="text-sm text-white">
                    Created At: {crosshair.createdAt}
                  </span>
                </div>
              </>
            ))}
          </section>
        </main>
      </div>
    </>
  );
};
export default Page;
