import * as React from 'react';
import * as S from './styles';

type ChartProps = {
	width: number;
	height: number;
	padding?: number;
	transform?: string;
};

export const Chart: React.FC<ChartProps> = ({
	width,
	height,
	padding = 0,
	transform = '',
	children,
}) => (
	<S.MainSvg
		width={width}
		height={height}
		viewBox={`-${padding} -${padding} ${width} ${height}`}
	>
		<g transform={transform}>{children}</g>
	</S.MainSvg>
);

export default Chart;
