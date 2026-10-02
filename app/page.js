import Image from "next/image";
import Link from "next/link";
import portrait from "./image.png";

export default function HomePage() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span>01</span> Student developer · visual thinker</p>
        <h1>Ideas built with <em>clarity</em> and purpose.</h1>
        <p className="lead">I&apos;m Blake Andre C. Sanchez. I create approachable digital experiences—from useful web interfaces to thoughtful visual systems.</p>
        <div className="hero-actions">
          <Link href="/portfolio" className="btn">Explore my work <span>↗</span></Link>
          <Link href="/about" className="text-link">More about me</Link>
        </div>
        <dl className="hero-stats">
          <div><dt>03</dt><dd>Selected works</dd></div>
          <div><dt>06</dt><dd>Personal moments</dd></div>
          <div><dt>∞</dt><dd>Room to grow</dd></div>
        </dl>
      </div>
      <div className="portrait-wrap">
        <span className="portrait-index">B / 01</span>
        <Image src={portrait} alt="Blake Sanchez outdoors beside a rock formation" priority className="portrait" sizes="(max-width: 800px) 100vw, 42vw" />
        <p>Based in the Philippines<br />Creating for the web</p>
      </div>
    </section>
  );
}
