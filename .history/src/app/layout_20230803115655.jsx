import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/context/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Polarized | Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
