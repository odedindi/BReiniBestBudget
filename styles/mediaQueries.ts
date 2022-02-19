const customMediaQuery = (maxWidth: number) =>
	`@media screen and (max-width: ${maxWidth}px)`;

export const mediaQuery = {
	desktop: customMediaQuery(1200),
	laptop: customMediaQuery(1024),
	tablet: customMediaQuery(768),
	phone: customMediaQuery(480),
	xs: customMediaQuery(320),
};
