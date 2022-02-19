import styled from 'styled-components';

export const MainSvg = styled.svg`
	filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.16));
`;

export const StackedChart = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-content: flex-start;
	flex-flow: wrap;
`;

export const XAxis = styled.g`
	font-size: 16px;
	font-family: Roboto, Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Helvetica, Arial, sans-serif;
	font-weight: bold;
	text-anchor: middle;
`;
export const Amount = styled.text`
	font-size: 16px;
`;
