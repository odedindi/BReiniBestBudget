import * as React from 'react';

import { select, interpolate } from 'd3';

type PathProps = {
	data: any;
	fill: string;
	arcFn: any;
	animDuration?: number;
};

export const Path: React.FC<PathProps> = ({
	data,
	fill,
	arcFn,
	animDuration = 1000,
}) => {
	const pathRef = React.useRef<SVGPathElement>(undefined!);

	React.useEffect(() => {
		if (!pathRef.current) return;

		const path = select(pathRef.current);
		const interpolateArc = interpolate(
			{ startAngle: 0, endAngle: 0 },
			{ startAngle: data.startAngle, endAngle: data.endAngle },
		);

		path
			.transition()
			.duration(animDuration)
			.attrTween('d', () => (t) => arcFn(interpolateArc(t)));
	}, [animDuration, arcFn, data.endAngle, data.startAngle]);

	return <path ref={pathRef} fill={fill} d={arcFn(data)} />;
};

export default Path;
