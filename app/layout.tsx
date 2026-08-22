import type { Metadata, Viewport } from 'next';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  metadataBase: new URL('https://guogxy.github.io/'),
  title: {
    default: 'Celvion SuperPixel — Computational Telephoto Camera',
    template: '%s — Celvion SuperPixel',
  },
  description: 'Multi-frame computational telephoto, independently developed MFSR, RAW capture, and optional on-device AI enhancement for iPhone.',
  icons: { icon: `${basePath}/assets/app-icon.png`, apple: `${basePath}/assets/app-icon.png` },
  openGraph: {
    title: 'Celvion SuperPixel',
    description: 'More detail from the camera you have.',
    images: [`${basePath}/assets/app-icon.png`],
  },
};

export const viewport: Viewport = { themeColor: '#050712', colorScheme: 'dark' };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans"><body>{children}</body></html>
  );
}
