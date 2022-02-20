import { Text, useMantineTheme } from '@mantine/core';

export const Logo = () => {
	const theme = useMantineTheme();

	return (
		<Text size="lg" weight={700} lineClamp={2} color={theme.colors.cyan[7]}>
			Breini&apos;s Best Budget App
		</Text>
	);
};
export default Logo;
