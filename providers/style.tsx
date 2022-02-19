import * as React from 'react';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyle, lightTheme, darkTheme } from 'styles';

import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';

const StyleProvider: React.FC = ({ children }) => {
	const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
		key: 'color-scheme',
		defaultValue: 'light',
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	return (
		// <ThemeProvider theme={value ? darkTheme : lightTheme}>
		// 	<GlobalStyle />
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				/** Put your mantine theme override here */
				theme={{ colorScheme }}
			>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>

		// </ThemeProvider>
	);
};

export default StyleProvider;
