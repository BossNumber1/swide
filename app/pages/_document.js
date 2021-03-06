import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="ru">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/swiper/swiper-bundle.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/swiper/swiper-bundle.min.css"
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
