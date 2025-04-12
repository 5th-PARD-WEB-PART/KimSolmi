import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center bg-amber-500">
        2nd seminar practice
      </h1>
      <Link href="/detail">
        <div className="text-2xl font-bold text-center text-amber-500">
          Go to detail page
        </div>
      </Link>
    </div>
  );
}
