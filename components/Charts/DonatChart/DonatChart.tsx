import * as React from 'react';

import * as S from './styles';

import {
	Arc,
	arc,
	DefaultArcObject,
	Pie,
	pie,
	ScaleOrdinal,
	scaleOrdinal,
	schemeCategory10,
} from 'd3';

import { shuffleArray } from 'utils/shuffleArray';

import { Path } from '.';
import { Chart, Legend } from '..';

const randomScheme = shuffleArray([...schemeCategory10]);

type DonutChartProps = {
	data: ExpenseSummary[];
	dataLabel: string;
	dataKey: string;
	dataAmount?: string;
	color?: ScaleOrdinal<string, string>;
	height?: number;
	innerRatio?: number;
};

export const DonatChart: React.FC<DonutChartProps> = ({
	color = scaleOrdinal(randomScheme),
	data,
	dataAmount = 'amount',
	dataLabel,
	dataKey,
	height = 300,
	innerRatio = 4,
}) => {
	const chart = React.useRef<Pie<any, number | { valueOf(): number }> | any>(
		undefined!,
	);
	const pathArc = React.useRef<Arc<any, DefaultArcObject>>(undefined!);
	const colorFn = React.useRef<any>();
	const outerRadius = React.useRef<number>(0);
	const boxLength = React.useRef<number>(0);
	const chartPadding = 8;

	const getPathArc = React.useCallback(
		() =>
			arc()
				.innerRadius(height / innerRatio)
				.outerRadius(height),
		[height, innerRatio],
	);

	const updateChartVariables = React.useCallback(() => {
		chart.current = pie()
			.value((d) => d[dataAmount as keyof typeof d]())
			.sort();
		boxLength.current = height + chartPadding * 2;
		outerRadius.current = height / 2;
		pathArc.current = getPathArc();
		colorFn.current =
			color && color.domain && color.domain(['0', `${data.length}`]);
	}, [color, data.length, dataAmount, getPathArc, height]);

	React.useEffect(() => {
		updateChartVariables();
	}, [data, color, height, updateChartVariables]);

	return (
		<S.DonatChart>
			<Chart
				height={boxLength.current}
				width={boxLength.current}
				padding={chartPadding}
				transform={`translate(${outerRadius.current},${outerRadius.current})`}
			>
				{chart.current(data).map((datum: any, index: number) => (
					<Path
						data={datum}
						// index={index}
						fill={colorFn.current(index)}
						arcFn={pathArc.current}
						key={datum.data[dataKey]}
					/>
				))}
			</Chart>
			<Legend
				color={colorFn.current}
				{...{ data, dataAmount, dataLabel, dataKey }}
			/>
		</S.DonatChart>
	);
};

export default DonatChart;
