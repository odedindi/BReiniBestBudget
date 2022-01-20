import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from 'styles';
import useDarkMode from 'use-dark-mode';

const StyleProvider: React.FC = ({ children }) => {
	const { value } = useDarkMode(false);
	return (
		<ThemeProvider theme={value ? darkTheme : lightTheme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default StyleProvider;
