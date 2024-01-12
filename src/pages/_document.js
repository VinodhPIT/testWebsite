// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
 
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
{/* <!-- Start of HubSpot Embed Code --> */}
<script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/25627020.js"></script>
{/* <!-- End of HubSpot Embed Code --> */}
        </body>
      </Html>
    );
  }
}
 
export default MyDocument;