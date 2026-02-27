import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Carrots Agency | Digital Marketing Growth",
  description: "Drive qualified leads with AI-powered campaigns across Google Ads, Meta, TikTok & more.",
  keywords: "marketing agency, digital marketing, lead generation, Google Ads, Meta Ads, TikTok Ads, AI",
  icons: {
    icon: '/FAvicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased overflow-x-hidden max-w-full`}>
        <div className="w-full max-w-full overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
