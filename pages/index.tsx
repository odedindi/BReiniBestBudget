import * as React from 'react';
import type { NextPage } from 'next';
import * as S from 'styles/Home';
import styled from 'styled-components';
// import MyNavbar from 'components/Navbar';
import Spinner from 'components/Spinner';

import gsap from 'gsap';

import Carousel from 'components/Carousel';

import {
	ActionIcon,
	Anchor,
	Center,
	useMantineColorScheme,
} from '@mantine/core';

import Layout from 'components/Layout';
import { DataSelect } from 'components/DataSelect';
const Home: NextPage = () => {
	return (
		<Layout>
			<Spinner />
		</Layout>
	);
};

export default Home;
