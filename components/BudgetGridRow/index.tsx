import * as React from 'react';

import * as S from './styles';

import formatAmount from 'utils/formatAmount';

type BudgetGridRowProps = {
	expense: Expense;
	categories: Categories;
	setEditExpense: (id: Expense['id']) => void;
};

export const BudgetGridRow: React.FC<BudgetGridRowProps> = ({
	expense,
	categories,
	setEditExpense,
}) => {
	const amount = formatAmount(expense.amount);
	const { id, categoryId, description } = expense;
	const category = categories[categoryId];

	const tableContent = [
		{
			label: 'Category',
			content: category,
		},
		{
			label: 'Description',
			content: description,
		},
		{
			label: 'Amount',
			content: amount,
		},
	];
	return (
		<S.TableRow key={id} onClick={() => setEditExpense(id)}>
			{tableContent.map(({ content, label }) => (
				<td
					key={label}
					className={
						label === 'Amount' ? (amount.isNegative ? 'neg' : 'pos') : ''
					}
				>
					<S.Label>{label}</S.Label>
					<S.Content>{content}</S.Content>
				</td>
			))}
		</S.TableRow>
	);
};

export default BudgetGridRow;
