import * as React from 'react';

import { AppShell } from '@mantine/core';

import MainNavbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

export const Layout: React.FC = ({ children }) => {
	return (
		<SidebarOpenedContextProvider>
			<AppShell
				navbarOffsetBreakpoint="sm"
				fixed
				navbar={
					<Sidebar
						height={'100%'}
						hiddenBreakpoint="md"
						width={{ base: 100, lg: 300, sm: '100%' }}
					/>
				}
				header={<MainNavbar height={100} />}
			>
				<div style={{ flex: 1, minHeight: '95%' }}>{children}</div>
				<Footer />
			</AppShell>
		</SidebarOpenedContextProvider>
	);
};

export default Layout;

const SidebarOpenedContext = React.createContext<{
	opened: boolean;
	toggleOpened: () => void;
}>({ opened: false, toggleOpened: () => {} });
const { Provider } = SidebarOpenedContext;

const SidebarOpenedContextProvider: React.FC = ({ children }) => {
	const [opened, setOpened] = React.useState<boolean>(false);
	const toggleOpened = () => setOpened(!opened);
	return <Provider value={{ opened, toggleOpened }}>{children}</Provider>;
};
export const useOpened = () => React.useContext(SidebarOpenedContext);
