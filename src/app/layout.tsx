import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    template: "%s | HealthCare",
    default: "HealthCare",
  },
  description: "HealthCare app for patients managing ",
  icons: ["/favicon.svg"],
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
