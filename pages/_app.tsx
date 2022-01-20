import type { AppProps } from 'next/app';
import Providers from 'providers';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<Providers session={pageProps.session}>
		<Component {...pageProps} />;
	</Providers>
);

export default MyApp;
