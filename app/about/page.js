import Image from "next/image";
import Link from "next/link";
import portrait from "../image.png";

const strengths = ["Front-end foundations", "Interface design", "Visual storytelling", "Information design", "Responsive thinking"];

export default function AboutPage() {
  return (
    <section>
      <header className="page-intro"><p className="eyebrow"><span>03</span> About Blake</p><h1>Curious by nature.<br /><em>Intentional</em> by design.</h1></header>
      <div className="about-grid">
        <div className="about-photo"><Image src={portrait} alt="Portrait of Blake Sanchez" sizes="(max-width: 800px) 100vw, 42vw" /></div>
        <div className="about-copy">
          <p className="about-lead">I&apos;m a student developer interested in how technology, design, and everyday life connect.</p>
          <p>My work explores practical ideas: helping people find the right product, making personal tools feel safer, and turning complex information into something understandable.</p>
          <p>I&apos;m still learning—and that is part of the point. Every project is a chance to ask better questions, sharpen the details, and build with more intention than before.</p>
          <h2>What I bring</h2>
          <ul className="strength-list">{strengths.map((strength, index) => <li key={strength}><span>0{index + 1}</span>{strength}</li>)}</ul>
          <Link href="/portfolio" className="btn">See what I&apos;ve made <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}
