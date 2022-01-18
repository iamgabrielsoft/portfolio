import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'



export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Gabriel Soft - Open Source & Web" />
          <meta name="description" content="Hey there, This is Gabrielsoft. I am an OpenSource & Web developer who loves to works on Web Project" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gabrielsoft - Open Source & Web Dev" />
          <meta property="og:description" content="Hey there, This is Gabrielsoft. I am an OpenSource & Web developer who loves to works on Web Project" />
          <meta property="og:image" content="https://www.gabrielsoft.com/images/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Gabrielsoft - Open Source & Web Dev" />
          <meta property="twitter:description" content="Hey there, This is Gabrielsoft. I am a Open Source & Web developer " />
          <meta property="twitter:image" content="https://www.gabrielsoft.com/images/banner.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
