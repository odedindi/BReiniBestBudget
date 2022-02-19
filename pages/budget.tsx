import * as React from 'react';
import type { NextPage } from 'next';

import Spinner from 'components/Spinner';

import gsap from 'gsap';

import Carousel from 'components/Carousel';

import Layout from 'components/Layout';

const Budget: NextPage = () => {
	return (
		<Layout>
			<h1>Budget</h1>
			<Spinner />
		</Layout>
	);
};

export default Budget;
