import * as React from 'react';

import * as S from './styles';

import gsap from 'gsap';

const Spinner = () => {
	const [tl] = React.useState(() => gsap.timeline({ repeat: -1 }));
	const circleRef = React.useRef<SVGCircleElement>(undefined!);

	const from = React.useMemo(
		() => ({
			ease: 'power1.easeInOut',
			rotation: 360,
			transformOrigin: '50% 50%',
			stroke: '#29B6F6',
		}),
		[],
	);
	const to = React.useMemo(
		() => ({
			rotation: -720,
			stroke: '#FF4081',
		}),
		[],
	);

	React.useEffect(() => {
		tl.fromTo(circleRef.current, from, to).duration(3);
		return () => {
			tl.kill();
		};
	}, [from, tl, to]);

	return (
		<S.Container title="Loading..." role="alert" aria-live="assertive">
			<S.Svg>
				<S.Circle ref={circleRef} />
			</S.Svg>
		</S.Container>
	);
};

export default Spinner;
