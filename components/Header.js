"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  // usePathname returns the current route, e.g. "/about"
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          BLAKE SANCHEZ
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link${isActive ? " active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
