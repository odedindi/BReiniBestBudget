import * as React from 'react';

type FallbackComponentProps = {
	error: Error;
	info: Object;
};

type ErrorBoundaryProps = {
	children: React.ReactNode;
	fallbackComponent: React.ComponentType<FallbackComponentProps>;
	onError?: (error: Error, info: Object) => void;
};

type ErrorBoundaryState = {
	error?: Error;
	info?: Object;
};

export default class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	static defaultProps = { onError: null };

	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { error: undefined, info: undefined };
	}

	componentDidCatch(error: Error, info: Object) {
		// Catch errors in any components below and re-render with error message
		this.setState({ error: error, info: info });

		// A callback can be used to log error messages
		if (this.props.onError) this.props.onError(error, info);
	}

	render() {
		const { fallbackComponent } = this.props;
		const { error, info } = this.state;

		return error && info
			? // Render error component
			  React.createElement(fallbackComponent, { error, info })
			: // Normally, just render children
			  this.props.children;
	}
}
