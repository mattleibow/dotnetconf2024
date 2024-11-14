import type { Metadata, Viewport } from "next";
import navStyles from "./_styles";
import NavMenu from "./_navmenu";
import Script from 'next/script'

export const metadata: Metadata = {
  title: "React + Next.js",
  description: "A web application made with React and Next.js",
  icons: [
    { rel: "icon", type: "image/png", url: "/favicon.ico" },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Script src="/hybrid/hybridwebview.js" strategy="beforeInteractive" />
        <Script src="/hybrid/mauiapp.js" strategy="beforeInteractive" />

        <div className="page">
          
          <div className="sidebar">
            <NavMenu styles={navStyles} />
          </div>

          <main className="main">
            <div className="top-row px-4">
              <a href="https://learn.microsoft.com/aspnet/core/" target="_blank">About</a>
            </div>

            <article className="article content px-4">
              {children}
            </article>
          </main>
        </div>

      </body>
    </html>
  );
}
