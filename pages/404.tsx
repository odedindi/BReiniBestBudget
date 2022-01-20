import type { NextPage } from 'next';
import Link from 'next/link';
import * as S from 'styles/Home';

const FourZeroFour: NextPage = () => {
	return (
		<S.Container>
			<S.Main>Error</S.Main>
			404:
			<Link passHref href="/">
				<a>Go home </a>
			</Link>
			<S.Footer>
				<a href="https://odedo.dev" target="_blank" rel="noopener noreferrer">
					Odedindi
				</a>
			</S.Footer>
		</S.Container>
	);
};

export default FourZeroFour;
