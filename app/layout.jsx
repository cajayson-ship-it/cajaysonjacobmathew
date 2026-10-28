import "./globals.css";

export const metadata = {
  title: "CA Jayson Jacob Mathew | Chartered Accountant & Succession Strategist",
  description:
    "Partner at Saju & Co, Independent Director at Danube Industries, Director & International Business Advisor at IETO.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-ground text-ink selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
