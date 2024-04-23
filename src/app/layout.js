import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
    title: "Fikri | Home",
    description: "Portofolio Fikri",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${sora.className} bg-black text-white w-full`}
                suppressHydrationWarning={true}
            >
                <main className="lg:flex min-h-screen md:px-24 lg:pt-16 gap-10 overflow-x-clip">
                    <Sidebar />
                    <div className="w-full px-5 lg:px-0">{children}</div>
                </main>
            </body>
        </html>
    );
}
