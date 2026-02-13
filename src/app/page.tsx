"use client";

import { useEffect } from "react";
import MuseumEntrance from "@/components/MuseumEntrance";
import GalleryRoom from "@/components/GalleryRoom";
import PhotoFrame from "@/components/PhotoFrame";
import MuseumFooter from "@/components/MuseumFooter";


export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-fade").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <MuseumEntrance />

      {/* Room 1: The Beginning */}
      <GalleryRoom title="El Comienzo" wallColor="var(--burgundy)">
        <PhotoFrame
          src={`/photos/photo1.svg`}
          alt="Our first chapter"
          caption="Where It All Started"
          date="Chapter One"
          variant="ornate"
        />
        <PhotoFrame
          src={`/photos/photo2.svg`}
          alt="First moments together"
          caption="First Smiles"
          date="The Early Days"
          variant="oval"
        />
      </GalleryRoom>

      {/* Room 2: Our Adventures */}
      <GalleryRoom title="Nuestras Aventuras" wallColor="var(--navy)">
        <PhotoFrame
          src={`/photos/photo3.svg`}
          alt="Adventures together"
          caption="Exploring Together"
          date="Our Journey"
          variant="arch"
        />
        <PhotoFrame
          src={`/photos/photo4.svg`}
          alt="Shared experiences"
          caption="Making Memories"
          date="Along the Way"
          variant="rectangular"
        />
        <PhotoFrame
          src={`/photos/photo5.svg`}
          alt="Joy and laughter"
          caption="Pure Joy"
          date="Captured Moments"
          variant="circular"
        />
      </GalleryRoom>

      {/* Room 3: Momentos Preciados */}
      <GalleryRoom title="Treasured Moments" wallColor="var(--charcoal)">
        <PhotoFrame
          src={`/photos/photo6.svg`}
          alt="Treasured memory"
          caption="Close to Heart"
          date="Forever Ours"
          variant="ornate"
        />
        <PhotoFrame
          src={`/photos/test.jpeg`}
          alt="Precious moments"
          caption="Golden Moments"
          date="Timeless"
          variant="oval"
        />
      </GalleryRoom>

      <MuseumFooter />
    </main>
  );
}
