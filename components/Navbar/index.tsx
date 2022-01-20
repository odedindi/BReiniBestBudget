import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

import * as S from './styles';

const Navbar: React.FC = () => {
	const router = useRouter();
	const isActive = (pathname: string) => router.pathname === pathname;

	const { data: session, status } = useSession();
	const isLoading = status === 'loading';

	return (
		<S.Nav>
			<S.Left loading={isLoading}>
				<Link href="/">
					<a className="bold" data-active={isActive('/')}>
						Home
					</a>
				</Link>
				{session && (
					<Link href="javascript:void(0)">
						<a data-active={isActive('/whatEver')}>whatEver</a>
					</Link>
				)}
			</S.Left>
			<S.Right loading={isLoading}>
				{isLoading ? (
					<p>Validating session ...</p>
				) : session ? (
					<>
						<p>
							{session.user?.name} ({session.user?.email})
						</p>
						<Link passHref href="javascript:void(0)">
							<button>
								<a>some where</a>
							</button>
						</Link>
						<button onClick={() => signOut()}>
							<a>Log out</a>
						</button>
					</>
				) : (
					<Link href="/api/auth/signin">
						<a data-active={isActive('/signup')}>Log in</a>
					</Link>
				)}
			</S.Right>
		</S.Nav>
	);
};

export default Navbar;
