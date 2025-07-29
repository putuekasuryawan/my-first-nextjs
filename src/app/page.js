import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="rounded border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 font-stretch-200% text-5xl">
            Welcome to my first
          </div>
          <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-400">
        <span>Made with 1% code and 99% Googling 😅</span>
      </footer>
    </div>
  );
}
