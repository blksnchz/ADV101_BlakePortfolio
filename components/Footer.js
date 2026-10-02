export default function Footer() {
  const year = new Date().getFullYear();
  return <footer className="site-footer"><div className="container"><p>© {year} Blake Andre C. Sanchez</p><p>Designed with curiosity. Built with intention.</p></div></footer>;
}
