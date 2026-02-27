import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carrots Agency | Digital Marketing Growth',
  description: 'Drive qualified leads with AI-powered campaigns across Google Ads, Meta, TikTok & more.',
  keywords: 'marketing agency, digital marketing, lead generation, Google Ads, Meta Ads, TikTok Ads, AI',
  viewport: 'width=device-width, initial-scale=1',
  authors: [{ name: 'Carrots Agency' }],
  openGraph: {
    title: 'Carrots Agency | Digital Marketing Growth',
    description: 'Drive qualified leads with AI-powered campaigns across Google Ads, Meta, TikTok & more.',
    url: 'https://carrotsagency.com',
    siteName: 'Carrots Agency',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
