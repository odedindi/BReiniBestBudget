import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import * as S from './styles';

import {
	Burger,
	Container,
	Header,
	HeaderProps,
	MediaQuery,
	Text,
	useMantineTheme,
} from '@mantine/core';

import { useOpened } from '../';
import Logo from 'components/Logo';
import BurgerMenuButton from 'components/BurgerMenuButton';

type NavbarProps = {
	errorPage?: true;
};

const Navbar: React.FC<NavbarProps & Omit<HeaderProps, 'children'>> = ({
	errorPage,
	...rest
}) => {
	const theme = useMantineTheme();

	const { opened, toggleOpened } = useOpened();

	const router = useRouter();
	const isActive = (pathname: string) => router.pathname === pathname;

	const { data: session, status } = useSession();
	const isLoading = status === 'loading';

	return (
		<Header padding="md" {...rest}>
			{/* Handle other responsive styles with MediaQuery component or createStyles function */}
			<S.Nav>
				<section
					style={{ display: 'flex', alignItems: 'center', height: '100%' }}
				>
					<Container style={{ display: 'flex' }} size={250}>
						{!errorPage && (
							<MediaQuery largerThan="md" styles={{ display: 'none' }}>
								<BurgerMenuButton
									clickHandler={toggleOpened}
									opened={opened}
									title="Open navigation"
								/>
							</MediaQuery>
						)}
						<Logo />
					</Container>
				</section>
				<S.Left>
					<Link passHref href="/">
						<Text component="a" data-active={isActive('/')}>
							Home
						</Text>
					</Link>
					{session && (
						<>
							<Link passHref href="/budget">
								<Text component="a" data-active={isActive('/budget')}>
									Budget
								</Text>
							</Link>
							<Link passHref href="/reports">
								<Text component="a" data-active={isActive('/reports')}>
									Reports
								</Text>
							</Link>
						</>
					)}
				</S.Left>
				<S.Right>
					{isLoading ? (
						<p>Validating session ...</p>
					) : session ? (
						<>
							<Text>
								{session.user?.name} ({session.user?.email})
							</Text>
							<Text component="a" onClick={() => signOut()}>
								Sign Out
							</Text>
						</>
					) : (
						<Link passHref href="/api/auth/signin">
							<Text component="a" data-active={isActive('/signup')}>
								Log in
							</Text>
						</Link>
					)}
				</S.Right>
			</S.Nav>
		</Header>
	);
};

export default Navbar;
