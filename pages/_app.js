import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }){
  return (
    <>
      <Head>
        <title>DEBO For General Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="min-h-[70vh]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
