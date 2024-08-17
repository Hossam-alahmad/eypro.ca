import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
const Header = dynamic(() => import("../components/Header"), { ssr: false });
export const metadata: Metadata = {
  title: {
    template: "%s | EY Solution",
    default: "EY Solution",
  },
  description: "EY Solution",
  icons: ["/assets/logos/eypro-logo.png"],
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
          <Header />
          <main>
            {" "}
            <div className="pt-20">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
