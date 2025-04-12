import Link from "next/link";

export default function Detail() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl font-bold text-center bg-blue-500">
          Detail page
        </h1>
        
        <Link href="/">
          <div className="text-2xl font-bold text-center text-blue-500">
            Go to home page
          </div>
        </Link>
      </div>
    );
  
}