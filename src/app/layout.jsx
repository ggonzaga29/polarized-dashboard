import './globals.css';
import { ThemeProvider } from '@/context/theme-provider';
import ThemeToggle from '@/components/theme-toggle';
import '@fontsource-variable/inter';

export const metadata = {
  title: 'Polarized | Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        
        </ThemeProvider>
      </body>
    </html>
  );
}
