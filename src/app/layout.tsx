import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
const Header = dynamic(() => import("../components/Header"), { ssr: false });
import { Toaster } from "react-hot-toast";

const title = "EY Solution";
const description =
  "EY Solution, we understand the importance of maintaining a clean and inviting environment that resonates with the spirit of this remarkable city.";
export const metadata: Metadata = {
  title: {
    template: "%s | EY Solution",
    default: title,
  },
  description,
  authors: [{ name: "Hosam Alahmad", url: "" }],
  robots: "index, follow",
  keywords: [
    "ey solution",
    "clean",
    "cleaning service",
    "clean service",
    "pressure washing",
    "window washing",
    "commercial washing",
    "restaurant washing",
    "residential washing",
  ],
  icons: ["/assets/logos/eypro-logo.png"],
  openGraph: {
    title: {
      template: "%s | EY Solution",
      default: title,
    },
    description,
  },
  twitter: {
    title: {
      template: "%s | EY Solution",
      default: title,
    },
    description,
  },
};

const fontFamily = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-poppins text-base text-text-primary bg-background antialiased",
          fontFamily.variable
        )}
      >
        <ThemeProvider defaultTheme="system" attribute="class">
          <Toaster />
          <Header />
          <main className="flex flex-col justify-between min-h-[calc(100vh_-_150px)]  pt-[110px] lg:pt-[73px]">
            {" "}
            <div>{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
