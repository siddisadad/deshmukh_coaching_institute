export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-navy ring-1 ring-gold/40">
      {children}
    </p>
  );
}
