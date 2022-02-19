import * as React from 'react';
import { Provider } from 'react-redux';

import getStore from 'store';

export const ReduxStoreProvider: React.FC = ({ children }) => {
	const store = getStore();
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxStoreProvider;
