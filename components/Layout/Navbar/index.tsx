import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import * as S from './styles';

import {
	Burger,
	Header,
	HeaderProps,
	MediaQuery,
	Text,
	useMantineTheme,
} from '@mantine/core';

import { useOpened } from '../';

const Navbar: React.FC<Omit<HeaderProps, 'children'>> = (props) => {
	const theme = useMantineTheme();

	const { opened, toggleOpened } = useOpened();

	const router = useRouter();
	const isActive = (pathname: string) => router.pathname === pathname;

	const { data: session, status } = useSession();
	const isLoading = status === 'loading';

	return (
		<Header padding="md" {...props}>
			{/* Handle other responsive styles with MediaQuery component or createStyles function */}
			<S.Nav>
				<section
					style={{ display: 'flex', alignItems: 'center', height: '100%' }}
				>
					<MediaQuery largerThan="md" styles={{ display: 'none' }}>
						<Burger
							title="Open navigation"
							size="md"
							mr="xl"
							color={theme.colors.gray[7]}
							opened={opened}
							onClick={toggleOpened}
						/>
					</MediaQuery>

					<Text>Breini&apos;s Best Budget App</Text>
				</section>
				<S.Left loading={isLoading}>
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
				<S.Right loading={isLoading}>
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
						<Link href="/api/auth/signin">
							<a data-active={isActive('/signup')}>Log in</a>
						</Link>
					)}
				</S.Right>
			</S.Nav>
		</Header>
	);
};

export default Navbar;
