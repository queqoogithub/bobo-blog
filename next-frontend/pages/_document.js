import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  
  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
  
    render() {
      return (
        <Html>
          <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400&display=swap"  />
          </Head>
          <body>
            <section className='font-prompt'>
               <Main />
               <NextScript />
            </section>
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument