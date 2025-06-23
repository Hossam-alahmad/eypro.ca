import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
const Header = dynamic(() => import("../components/Header"), { ssr: false });
import { Toaster } from "react-hot-toast";
import { FacebookIcon, Instagram, InstagramIcon } from "lucide-react";
import Link from "next/link";

const title = "EY Solution";
const description =
    "EY Solution, we understand the importance of maintaining a clean and inviting environment that resonates with the spirit of this remarkable city.";
export const metadata: Metadata = {
    metadataBase: new URL("https://eypro.ca"),
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
                    "min-h-screen font-poppins text-base text-text-primary overflow-x-hidden bg-background antialiased",
                    fontFamily.variable
                )}
            >
                <ThemeProvider defaultTheme="system" attribute="class">
                    <Toaster />
                    <Header />
                    <main className="py-10">
                        <div>{children}</div>
                    </main>
                    <div className="fixed bottom-10 left-10 z-10 ">
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    className="block hover:bg-primary hover:border-primary hover:scale-125 hover:text-white transition-all  bg-white p-2 rounded-full shadow-md border"
                                    href={
                                        "https://www.facebook.com/share/16iQLFxEwy/?mibextid=wwXIfr"
                                    }
                                    target="_blank"
                                >
                                    <FacebookIcon size={20} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="block hover:bg-primary hover:border-primary hover:scale-125 hover:text-white transition-all  bg-white p-2 rounded-full shadow-md border"
                                    href={
                                        "https://www.instagram.com/ey_pro_solutions/"
                                    }
                                    target="_blank"
                                >
                                    <InstagramIcon size={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
