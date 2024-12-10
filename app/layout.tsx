import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import Footer from '@/app/ui/footer';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Digital Certificate',
    default: 'Digital Certificate',
  },
  //description: '',
  //metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
