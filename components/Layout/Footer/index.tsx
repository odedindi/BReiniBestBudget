import * as React from 'react';

import * as S from './styles';

import { Anchor, Center, Text, useMantineTheme } from '@mantine/core';

export const Footer = () => {
	const theme = useMantineTheme();
	return (
		<S.Footer>
			<Center>
				<Anchor
					href="https://odedo.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Text color={theme.colors.cyan[7]} component="span">
						ODEDINDI
					</Text>
				</Anchor>
			</Center>
		</S.Footer>
	);
};
export default Footer;
