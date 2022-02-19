import type { Session } from 'next-auth';
import SEO from './SEO';
import StyleProvider from './style';
import { SessionProvider } from 'next-auth/react';

import ReduxStoreProvider from './ReduxStore';

type ProvidersProps = {
	session: Session;
};

const Providers: React.FC<ProvidersProps> = ({ children, session }) => (
	<SessionProvider session={session}>
		<StyleProvider>
			<SEO />
			<ReduxStoreProvider>{children}</ReduxStoreProvider>
		</StyleProvider>
	</SessionProvider>
);

export default Providers;
