import { Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const raleway = Raleway({
  subsets: ['latin'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e74c3c',
};

export const metadata = {
  metadataBase: new URL('https://your-master.org'),
  title: 'Your Master - майстри на всі руки',
  description:
    'Наші фахівці допоможуть з будь-яким завданням: від встановлення полички до ремонтих робіт на подвірʼї чи вдома.',
  openGraph: {
    title: 'Your Master',
    description:
      'Наші фахівці допоможуть з будь-яким завданням: від встановлення полички до ремонтих робіт на подвірʼї чи вдома.',
    url: 'https://your-master.org',
    siteName: 'Your Master',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Master',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Master',
    description:
      'Наші фахівці допоможуть з будь-яким завданням: від встановлення полички до ремонтих робіт на подвірʼї чи вдома.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={raleway.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
