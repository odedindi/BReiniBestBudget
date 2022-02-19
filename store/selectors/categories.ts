import { DEFAULT_CATEGORY_ID } from 'store/reducers/categories';

export const getCategories = (state: RootState): Categories =>
	state.categories || {};

export const getDefaultCategoryId = () => DEFAULT_CATEGORY_ID;
