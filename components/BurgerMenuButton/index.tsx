import { Burger, useMantineTheme } from '@mantine/core';

type BurgerMenuButtonProps = {
	opened: boolean;
	clickHandler: () => void;
	title?: string;
};
export const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({
	clickHandler,
	opened,
	title,
}) => {
	const theme = useMantineTheme();

	return (
		<Burger
			title={title}
			size="md"
			mr="xl"
			color={theme.colors.gray[7]}
			opened={opened}
			onClick={clickHandler}
		/>
	);
};

export default BurgerMenuButton;
