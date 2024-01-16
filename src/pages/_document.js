// pages/_document.js
 
import Document, { Html, Head, Main, NextScript } from 'next/document';
 
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1QTM31PVEF"></script>
       
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                  window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-1QTM31PVEF');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Start of HubSpot Embed Code --> */}   
<script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/25627020.js"></script>
{/* <!-- End of HubSpot Embed Code --> **/}
        </body>
      </Html>
    );
  }
}
 
export default MyDocument;