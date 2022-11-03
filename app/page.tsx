import useSWR from "swr";
import fetcher from "../libs/fetcher";

async function getData() {
  const response = useSWR("/api/crosshairs", fetcher);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await response.data;
  console.log(data);
  return data;
}
// https://blog.appsignal.com/2022/11/02/whats-new-in-nextjs-13.html
export default async function Home() {
  const crosshairs = [
    {
      id: 1,
      config: "",
      color: "red",
    },
    {
      id: 2,
      config: "",
      color: "green",
    },
  ];
  //https://www.serilineups.com/crosshairlar.html
  const name = await getData();
  console.log(name);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <main className="flex min-h-screen flex-col place-content-center space-y-6">
        <section className="grid grid-cols-8 gap-2">
          {crosshairs.map((item) => (
            <>
              {[...Array(20)].map((_, i) => (
                <div className="h-10 w-10 rounded-full bg-blue-500 px-2.5 py-2 text-white">
                  {i}
                </div>
              ))}

              <p className="text-center text-gray-800">{item.config}</p>
            </>
          ))}
        </section>
      </main>
    </div>
  );
}
