import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext,
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
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

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="google" content="notranslate" />

					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.10.7/antd.min.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="modalRoot" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
