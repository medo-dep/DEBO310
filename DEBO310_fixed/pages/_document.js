import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1E40AF" />
      </Head>
      <body className="bg-slate-50 text-slate-900 font-qatar antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
