import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document<any> {
  public static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  public render() {
    return (
      <html lang="th">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-57x57.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <meta name="msapplication-TileColor" content="#cdaa04" />
          <meta name="theme-color" content="#ffffff" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.GUMLET_CONFIG = {
                  hosts: [{
                      current: "storage.googleapis.com",
                      gumlet: "revhere.gumlet.com"
                  }],
                  lazy_load: true,
                  auto_webp: true
                };
                `,
            }}
          />
          <script async src="https://cdn.gumlet.com/gumlet.js/2.0/gumlet.min.js"></script>
        </Head>
        <body>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
