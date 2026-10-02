import Image from "next/image";
import hills from "./gallery-01.jpg";
import portrait from "./gallery-02.jpg";
import formal from "./gallery-03.jpg";
import road from "./gallery-04.jpg";
import harbor from "./IMG_5418.JPG";
import basketball from "./IMG_5705.JPG";

const photos = [
  { src: hills, alt: "Blake overlooking the Chocolate Hills", caption: "Somewhere worth remembering", className: "tall" },
  { src: portrait, alt: "Blake in a white shirt", caption: "Quiet confidence", className: "tall" },
  { src: formal, alt: "Black and white portrait of Blake in a suit", caption: "Dressed for the moment", className: "tall" },
  { src: road, alt: "Blake wearing sunglasses on a road trip", caption: "In transit", className: "tall" },
  { src: harbor, alt: "Blake standing beside a harbor at sunset", caption: "Harbor light", className: "tall" },
  { src: basketball, alt: "Blake playing basketball", caption: "Game time", className: "wide" },
];

export default function GalleryPage() {
  return (
    <section>
      <header className="page-intro gallery-intro"><p className="eyebrow"><span>04</span> Off the screen</p><h1>Life, lately.</h1><p>A small collection of places, people, and moments that keep me inspired.</p></header>
      <div className="gallery">
        {photos.map((photo, index) => (
          <figure className={`gallery-item ${photo.className}`} key={photo.caption}>
            <Image src={photo.src} alt={photo.alt} className="gallery-img" sizes="(max-width: 700px) 100vw, 50vw" />
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
