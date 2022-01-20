import type { NextPage } from 'next';
import * as S from 'styles/Home';
import Navbar from 'components/Navbar';
import Spinner from 'components/Spinner';

const Home: NextPage = () => {
	return (
		<S.Container>
			<Navbar />
			<S.Main>
				<Spinner />
				Welcome to BReini Best Budget App
				<p>Time to get your expenses under control!</p>
			</S.Main>

			<S.Footer>
				<a href="https://odedo.dev" target="_blank" rel="noopener noreferrer">
					Odedindi
				</a>
			</S.Footer>
		</S.Container>
	);
};

export default Home;
