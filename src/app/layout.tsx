import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SPRY Production | AI UGC & Cinematic Ads Studio',
  description: '100% AI-generated high-converting video ads and commercials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#040407] text-white antialiased selection:bg-purple-500 selection:text-white">
        <CustomCursor />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
