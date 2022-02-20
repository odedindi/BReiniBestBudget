import * as React from 'react';

import * as S from './styles';

import { ScaleBand } from 'd3';

import formatAmount from 'utils/formatAmount';

type XaxisProps = {
	transform?: string;
	labelColor?: string;
	valueColor?: string;
	data: {
		inflow: ExpenseSummary[];
		outflow: ExpenseSummary[];
	};
	totals: {
		inflow: number;
		outflow: number;
	};
	xScale: ScaleBand<number>;
};

export const XAxis: React.FC<XaxisProps> = ({
	data,
	totals,
	transform = '',
	labelColor = '#000',
	valueColor = '#999',
	xScale,
}) => (
	<S.XAxis transform={transform}>
		{Object.keys(data).map((key, i) => (
			<g
				key={key}
				transform={`translate(${xScale(i)! + xScale.bandwidth() / 2}, 0)`}
			>
				<line stroke={labelColor} y2="6" x1="0.5" x2="0.5" />
				<text fill={labelColor} y="9" x="0.5" dy="0.8em">
					{key.toUpperCase()}
				</text>
				<S.Amount fill={valueColor} y="35" x="0.5" dy="0.6em">
					{formatAmount(totals[key as keyof typeof totals]).text}
				</S.Amount>
			</g>
		))}
	</S.XAxis>
);

export default XAxis;
