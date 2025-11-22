import localFont from 'next/font/local';
import { CartProvider } from './providers/CartProvider';
import './scss/style.scss';
import { Basket } from './ui/basket';
import { Header } from './ui/header';

const GTEestiProText = localFont({
  src: [
    {
      path: './fonts/EestiBold.otf',
      weight: '700'
    },
    {
      path: './fonts/EestiRegular.otf',
      weight: '500'
    }
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      </head>
      <body className={GTEestiProText.className}>
        <CartProvider>
          <Header></Header>
          <Basket></Basket>
          <main>
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}

