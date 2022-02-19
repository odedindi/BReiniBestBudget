import * as React from 'react';

import * as S from './styles';

import formatAmount from 'utils/formatAmount';

type LegendProps = {
	data: ExpenseSummary[];
	dataAmount: string;
	dataLabel: string;
	dataKey: string;
	color: Function;
	reverse?: boolean;
};

export const Legend: React.FC<LegendProps> = ({
	data,
	dataAmount,
	dataLabel,
	dataKey,
	color,
	reverse = false,
}) => (
	<S.Legend reverse={reverse}>
		{data.map((item, i) => (
			<li key={item[dataKey as keyof ExpenseSummary]} color={color(i)}>
				<span>{item[dataLabel as keyof ExpenseSummary]}</span>
				<S.Amount>
					{
						formatAmount(
							item[
								dataAmount as keyof ExpenseSummary
							] as ExpenseSummary['amount'],
						).text
					}
				</S.Amount>
			</li>
		))}
	</S.Legend>
);

export default Legend;
