import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hire Angular Developers to have seamless visulizations across all devices and help you to build high performace scalable apps to enhance productivity by 70%."
        />
        <meta
          name="keywords"
          content="web design & development company, custom mobile app development company, front end development company, business intelligence and data analytics"
        />
        <meta name="author" content=""></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
// import Document from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

// export default class MyDocument extends Document {
// static async getInitialProps(ctx) {
//     const sheet = new ServerStyleSheet()
//     const originalRenderPage = ctx.renderPage

//     try {
//         ctx.renderPage = () =>
//             originalRenderPage({
//                 enhanceApp: (App) => (props) =>
//                     sheet.collectStyles(<App {...props} />),
//             })

//         const initialProps = await Document.getInitialProps(ctx)
//         return {
//             ...initialProps,
//             styles: (
//                 <>
//                     {initialProps.styles}
//                     {sheet.getStyleElement()}
//                 </>
//             ),
//         }
//     } finally {
//         sheet.seal()
//     }
// }
// }
