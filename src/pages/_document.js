import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const basePath = "https://www.cflaborecare.com/resized_logos/logo_";
    const sizes = ["16x16", "32x32", "48x48", "64x64", "128x128", "256x256", "512x512", "1024x1024"];

    return (
      <Html lang="en">
        <Head>
          {/* Recommended Meta Tags for SEO */}
          <meta charSet="utf-8" />
          <meta name="description" content="Florida Sprinkler & Light specializes in efficient sprinkler system installations and elegant Arboriculture lighting solutions in Central Florida." />
          <link rel="canonical" href="https://www.cflaborecare.com/" />

          {/* Favicon and Icons */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/180x180.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/16x16.png`} />
          {sizes.map((size) => (
            <link key={size} rel="icon" type="image/png" sizes={`${size}`} href={`${basePath}/${size}.png`} />
          ))}

          {/* Preconnect and DNS Prefetch */}
          <link rel="preconnect" href="https://www.quantumcybersolutions.com/" />
          <link rel="dns-prefetch" href="https://www.quantumcybersolutions.com/" />
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
