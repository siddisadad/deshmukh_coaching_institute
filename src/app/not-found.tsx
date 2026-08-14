import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-royal">404</p>
      <h1 className="mt-3 text-4xl font-extrabold text-navy">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you are looking for is not available. Return home or speak with a counsellor.
      </p>
      <Link href="/" className="mt-6 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white">
        Back to Home
      </Link>
    </main>
  );
}
