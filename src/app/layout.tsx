import Header from "@/components/Header/Header";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Sea Reach - Rental Property",
  description: "Point Pleasant Beach, NJ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="font-normal">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
