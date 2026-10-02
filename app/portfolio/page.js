import Image from "next/image";
import uniformHub from "./467a6e51f9b860ce7268a2ac9de98c21.jpeg";
import lunaSafe from "./Screenshot 2026-10-03 011712.png";
import careerMap from "./Screenshot 2026-10-03 011923.png";

const projects = [
  { number: "01", title: "UniformHub", category: "E-commerce interface", description: "A focused uniform-shopping experience that makes school apparel easy to browse, compare, save, and add to cart.", contribution: "Product discovery · Interface design · Commerce UX", image: uniformHub, alt: "UniformHub storefront showing school uniform product cards" },
  { number: "02", title: "LunaSafe", category: "Privacy-first health concept", description: "A discreet cycle-tracking concept built around a calm visual system, private access, and an easy-to-scan calendar.", contribution: "Concept development · Calendar UI · Visual identity", image: lunaSafe, alt: "LunaSafe login screen and two monthly cycle calendars" },
  { number: "03", title: "IT Career Pathways", category: "Information design", description: "A visual map that turns a broad technology career landscape into clear paths, trends, advantages, and job outcomes.", contribution: "Research synthesis · Information hierarchy · Diagram design", image: careerMap, alt: "Diagram explaining IT graduate opportunities, trends, and career paths" },
];

export default function PortfolioPage() {
  return (
    <section>
      <header className="page-intro">
        <p className="eyebrow"><span>02</span> Selected work</p>
        <h1>Projects made to be <em>useful.</em></h1>
        <p>Three explorations in interface design, problem solving, and clear communication.</p>
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-visual">
              <Image src={project.image} alt={project.alt} className="project-img" sizes="(max-width: 800px) 100vw, 62vw" />
              <span className="project-number">{project.number}</span>
            </div>
            <div className="project-copy">
              <p className="project-category">{project.category}</p><h2>{project.title}</h2><p>{project.description}</p><p className="project-contribution">{project.contribution}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
