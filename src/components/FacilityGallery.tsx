"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { facilities } from "@/content/site";

export function FacilityGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => ((current ?? 0) + 1) % facilities.gallery.length);
      if (event.key === "ArrowLeft") {
        setActive((current) => ((current ?? 0) - 1 + facilities.gallery.length) % facilities.gallery.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="masonry mt-12">
        {facilities.gallery.map((item, index) => (
          <Reveal key={item.src} className="masonry-item" delay={index * 40}>
            <button
              type="button"
              className="block w-full overflow-hidden rounded-3xl bg-surface text-left shadow-soft"
              onClick={() => setActive(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={index % 3 === 0 ? 1100 : 720}
                className="h-auto w-full object-cover transition duration-500 hover:scale-[1.03]"
              />
              <span className="block px-4 py-3 text-sm font-semibold text-navy">{item.label}</span>
            </button>
          </Reveal>
        ))}
      </div>
      {active !== null ? (
        <div className="fixed inset-0 z-[75] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm">
          <button type="button" className="absolute inset-0" aria-label="Close gallery" onClick={() => setActive(null)} />
          <figure className="relative max-h-[90vh] w-full max-w-4xl">
            <button
              type="button"
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white text-navy"
              onClick={() => setActive(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <Image
              src={facilities.gallery[active].src}
              alt={facilities.gallery[active].alt}
              width={1400}
              height={900}
              className="max-h-[78vh] w-full rounded-3xl object-cover"
            />
            <figcaption className="mt-3 text-center text-sm font-semibold text-white">
              {facilities.gallery[active].label}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
