import Button from "./components/button";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <main className="flex min-h-screen flex-col place-content-center space-y-6">
        <section className="flex flex-col space-y-4 rounded-md p-10 text-center">
          <h1 className="text-6xl font-extrabold text-neutral-900">
            Welcome to{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org"
            >
              Next.js 13!
            </a>
          </h1>
          <p className="text-2xl text-neutral-600">
            Get started by editing{" "}
            <code className="rounded-md bg-neutral-100 p-3 font-mono text-lg">
              app/page.tsx
            </code>
          </p>
          <Button label="Go to About" route="/about" />
        </section>
      </main>
    </div>
  );
}
