import * as React from 'react';

import * as S from './styles';

import {
	max,
	ScaleBand,
	scaleBand,
	ScaleLinear,
	scaleLinear,
	scaleOrdinal,
	schemeCategory10,
} from 'd3';

import { shuffleArray } from 'utils/shuffleArray';

import { Bar, XAxis } from '.';
import { Chart, Legend } from '..';

const outflowScheme = shuffleArray([
	...schemeCategory10.slice(0, 2),
	...schemeCategory10.slice(3),
]);
const inflowScheme = ['#2ca02c']; // inflow always green

type StackedChartProps = {
	width?: number;
	height?: number;
	dataAmount?: string;
	dataLabel: string;
	dataKey: string;
	data: {
		inflow: ExpenseSummary[];
		outflow: ExpenseSummary[];
	};
	totals: {
		inflow: number;
		outflow: number;
	};
};

export const StackedChart: React.FC<StackedChartProps> = ({
	data,
	dataAmount = 'amount',
	dataLabel,
	dataKey,
	height = 500,
	totals,
	width = 300,
}) => {
	const dataKeys = React.useRef<string[]>([]);
	const xScale = React.useRef<ScaleBand<number>>(undefined!);
	const yScale = React.useRef<ScaleLinear<number, number>>(undefined!);
	const colorFn = React.useRef<any>({});
	const boxLength = React.useRef<number>(0);
	const boxHeight = React.useRef<number>(0);

	const barPadding = 0.15;
	const bottomPadding = 40;
	const chartPadding = 10;
	const color = React.useMemo(
		() => ({
			inflow: scaleOrdinal(inflowScheme),
			outflow: scaleOrdinal(outflowScheme),
		}),
		[],
	);

	const updateChartVariables = React.useCallback(() => {
		dataKeys.current = Object.keys(data);
		xScale.current = scaleBand<number>()
			.rangeRound([0, width - chartPadding * 2])
			.paddingInner(barPadding);
		xScale.current.domain([0, dataKeys.current.length - 1]);

		yScale.current = scaleLinear().rangeRound([
			height - chartPadding * 2 - bottomPadding,
			0,
		]);
		yScale.current.domain([max([totals.inflow, totals.outflow])!, 0]);

		colorFn.current = dataKeys.current.reduce((colorFn: any, key) => {
			colorFn[key] = color[key as keyof typeof color].domain([
				'0',
				`${data[key as keyof typeof data].length}`,
			]);
			return colorFn;
		}, {});

		boxLength.current = width + chartPadding * 2;
		boxHeight.current = height + chartPadding * 2;
	}, [color, data, height, totals.inflow, totals.outflow, width]);

	React.useEffect(() => {
		updateChartVariables();
	}, [data, updateChartVariables]);

	return (
		<S.StackedChart>
			<Chart
				width={boxLength.current}
				height={boxHeight.current}
				padding={chartPadding}
				transform={`translate(${chartPadding},${chartPadding})`}
			>
				{dataKeys.current.map((key, i) => (
					<Bar
						key={key}
						data={data[key as keyof typeof data]}
						yScale={yScale.current}
						colorFn={colorFn.current[key]}
						width={xScale.current?.bandwidth()}
						transform={`translate(${xScale.current(i)}, 0)`}
					/>
				))}
				<XAxis
					transform={`translate(0, ${
						yScale.current.range()[0] + chartPadding / 3
					})`}
					data={data}
					totals={totals}
					xScale={xScale.current}
				/>
			</Chart>
			<Legend
				color={colorFn.current.outflow}
				reverse
				data={data.outflow}
				{...{ dataAmount, dataLabel, dataKey }}
			/>
		</S.StackedChart>
	);
};

export default StackedChart;
