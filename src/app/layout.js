import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Поставка, продажа и покупка металлов и сплавов - Профессиональные услуги",
    template: "%s | Металлы и Сплавы"
  },
  description: "Поставка, продажа и покупка металлов и сплавов. Профессиональные услуги по закупке и реализации металлопроката. Выгодные цены, быстрая обработка заявок, консультации экспертов.",
  keywords: ["поставка металлов", "продажа металлов", "покупка металлов", "металлопрокат", "сплавы", "сталь", "алюминий", "медь", "титан", "закупка металлов"],
  authors: [{ name: "Металлы и Сплавы" }],
  creator: "Металлы и Сплавы",
  publisher: "Металлы и Сплавы",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://metalls.example.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ru-RU': '/ru',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Поставка, продажа и покупка металлов и сплавов - Профессиональные услуги",
    description: "Поставка, продажа и покупка металлов и сплавов. Профессиональные услуги по закупке и реализации металлопроката. Выгодные цены, быстрая обработка заявок.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://metalls.example.com',
    siteName: 'Металлы и Сплавы',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Металлы и Сплавы - Логотип',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Поставка, продажа и покупка металлов и сплавов - Профессиональные услуги",
    description: "Поставка, продажа и покупка металлов и сплавов. Профессиональные услуги по закупке и реализации металлопроката. Выгодные цены, быстрая обработка заявок.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
