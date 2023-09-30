import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import '../styles/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Joonas Stengård portfolio</title>
        <link rel="shortcut icon" href="https://pasteboard.co/nzamFL2RXwLV.x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://i.imgur.com/no2sAQe.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://i.imgur.com/7hdO0pb.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://i.imgur.com/lj6qru6.png"/>
      </Head>
      <Analytics />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
