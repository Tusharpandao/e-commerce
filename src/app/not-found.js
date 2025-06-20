import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <h1 className="text-6xl font-bold mb-4 text-amber-400">Coming Soon</h1>
      <h2 className="text-2xl font-semibold mb-2">This page is under construction</h2>
      <p className="mb-6 text-center max-w-md">
        We&apos;re working hard to bring you this page. Please check back later!
      </p>
      <Link href="/" className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-500 transition-colors">
        Go to Homepage
      </Link>
    </div>
  );
} 