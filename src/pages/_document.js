// pages/_document.js
 
import Document, { Html, Head, Main, NextScript } from 'next/document';
 
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M9MEW3HEYE"></script>
 
       
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-M9MEW3HEYE');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
 
export default MyDocument;