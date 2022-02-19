import * as React from 'react';

import {
	ActionIcon,
	Navbar,
	NavbarProps,
	useMantineColorScheme,
} from '@mantine/core';

import { SunIcon, MoonIcon } from '@modulz/radix-icons';

import { useOpened } from '..';

export const Sidebar = (props: Omit<NavbarProps, 'children'>) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const isDark = colorScheme === 'dark';

	const { opened } = useOpened();
	return (
		<Navbar
			hidden={!opened}
			padding="xs"
			{...props}
		>
			<Navbar.Section>
				First Section
				<ActionIcon
					variant="light"
					radius="lg"
					color={isDark ? 'yellow' : 'blue'}
					onClick={() => toggleColorScheme()}
					title="Toggle color scheme"
				>
					{isDark ? (
						<SunIcon style={{ width: 18, height: 18 }} />
					) : (
						<MoonIcon style={{ width: 18, height: 18 }} />
					)}
				</ActionIcon>
			</Navbar.Section>
			<Navbar.Section grow mt="lg">
				Grow Section
			</Navbar.Section>
			<Navbar.Section>Last Section</Navbar.Section>
		</Navbar>
	);
};

export default Sidebar;
