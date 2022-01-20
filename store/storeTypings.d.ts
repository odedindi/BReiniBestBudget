type RootState = {
	auth: any;
	expenses: Expense[];
	filters: { text: string; sortBy: string; startDate: Moment; endDate: Moment };
};
