import * as React from 'react';
import { Stream } from 'react-streams';
import { Observable } from 'rxjs';

const useStream = (src$: Observable<any>) => {
	const { Consumer } = React.createContext({ src$ });

	const Consume = (props: any) => (
		<Consumer>{({ src$ }) => <Stream source={src$} {...props} />}</Consumer>
	);

	// eslint-disable-next-line react/display-name
	const Debug = (title: string) => (data: any) =>
		(
			<div
				style={{
					fontFamily: 'Menlo',
					backgroundColor: 'whitesmoke',
					padding: '1.5rem',
				}}
			>
				<h4>{title}</h4>
				{JSON.stringify(data)}
			</div>
		);

	return { Consume, Debug };
};
export default useStream;
