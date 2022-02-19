import * as React from 'react';
import type { NextPage } from 'next';

import Spinner from 'components/Spinner';

import gsap from 'gsap';

import Carousel from 'components/Carousel';

import Layout from 'components/Layout';

const Reports: NextPage = () => {
	return (
		<Layout>
			<h1>Reports</h1>
			<Spinner />
		</Layout>
	);
};

export default Reports;
