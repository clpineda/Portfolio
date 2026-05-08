import { DM_Serif_Display, Figtree } from 'next/font/google';
import './globals.css';

// Display / heading font
const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

// Body font
const figtree = Figtree({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Chester Lance R. Pineda — Full-Stack Engineer',
  description:
    'Full-Stack Engineer based in Pampanga, PH. Building fast, thoughtful web applications from APIs to interfaces.',
  openGraph: {
    title: 'Chester Lance R. Pineda — Full-Stack Engineer',
    description: 'Portfolio of Chester Lance R. Pineda, a Full-Stack Web Engineer.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
