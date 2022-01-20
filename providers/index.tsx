import type { Session } from 'next-auth';
import SEO from './SEO';
import StyleProvider from './style';
import { SessionProvider } from 'next-auth/react';

type ProvidersProps = {
	session: Session;
};

const Providers: React.FC<ProvidersProps> = ({ children, session }) => (
	<SessionProvider session={session}>
		<StyleProvider>
			<SEO />
			{children}
		</StyleProvider>
	</SessionProvider>
);

export default Providers;
