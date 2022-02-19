import * as React from 'react';

import * as S from './styles';
import type { FormattedAmount } from 'utils/formatAmount';

type BalanceProps = {
	title: string;
	amount: FormattedAmount;
	colorize: boolean;
	prefix?: string;
};

export const BalanceItem = ({
	title,
	amount: { isNegative, text },
	colorize = true,
	prefix = undefined,
}: BalanceProps) => {
	const prefixElement = typeof prefix === 'string' && (
		<S.BalanceSymbol key="prefix">{prefix}</S.BalanceSymbol>
	);

	const balanceElement = (
		<S.BalanceWrapper key="item">
			<S.BalanceItem>
				<S.BalanceAmount
					className={colorize && isNegative ? 'neg' : 'pos' || ''}
				>
					{text}
				</S.BalanceAmount>
				<S.BalanceTitle>{title}</S.BalanceTitle>
			</S.BalanceItem>
		</S.BalanceWrapper>
	);

	return { balanceElement, prefixElement };
};

export const BalanceRow: React.FC = ({ children }) => (
	<S.Container>
		<S.Row>{children}</S.Row>
	</S.Container>
);
