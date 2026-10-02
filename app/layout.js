import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Blake Andre C. Sanchez | Personal Portfolio",
  description: "Personal portfolio of Blake Andre C. Sanchez.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header and Footer appear on every page because they live here */}
        <Header />
        <main className="container page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
