import type { NextPage } from 'next';
import Link from 'next/link';
import * as S from 'styles/Home';

import Layout from 'components/Layout';
import { Text } from '@mantine/core';

const FourZeroFour: NextPage = () => {
	return (
		<Layout errorPage>
			<S.Main>
				<Text>Error 404:</Text>
				<Link passHref href="/">
					<Text component="a">Go home </Text>
				</Link>
			</S.Main>
		</Layout>
	);
};

export default FourZeroFour;
