import * as React from 'react';

import { select, interpolate } from 'd3';

type RectProps = {
	width: number;
	height: number;
	fill: string;
	y: number;
	animDuration?: number;
};

export const Rect: React.FC<RectProps> = ({
	width,
	height,
	fill,
	y,
	animDuration = 1000,
}) => {
	const rectRef = React.useRef<SVGRectElement>(undefined!);

	React.useEffect(() => {
		const rect = select(rectRef.current);
		if (rectRef.current) {
			const interpolateHeight = interpolate(
				1000,
				rectRef.current.getAttribute('height')!,
			);

			rect
				.transition()
				.duration(animDuration * Math.random())
				.attrTween('height', () => (t) => interpolateHeight(t));
		}
	}, [animDuration]);
	return <rect ref={rectRef} {...{ y, height, width, fill }} />;
};

export default Rect;
