import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Book library",
  description: "Your FAV book library",
  icons:{
    icon:"icon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          <main> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
