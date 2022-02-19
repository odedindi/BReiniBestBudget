import { ScaleLinear } from 'd3';
import * as React from 'react';

import { Rect } from './';

type BarProps = {
	yScale: ScaleLinear<number, number>;
	colorFn: Function;
	data: ExpenseSummary[];
	transform: string;
	width: number;
};

export const Bar: React.FC<BarProps> = ({
	yScale,
	colorFn,
	data,
	transform,
	width,
}) => {
	const yPositions = React.useRef<any[]>([]);
	const updateChartVariables = React.useCallback(() => {
		let start = yScale.range()[0];

		yPositions.current = data.map(({ amount }) => {
			start -= yScale(amount);
			return start;
		});
	}, [data, yScale]);
	React.useEffect(() => {
		updateChartVariables();
	}, [data, updateChartVariables, yScale]);

	return (
		<g transform={transform}>
			{data.map(({ amount, categoryId }, i) => (
				<Rect
					key={categoryId}
					y={yPositions.current[i]}
					height={yScale(amount)}
					width={width}
					fill={colorFn(i)}
				/>
			))}
		</g>
	);
};

export default Bar;
