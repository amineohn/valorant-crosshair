export default function Home() {
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
