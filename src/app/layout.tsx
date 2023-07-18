import "./globals.css";
import {Roboto} from "next/font/google";
import {Providers} from "./providers";

const roboto = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"],
});

export const metadata = {
    title: "Tirthya Kamal Dasgupta",
    description: "Portfolio",
    viewport: "width=device-width, initial-scale=1",
    icons: [{
        rel: "apple", type: "image/png", sizes: "180x180", url: "favicons/apple-touch-icon.png",
    }, {
        rel: "icon", type: "image/png", sizes: "32x32", url: "favicons/favicon-32x32.png",
    }, {
        rel: "icon", type: "image/png", sizes: "16x16", url: "favicons/favicon-16x16.png",
    }, {
        rel: "icon", type: "image/png", sizes: "192x192", url: "favicons/android-chrome-192x192.png",
    }, {
        rel: "icon", type: "image/png", sizes: "512x512", url: "favicons/android-chrome-512x512.png",
    },],
    manifest: "/favicons/site.webmanifest"
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (<html lang="en">
        <body className={roboto.className}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>);
};
